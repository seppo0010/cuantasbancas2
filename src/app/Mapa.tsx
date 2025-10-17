'use client';
import styles from "./page.module.css";
import datos_ from './datos.json'
import { useEffect, useState } from "react";
import calcularDhondt from "./dhondt";
import { Eleccion } from "./types";
import { Bloque } from "./Bloque";
import { Legislador } from "./Legislador";
import { Provincia } from "./provincia";
import Link from "next/link";
import { Distrito } from "./Distrito";
import Sliders from './Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faRecycle } from '@fortawesome/free-solid-svg-icons';
import provinciaStyles from './provincia.module.css';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface DatosType {
  diputados: Legislador[];
  senadores: Legislador[];
  elecciones: { [nombre: string]: Eleccion };
  finalizaMandato: string;
  bloques: Bloque[];
}

const datos: DatosType = datos_ as DatosType;
const blancoKey = 'VOTO EN BLANCO';

export default function Mapa({ camara, distrito }: {
  camara: 'senadores' | 'diputados';
  distrito: null | Distrito;
}) {
  const eleccion = (Object.entries(datos.elecciones).filter((e) => e[1].camara === camara && e[1].distrito == distrito)[0] || [null])[0];
  const [votos, setVotos] = useState<null | { [eleccion: string]: { [partido: string]: number } }>(null);
  const [ready, setReady] = useState(false);
  const [locked, setLocked] = useState<[string, string][]>([]);
  const [legisladoresEleccion, setLegisladoresEleccion] = useState<{ [eleccion: string]: Legislador[] }>({});

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();

  // Efecto para cargar votos iniciales
  useEffect(() => {
    if (typeof window === 'undefined' || ready) return;
    const eleccionVotos = new URLSearchParams(searchParams.toString()).get('votos')

    const storedData = sessionStorage.getItem('votos');
    let votos;
    if (storedData && storedData !== 'undefined' && storedData !== 'null') {
      votos = JSON.parse(storedData)
    } else {
      votos = Object.fromEntries(Object.entries(datos.elecciones).map(([key, value]) => {
        const votosPartidos = Object.fromEntries(Object.entries(value.partidos).map(([k, v]) => [k, v.votos * 100]));
        const sumaVotos = Object.values(votosPartidos).reduce((sum, v) => sum + v, 0);
        const votoEnBlanco = 100 * 100 - sumaVotos;
        return [key, { ...votosPartidos, [blancoKey]: votoEnBlanco }];
      }))
    }
    if (eleccionVotos) {
      const partidos = Object.keys(votos[eleccion]).toSorted((p1, p2) => p1.localeCompare(p2));
      const urlVotos = eleccionVotos.split(',').map((x) => parseFloat(x) * 100);
      if (urlVotos.length === partidos.length) {
        votos[eleccion] = Object.fromEntries(partidos.map((p, i) => [p, urlVotos[i]]))
      }
    }
    setVotos(votos)
  }, [ready])

  // Efecto para calcular legisladores
  useEffect(() => {
    if (!votos) return;
    sessionStorage.setItem('votos', JSON.stringify(votos));

    const params = new URLSearchParams(searchParams.toString())
    params.set('votos', Object.entries(votos[eleccion]).toSorted((p1, p2) => p1[0].localeCompare(p2[0])).map((p) => `${(p[1]/100).toFixed(2)}`).join(','))
    router.replace(`${pathname}?${params}`, { scroll: false })
    const calcEleccion = (eleccion: string) => {
      const el = datos.elecciones[eleccion];
      if (el.camara === 'diputados') {
        // Calcular cuántas bancas se renuevan en esta provincia
        const bancasEnJuego = datos.diputados.filter((d) => 
          d.Distrito === el.distrito && d.FinalizaMandato === datos.finalizaMandato
        ).length;

        // Filtrar solo los partidos (excluir voto en blanco) para el cálculo
        const partidosKeys = Object.keys(el.partidos);
        const partidosConVotos = partidosKeys.map((p) => ({
          partido: p,
          votos: (votos[eleccion][p] / 100) * el.electores,
          porcentaje: votos[eleccion][p] / 100,
        }));
        
        return calcularDhondt(
          partidosConVotos,
          bancasEnJuego,
          el.electores
        ).flatMap(({ partido, bancas }) => 
          el.partidos[partido].candidatos.slice(0, bancas).map((c) => ({
            ...c,
            Distrito: el.distrito,
            IniciaMandato: datos.finalizaMandato,
            FinalizaMandato: el.finalizaMandatoNuevo,
            Bloque: partido,
          }))
        );
      } else {
        const partidos = Object.values(Object.entries(votos[eleccion]).toSorted((a, b) => - a[1] + b[1])).map((x) => x[0]).filter((p) => p != blancoKey);
        return el.partidos[partidos[0]].candidatos.slice(0, 2)
          .concat(el.partidos[partidos[1]].candidatos.slice(0, 1))
          .map((c, i) => ({
            ...c,
            Distrito: el.distrito,
            IniciaMandato: datos.finalizaMandato,
            FinalizaMandato: el.finalizaMandatoNuevo,
            Bloque: i < 2 ? partidos[0] : partidos[1],
          }));
      }
    }
    
    setLegisladoresEleccion(Object.fromEntries(
      Object.keys(datos.elecciones).map((e) => [e, calcEleccion(e)])
    ));
    setReady(true);
  }, [votos])

  if (!ready || votos === null) return <></>;

  const diputados = datos.diputados
    .filter((d) => d.FinalizaMandato !== datos.finalizaMandato)
    .concat(...Object.entries(datos.elecciones)
      .filter((e) => e[1].camara === 'diputados')
      .map((e) => legisladoresEleccion[e[0]]))
    .filter((x) => !!x);
  
  diputados.sort((d1, d2) => 
    datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - 
    datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque))
  );

  const senadores = datos.senadores
    .filter((d) => d.FinalizaMandato !== datos.finalizaMandato)
    .concat(...Object.entries(datos.elecciones)
      .filter((e) => e[1].camara === 'senadores')
      .map((e) => legisladoresEleccion[e[0]]))
    .filter((x) => !!x);
  
  senadores.sort((d1, d2) => 
    datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - 
    datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque))
  );

  return (
    <div className={styles.container}>
      <header className="hero is-light">
        <div className="hero-body">
          <div className={styles.headerContent}>
            <h1 className={`title is-1 ${styles.mainTitle}`}>¿Cuántas bancas?</h1>
            <h2 className={`subtitle is-3 ${styles.subtitle}`}>El simulador electoral</h2>
            <div className={`has-text-grey mb-4 ${styles.version}`}>Versión 2025 de elecciones nacionales argentinas</div>
            <div className={styles.projectLink}>
              Es parte del proyecto electoral{' '}
              <a 
                href="https://financiamientopolitico.poderciudadano.org/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Dinero y Política
              </a>
              {' '}de Poder Ciudadano
            </div>
          </div>
        </div>
      </header>

      {eleccion !== null && distrito && (
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            <Link href="/">Inicio</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <span className={styles.breadcrumbCurrent}>{distrito}</span>
          </div>
          <div className={`${provinciaStyles.metricasFlex} ${styles.breadcrumbMetricas}`}>
            <div className={provinciaStyles.metricaItem}>
              <FontAwesomeIcon icon={faChair} />
              <span>
                {(datos.elecciones[eleccion].camara === 'diputados' ? datos.diputados : datos.senadores)
                  .filter((l) => l.Distrito === distrito).length
                }
              </span>
            </div>
            <div className={provinciaStyles.metricaItem}>
              <FontAwesomeIcon icon={faRecycle} />
              <span>
                {(datos.elecciones[eleccion].camara === 'diputados' ? datos.diputados : datos.senadores)
                  .filter((l) =>
                    l.Distrito === distrito &&
                    l.FinalizaMandato === datos.finalizaMandato
                  ).length
                }
              </span>
            </div>
          </div>
        </div>
      )}

      <div className={styles.page}>
        <div className="columns is-variable is-1-mobile is-1-tablet">
          <div className="column is-half-widescreen">
            {eleccion !== null && (
              <Provincia
                enJuego={Object.fromEntries(
                  datos.bloques.map((b) => [
                    b.nombres[0],
                    (datos.elecciones[eleccion].camara === 'diputados' ? datos.diputados : datos.senadores)
                      .filter((l) =>
                        b.nombres.includes(l.Bloque) &&
                        l.Distrito === datos.elecciones[eleccion].distrito &&
                        l.FinalizaMandato === datos.finalizaMandato
                      ).length,
                  ])
                )}
                finalizaMandatoNuevo={datos.elecciones[eleccion].finalizaMandatoNuevo}
                bloques={datos.bloques}
                legisladores={
                  datos.elecciones[eleccion].camara === 'diputados'
                    ? diputados.filter((d) => d.Distrito === datos.elecciones[eleccion].distrito)
                    : senadores.filter((d) => d.Distrito === datos.elecciones[eleccion].distrito)
                }
              />
            )}
          </div>

          <div className="column is-half-widescreen">
            {eleccion !== null && (
              <Sliders
                eleccion={eleccion}
                datos={datos}
                votos={votos}
                locked={locked}
                setLocked={setLocked}
                setVotos={setVotos}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

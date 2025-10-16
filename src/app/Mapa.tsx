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
import { Distrito, slugsReverse } from "./Distrito";
import Sliders from './Sliders';
import ProvinciasGrid from './ProvinciasGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faRecycle } from '@fortawesome/free-solid-svg-icons';
import provinciaStyles from './provincia.module.css';

interface DatosType {
  diputados: Legislador[];
  senadores: Legislador[];
  elecciones: { [nombre: string]: Eleccion };
  finalizaMandato: string;
  bloques: Bloque[];
}

const datos: DatosType = datos_ as DatosType;

export default function Mapa({ camara, distrito }: {
  camara: 'senadores' | 'diputados';
  distrito: null | Distrito;
}) {
  const eleccion = (Object.entries(datos.elecciones).filter((e) => e[1].camara === camara && e[1].distrito == distrito)[0] || [null])[0];
  const [votos, setVotos] = useState<null | { [eleccion: string]: { [partido: string]: number } }>(null);
  const [ready, setReady] = useState(false);
  const [locked, setLocked] = useState<[string, string][]>([]);
  const [legisladoresEleccion, setLegisladoresEleccion] = useState<{ [eleccion: string]: Legislador[] }>({});

  // Efecto para cargar votos iniciales
  useEffect(() => {
    if (typeof window === 'undefined' || ready) return;
    const storedData = sessionStorage.getItem('votos');
    if (storedData && storedData !== 'undefined' && storedData !== 'null') {
      setVotos(JSON.parse(storedData))
    } else {
      setVotos(Object.fromEntries(Object.entries(datos.elecciones).map(([key, value]) => ([key,
        Object.fromEntries(Object.entries(value.partidos).map(([k, v]) => [k, v.votos * 100]))
      ]))))
    }
  }, [ready])

  // Efecto para calcular legisladores
  useEffect(() => {
    if (!votos) return;
    sessionStorage.setItem('votos', JSON.stringify(votos));

    const calcEleccion = (eleccion: string) => {
      const el = datos.elecciones[eleccion];
      if (el.camara === 'diputados') {
        return calcularDhondt(
          Object.keys(el.partidos).map((p) => ({
            partido: p,
            votos: votos[eleccion][p] * el.electores,
            porcentaje: votos[eleccion][p] / 100,
          })),
          Object.values(el.partidos)[0].candidatos.length,
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
        const partidos = Object.values(Object.entries(votos[eleccion]).toSorted((a, b) => - a[1] + b[1])).map((x) => x[0]);
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
          </div>
        </div>
      </header>
      
      {eleccion === null && (
        <div className={styles.camaraPickerContainer}>
          <Link href="/diputados">
            <span className={`${styles.camaraPicker} ${camara === 'diputados' ? styles.camaraPickerSelected : ''}`}>
              Diputados
            </span>
          </Link>
          <Link href="/senadores">
            <span className={`${styles.camaraPicker} ${camara !== 'diputados' ? styles.camaraPickerSelected : ''}`}>
              Senadores
            </span>
          </Link>
        </div>
      )}

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
                {datos.elecciones[eleccion].camara === 'diputados' 
                  ? diputados.filter((d) => d.Distrito === distrito).length
                  : senadores.filter((d) => d.Distrito === distrito).length
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

        {eleccion === null && (
          <ProvinciasGrid
            camara={camara}
            datos={datos}
            votos={votos}
          />
        )}

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
  );
}

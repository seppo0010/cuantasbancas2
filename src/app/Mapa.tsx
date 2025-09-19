'use client';
import styles from "./page.module.css";
import { Diputados } from './diputados'
import { Senadores } from './senadores'
import datos_ from './datos.json'
import { useEffect, useState } from "react";
import calcularDhondt from "./dhondt";
import { Eleccion } from "./Eleccion";
import { Bloque } from "./Bloque";
import { Legislador } from "./Legislador";
import { Provincia } from "./provincia";
import ProvinciaChart from "./ProvinciaChart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Distrito, slugsReverse } from "./Distrito";


const datos: {
  diputados: Legislador[],
  senadores: Legislador[],
  elecciones: { [nombre: string]: Eleccion },
  finalizaMandato: string,
  bloques: Bloque[]
} = datos_ as typeof datos;

export default function Mapa({ camara, distrito }: {
  camara: 'senadores' | 'diputados',
  distrito: null | Distrito
}) {
  const eleccion = (Object.entries(datos.elecciones).filter((e) => e[1].camara === camara && e[1].distrito == distrito)[0] || [null])[0];
  const [votos, setVotos] = useState<null | { [eleccion: string]: { [partido: string]: number } }>(null);

  useState(() => {
    if (typeof window === 'undefined') return;
    const storedData = sessionStorage.getItem('votos');
    if (storedData && storedData !== 'undefined' && storedData !== 'null') {
      setVotos(JSON.parse(storedData))
    } else {
      setVotos(Object.fromEntries(Object.entries(datos.elecciones).map(([key, value]) => ([key,
        Object.fromEntries(Object.entries(value.partidos).map(([k, v]) => [k, v.votos * 100]))
      ]))))
    }
  })

  useEffect(() => {
    sessionStorage.setItem('votos', JSON.stringify(votos));

    if (votos === null) return;
    const calcEleccion = (eleccion: string) => {
      const el = datos.elecciones[eleccion];
      if (el.camara === 'diputados') {
        return calcularDhondt(Object.keys(el.partidos).map((p) => ({
          partido: p,
          votos: votos[eleccion][p] * el.electores,
          porcentaje: votos[eleccion][p] / 100,
        })), Object.values(el.partidos)[0].candidatos.length, el.electores
        ).flatMap(({ partido, bancas }) => el.partidos[partido].candidatos.slice(0, bancas).map((c) => ({
          ...c,
          Distrito: el.distrito,
          IniciaMandato: datos.finalizaMandato,
          FinalizaMandato: el.finalizaMandatoNuevo,
          Bloque: partido,
        })))
      } else {
        const partidos = Object.values(Object.entries(votos[eleccion]).toSorted((a, b) => - a[1] + b[1])).map((x) => x[0]);
        return el.partidos[partidos[0]].candidatos.slice(0, 2).concat(el.partidos[partidos[1]].candidatos.slice(0, 1)).map((c, i) => ({
          ...c,
          Distrito: el.distrito,
          IniciaMandato: datos.finalizaMandato,
          FinalizaMandato: el.finalizaMandatoNuevo,
          Bloque: i < 2 ? partidos[0] : partidos[1],
        }))
      }
    }
    setLegisladoresEleccion(Object.fromEntries(Object.keys(datos.elecciones).map((e) => [e, calcEleccion(e)])))
  }, [votos])

  const router = useRouter()
  const [locked, setLocked] = useState<[string, string][]>([]);
  const updateVotos = (newP: number, p: string, v: { [partido: string]: number }, keepLocked: { [partido: string]: number }) => {
    if (eleccion === null) return;
    const sum = 100 * 100 - Object.values(keepLocked).reduce((x, y) => x + y, 0)
    if (newP < 0) newP = 0;
    if (newP > sum) newP = sum;
    const delta = v[p] - newP;
    if (v[p] === sum) {
      setVotos({
        ...votos,
        [eleccion]: {
          ...keepLocked,
          ...Object.fromEntries(Object.keys(v).map((k) => [k, k === p ? newP : delta / eleccion.length]))
        },
      })
      return
    }
    const newE = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === p ? newP : x * (1 + delta / (sum - v[p]))]))
    const exceed = Object.values(newE).reduce((x, y) => x + y, 0) - sum;
    newE[p] -= exceed;
    const newVotos = {
      ...votos,
      [eleccion]: {
        ...keepLocked,
        ...newE,
      }
    }
    setVotos(newVotos)
  }
  const [legisladoresEleccion, setLegisladoresEleccion] = useState<{ [eleccion: string]: Legislador[] }>({});

  if (votos === null) return <></>

  const diputados = datos.diputados.filter((d) => d.FinalizaMandato !== datos.finalizaMandato).concat(
    ...Object.entries(datos.elecciones).filter((e) => e[1].camara === 'diputados').map((e) => legisladoresEleccion[e[0]])).filter((x) => !!x)
  diputados.sort((d1, d2) => datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque)))
  const senadores = datos.senadores.filter((d) => d.FinalizaMandato !== datos.finalizaMandato).concat(
    ...Object.entries(datos.elecciones).filter((e) => e[1].camara === 'senadores').map((e) => legisladoresEleccion[e[0]])).filter((x) => !!x)
  senadores.sort((d1, d2) => datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque)))
  return (
    <div className={styles.container}>
      <h1>¿Cuántas bancas? v2.0</h1>
      <p>Simulador de distribución de las elecciones legislativas de 2025: <a href="https://www.visualizando.ar/cuantasbancas">www.visualizando.ar/cuantasbancas</a></p>
      {eleccion === null && <div className={styles.camaraPickerContainer}>
        <Link href='/diputados'><span className={`${styles.camaraPicker} ${camara === 'diputados' ? styles.camaraPickerSelected : ''}`}>Diputados</span></Link>
        <Link href='/senadores'><span className={`${styles.camaraPicker} ${camara !== 'diputados' ? styles.camaraPickerSelected : ''}`}>Senadores</span></Link>
      </div>}
      <div className={styles.page}>
        <div className={styles.camara}>
          {camara !== 'diputados' && <Senadores senadores={senadores.map((d) => ({
            nombre: `${d.Apellido}, ${d.Nombres}`,
            color: datos.bloques.find((f) => f.nombres.includes(d.Bloque))?.color ?? '#000',
          }))} />}
          {camara === 'diputados' && <Diputados diputados={diputados.map((d) => ({
            nombre: `${d.Apellido}, ${d.Nombres}`,
            color: datos.bloques.find((f) => f.nombres.includes(d.Bloque))?.color ?? '#000',
          }))} />}
        </div>

        {eleccion !== null && <Provincia
          enJuego={
            Object.fromEntries(datos.bloques.map((b) =>
              [b.nombres[0], (datos.elecciones[eleccion].camara === 'diputados' ? datos.diputados : datos.senadores
              ).filter((l) => b.nombres.includes(l.Bloque) &&
                l.Distrito === datos.elecciones[eleccion].distrito &&
                l.FinalizaMandato === datos.finalizaMandato).length]
            ))}
          finalizaMandatoNuevo={datos.elecciones[eleccion].finalizaMandatoNuevo}
          bloques={datos.bloques}
          legisladores={
            datos.elecciones[eleccion].camara === 'diputados' ?
              diputados.filter((d) => d.Distrito === datos.elecciones[eleccion].distrito) :
              senadores.filter((d) => d.Distrito === datos.elecciones[eleccion].distrito)
          } />}
        {eleccion === null && <div>
          {([
            ['Jujuy'],
            ['Salta', 'Tucumán', 'Formosa', 'Misiones'],
            ['Catamarca', 'Santiago del Estero', 'Chaco', 'Corrientes'],
            ['La Rioja', 'Córdoba', 'Santa Fe', 'Entre Ríos'],
            ['San Juan', 'San Luis', 'Buenos Aires', 'Ciudad Autónoma de Buenos Aires'],
            ['Mendoza', 'La Pampa'],
            ['Neuquén', 'Río Negro'],
            ['Chubut'],
            ['Santa Cruz', 'Tierra del Fuego'],
          ] as Distrito[][]).map((row: Distrito[]) => <div key={JSON.stringify(row)} style={{ display: 'flex' }}>
            {row.filter((provincia: Distrito) => Object.values(datos.elecciones).some((e) => e.camara === camara && e.distrito === provincia)
            ).map((provincia: Distrito) => <div key={provincia} style={{ cursor: 'pointer' }} onClick={() => router.push(`/${camara}/${slugsReverse[provincia]}`)}>
              <ProvinciaChart provincia={provincia} bloques={datos.bloques} votos={
                votos[Object.entries(datos.elecciones).find((e) => e[1].camara === 'diputados' && e[1].distrito === provincia)![0]]
              } />
            </div>)}
          </div>)}
        </div>}
        {eleccion !== null && <div className={styles.eleccion}>
          <Link href={`/${camara}`}>Volver</Link>
          <div>
            {Object.keys(datos.elecciones[eleccion].partidos).map((p) => (<div key={p}>
              <div className={styles.sliderContainer}>
                <div className={styles.sliderLabel}>
                  <span style={{ color: datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000' }}>{p}</span>
                  <span className={styles.candidatoLabel} style={{ color: datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000' }}>
                    {datos.elecciones[eleccion].partidos[p].candidatos[0].Apellido}
                  </span>
                </div>
                <div className={styles.sliderRest}>
                  <input type="range" className={styles.slider} min={0} max={100 * 100} step="1" style={{
                    background: `linear-gradient(to right, ${datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000'
                      } 0%, ${datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000'
                      } ${votos[eleccion][p] / 100
                      }%, rgb(170, 170, 170) ${votos[eleccion][p] / 100
                      }%, rgb(170, 170, 170) ${100 - Object.entries(votos[eleccion]).filter((v) => locked.some((el) => el[0] === eleccion && el[1] === v[0] && v[0] !== p)).reduce((acc, v) => acc + v[1], 0) / 100
                      }%, rgb(224, 224, 224) ${100 - Object.entries(votos[eleccion]).filter((v) => locked.some((el) => el[0] === eleccion && el[1] === v[0] && v[0] !== p)).reduce((acc, v) => acc + v[1], 0) / 100
                      }%, rgb(224, 224, 224) ${100
                      }%)`
                  }} value={votos[eleccion][p]} onChange={(ev) => {
                    const v = Object.fromEntries(Object.entries(votos[eleccion]).filter((el) => locked.every((l) => l[1] === p || !(l[0] === eleccion && l[1] === el[0]))));
                    const keepLocked = Object.fromEntries(Object.entries(votos[eleccion]).filter((el) => locked.some((l) => l[1] !== p && l[0] === eleccion && l[1] === el[0])));
                    const newP = parseFloat(ev.target.value);
                    updateVotos(newP, p, v, keepLocked)
                    if (!locked.some((l) => l[0] === eleccion && l[1] === p)) {
                      setLocked(locked.concat([[eleccion, p]]))
                    }
                  }} />
                  <span className={styles.lockIcon} id="lock-0" style={{ visibility: 'visible', color: locked.some((l) => l[0] === eleccion && l[1] === p) ? 'rgb(85, 85, 85)' : 'rgb(204, 204, 204)' }} onClick={
                    () => !locked.some((l) => l[0] === eleccion && l[1] === p) ?
                      setLocked(locked.concat([[eleccion, p]])) :
                      setLocked(locked.filter((l) => !(l[0] === eleccion && l[1] === p)))
                  }>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <div className={styles.valueDisplay}>{Math.abs(votos[eleccion][p] / 100).toFixed(2)}%</div>
                </div>
              </div>
            </div>))}
          </div>
        </div>}
      </div >
    </div>
  );
}
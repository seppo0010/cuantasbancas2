"use client";
import styles from "./page.module.css";
import { Diputados } from './diputados'
import { Senadores } from './senadores'
import datos_ from './datos.json'
import { useEffect, useState } from "react";
import calcularDhondt from "./dhondt";

interface Eleccion {
  electores: number;
  camara: string;
  finalizaMandatoNuevo: string;
  partidos: { [partido: string]: { votos: number, candidatos: string[] } };
}

interface Bloque {
  nombres: string[];
  color: string;
}

interface Legislador {
  Apellido: string;
  Nombre: string;
  Distrito: string;
  IniciaMandato: string;
  FinalizaMandato: string;
  Bloque: string;
}

const datos: {
  diputados: Legislador[],
  senadores: Legislador[],
  elecciones: { [nombre: string]: Eleccion },
  finalizaMandato: string,
  bloques: Bloque[]
} = datos_;

export default function Home() {
  const [eleccion, setEleccion] = useState<null | string>(null);
  const [votos, setVotos] = useState<{ [eleccion: string]: { [partido: string]: number } }>(() => {
    return Object.fromEntries(Object.entries(datos.elecciones).map(([key, value]) => ([key,
      Object.fromEntries(Object.entries(value.partidos).map(([k, v]) => [k, v.votos * 100]))
    ])))
  });
  const updateVotos = (newP: number, p: string, v: { [partido: string]: number }) => {
    if (eleccion === null) return;
    if (newP < 0) newP = 0;
    if (newP > 100000) newP = 10000;
    const delta = v[p] - newP;
    if (v[p] === 10000) {
      setVotos({
        ...votos,
        [eleccion]: Object.fromEntries(Object.keys(v).map((k) => [k, k === p ? newP : delta / eleccion.length])),
      })
      return
    }
    const newE = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === p ? newP : x * (1 + delta / (100 * 100 - v[p]))]))
    const exceed = Object.values(newE).reduce((x, y) => x + y) - 100 * 100;
    newE[p] -= exceed;
    const newVotos = {
      ...votos,
      [eleccion]: newE,
    }
    setVotos(newVotos)
  }
  const [legisladoresEleccion, setLegisladoresEleccion] = useState<{ [eleccion: string]: Legislador[] }>({});

  useEffect(() => {
    const calcEleccion = (eleccion: string) => {
      const el = datos.elecciones[eleccion];
      if (el.camara === 'diputados') {
        return calcularDhondt(Object.keys(el.partidos).map((p) => ({
          partido: p,
          votos: votos[eleccion][p] * el.electores,
          porcentaje: votos[eleccion][p] / 100,
        })), Object.values(el.partidos)[0].candidatos.length, el.electores
        ).flatMap(({ partido, bancas }) => el.partidos[partido].candidatos.slice(0, bancas).map((c) => ({
          Apellido: '',
          Nombre: c,
          Distrito: eleccion,
          IniciaMandato: datos.finalizaMandato,
          FinalizaMandato: el.finalizaMandatoNuevo,
          Bloque: partido,
        })))
      } else {
        const partidos = Object.values(Object.entries(votos[eleccion]).toSorted((a, b) => - a[1] + b[1])).map((x) => x[0]);
        return el.partidos[partidos[0]].candidatos.concat(el.partidos[partidos[1]].candidatos.slice(0, 1)).map((c, i) => ({
          Apellido: '',
          Nombre: c,
          Distrito: eleccion,
          IniciaMandato: datos.finalizaMandato,
          FinalizaMandato: el.finalizaMandatoNuevo,
          Bloque: i < 2 ? partidos[0] : partidos[1],
        }))
      }
    }

    if (eleccion === null) {
      setLegisladoresEleccion(Object.fromEntries(Object.keys(datos.elecciones).map((e) => [e, calcEleccion(e)])))
      return;
    }
    setLegisladoresEleccion({
      ...legisladoresEleccion,
      [eleccion]: calcEleccion(eleccion)
    })
  }, [eleccion, votos])

  const diputados = datos.diputados.filter((d) => d.FinalizaMandato !== datos.finalizaMandato).concat(
    ...Object.entries(datos.elecciones).filter((e) => e[1].camara === 'diputados').map((e) => legisladoresEleccion[e[0]])).filter((x) => !!x)
  diputados.sort((d1, d2) => datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque)))
  const senadores = datos.senadores.filter((d) => d.FinalizaMandato !== datos.finalizaMandato).concat(
    ...Object.entries(datos.elecciones).filter((e) => e[1].camara === 'senadores').map((e) => legisladoresEleccion[e[0]])).filter((x) => !!x)
  senadores.sort((d1, d2) => datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque)))
  return (
    <div className={styles.page}>
      <div className={styles.camara}>
        <Senadores senadores={senadores.map((d) => ({
          nombre: `${d.Apellido}, ${d.Nombre}`,
          color: datos.bloques.find((f) => f.nombres.includes(d.Bloque))?.color ?? '#000',
        }))} />
        <Diputados diputados={diputados.map((d) => ({
          nombre: `${d.Apellido}, ${d.Nombre}`,
          color: datos.bloques.find((f) => f.nombres.includes(d.Bloque))?.color ?? '#000',
        }))} />
      </div>
      <div className={styles.eleccionPicker}>
        <select onChange={(ev) => ev.target.value === '' ? setEleccion(null) : setEleccion(ev.target.value)}>
          <option value="">Todas</option>
          {Object.keys(datos.elecciones).map((e) => (<option key={e} value={e}>{e}</option>))}
        </select>
      </div>
      {eleccion !== null && <div className={styles.eleccion}>
        <ul>
          {Object.keys(datos.elecciones[eleccion].partidos).map((p) => (<li key={p}>
            {p} ({Math.abs(votos[eleccion][p] / 100).toFixed(2)}%)<br />
            <input type="range" min={0} max={100 * 100} value={votos[eleccion][p]} onChange={(ev) => {
              const v = votos[eleccion];
              const newP = parseFloat(ev.target.value);
              updateVotos(newP, p, v)
            }
            }></input>
          </li>))}
        </ul>
      </div>}
    </div >
  );
}

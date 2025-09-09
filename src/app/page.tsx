"use client";
import styles from "./page.module.css";
import { Camara } from './camara'
import datos_ from './datos.json'
import { useState } from "react";

interface Eleccion {
  partidos: { [partido: string]: { votos: number, candidatos: string[] } }
}

interface Bloque {
  nombres: string[];
  color: string;
}

interface Diputado {
  Apellido: string;
  Nombre: string;
  Distrito: string;
  IniciaMandato: string;
  FinalizaMandato: string;
  Bloque: string;
}

const datos: {
  diputados: Diputado[],
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
  const diputados = datos.diputados.filter((d) => d.FinalizaMandato !== datos.finalizaMandato)
  diputados.sort((d1, d2) => datos.bloques.findIndex((b) => b.nombres.includes(d1.Bloque)) - datos.bloques.findIndex((b) => b.nombres.includes(d2.Bloque)))
  console.log(diputados.map(({ Apellido, Bloque }) => ({ Apellido, Bloque })))
  return (
    <div className={styles.page}>
      <div className={styles.camara}>
        <Camara diputados={diputados.map((d) => ({
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
              let newP = parseFloat(ev.target.value);
              if (newP < 0) newP = 0;
              if (newP > 100000) newP = 10000;
              const delta = v[p] - newP;
              if (v[p] === 10000) {
                setVotos({
                  ...votos,
                  [eleccion]: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === p ? newP : delta / eleccion.length])),
                })
                return
              }
              const newE = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === p ? newP : x * (1 + delta / (100 * 100 - v[p]))]))
              const exceed = Object.values(newE).reduce((x, y) => x + y) - 100 * 100;
              newE[p] -= exceed;
              setVotos({
                ...votos,
                [eleccion]: newE,
              })
            }
            }></input>
          </li>))}
        </ul>
      </div>}
    </div >
  );
}

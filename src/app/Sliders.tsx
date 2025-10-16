'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import styles from "./page.module.css";
import { Bloque } from './Bloque';
import { Eleccion } from './Eleccion';

interface SlidersProps {
  eleccion: string;
  datos: {
    elecciones: { [nombre: string]: Eleccion };
    bloques: Bloque[];
  };
  votos: { [eleccion: string]: { [partido: string]: number } };
  locked: [string, string][];
  setLocked: (locked: [string, string][]) => void;
  setVotos: (votos: { [eleccion: string]: { [partido: string]: number } }) => void;
}

export default function Sliders({ eleccion, datos, votos, locked, setLocked, setVotos }: SlidersProps) {
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

  return (
    <div className={styles.eleccion}>
      <div>
        {Object.keys(datos.elecciones[eleccion].partidos).map((p) => (
          <div key={p}>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderLabel}>
                <span style={{ color: datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000' }}>{p}</span>
                <span className={styles.candidatoLabel} style={{ color: datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000' }}>
                  {datos.elecciones[eleccion].partidos[p].candidatos[0].Apellido}
                </span>
              </div>
              <div className={styles.sliderRest}>
                <input
                  type="range"
                  className={styles.slider}
                  min={0}
                  max={100 * 100}
                  step="1"
                  style={{
                    background: `linear-gradient(to right, ${datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000'
                      } 0%, ${datos.bloques.find((b) => b.nombres.includes(p))?.color ?? '#000'
                      } ${votos[eleccion][p] / 100
                      }%, rgb(170, 170, 170) ${votos[eleccion][p] / 100
                      }%, rgb(170, 170, 170) ${100 - Object.entries(votos[eleccion]).filter((v) => locked.some((el) => el[0] === eleccion && el[1] === v[0] && v[0] !== p)).reduce((acc, v) => acc + v[1], 0) / 100
                      }%, rgb(224, 224, 224) ${100 - Object.entries(votos[eleccion]).filter((v) => locked.some((el) => el[0] === eleccion && el[1] === v[0] && v[0] !== p)).reduce((acc, v) => acc + v[1], 0) / 100
                      }%, rgb(224, 224, 224) ${100
                      }%)`
                  }}
                  value={votos[eleccion][p]}
                  onChange={(ev) => {
                    const v = Object.fromEntries(Object.entries(votos[eleccion]).filter((el) => locked.every((l) => l[1] === p || !(l[0] === eleccion && l[1] === el[0]))));
                    const keepLocked = Object.fromEntries(Object.entries(votos[eleccion]).filter((el) => locked.some((l) => l[1] !== p && l[0] === eleccion && l[1] === el[0])));
                    const newP = parseFloat(ev.target.value);
                    updateVotos(newP, p, v, keepLocked)
                    if (!locked.some((l) => l[0] === eleccion && l[1] === p)) {
                      setLocked(locked.concat([[eleccion, p]]))
                    }
                  }}
                />
                <span
                  className={styles.lockIcon}
                  style={{ visibility: 'visible', color: locked.some((l) => l[0] === eleccion && l[1] === p) ? 'rgb(85, 85, 85)' : 'rgb(204, 204, 204)' }}
                  onClick={() =>
                    !locked.some((l) => l[0] === eleccion && l[1] === p)
                      ? setLocked(locked.concat([[eleccion, p]]))
                      : setLocked(locked.filter((l) => !(l[0] === eleccion && l[1] === p)))
                  }
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <div className={styles.valueDisplay}>{Math.abs(votos[eleccion][p] / 100).toFixed(1)}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
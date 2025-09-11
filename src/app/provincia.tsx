import styles from './provincia.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faRecycle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Legislador } from './Legislador';
import { Bloque } from './Bloque';

export const Provincia = ({ legisladores, bloques, finalizaMandatoNuevo, enJuego }: {
    legisladores: Legislador[] , bloques: Bloque[], finalizaMandatoNuevo: string, enJuego: { [bloque: string]: number }
}) => {
    return (
        <div>
            <h3>Bancas por partido</h3>
            <div className={styles.referenciaBancas}>
                <span className={styles.referenciaBancasLabel}>Banca:</span>
                <span>
                    <span className={styles.banca}>no renueva</span>
                </span>
                <span>
                    <span className={`${styles.renueva} ${styles.banca}`}>renueva</span>
                </span>
            </div>
            <div className={styles.containerViz}>
                {bloques.map((bloque) => (<div key={bloque.nombres[0]} className={styles.bloque}>
                    <div className={styles.stack}>
                        {legisladores.filter((l) => bloque.nombres.includes(l.Bloque)
                        ).toSorted((l1, l2) => l1.FinalizaMandato === finalizaMandatoNuevo && l2.FinalizaMandato !== finalizaMandatoNuevo ? 1 : 0).map((l) => (
                        <div key={`${l.Apellido} ${l.Nombres}`} className={`${styles.banca} ${l.FinalizaMandato !== finalizaMandatoNuevo ? styles.actual : ''} ${styles.actualTop}`} style={{ backgroundColor: bloque.color }} title={`${l.Apellido}, ${l.Nombres} - ${bloque.nombres[0]}`}>{l.Apellido}</div>
                        ))}
                    </div>
                    <div className={styles.label}>
                        <span className={styles.title}>{bloque.nombres[0]}</span>
                        <div className={styles.metricasFlex}>
                            <span className={styles.metricaItem}><FontAwesomeIcon icon={faChair} /> {legisladores.filter((l) => bloque.nombres.includes(l.Bloque)).length}</span>
                            <span className={styles.metricaItem}><FontAwesomeIcon icon={faRecycle} /> {enJuego[bloque.nombres[0]]}</span>
                            <span className={styles.metricaItem}><FontAwesomeIcon icon={faTrophy} /> {legisladores.filter((l) => bloque.nombres.includes(l.Bloque) && l.FinalizaMandato === finalizaMandatoNuevo).length}</span>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}
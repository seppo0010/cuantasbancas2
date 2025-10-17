'use client';

import styles from './provincia.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faRecycle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Legislador } from './Legislador';
import { Bloque } from './Bloque';
import { useState, useEffect } from 'react';

export const Provincia = ({ legisladores, bloques, finalizaMandatoNuevo, enJuego }: {
    legisladores: Legislador[] , bloques: Bloque[], finalizaMandatoNuevo: string, enJuego: { [bloque: string]: number }
}) => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxLegislador = (
        Math.max(...bloques.map((bloque) => legisladores.filter((l) => bloque.nombres.includes(l.Bloque) && l.FinalizaMandato !== finalizaMandatoNuevo).length)) +
        legisladores.filter((l) => l.FinalizaMandato === finalizaMandatoNuevo).length
    );
    
    const useMuyCorto = bloques.length > 5 && windowWidth < 450;
    
    return (
        <div className={`${styles.modal} ${styles.principal}`}>
            <h3>Bancas por alineación política</h3>
            <div className={styles.referenciaBancas}>
                <span className={styles.referenciaBancasLabel}>Banca:</span>
                <span>
                    <span className={`${styles.banca} ${styles.actual}`}>no renueva</span>
                </span>
                <span>
                    <span className={`${styles.banca} ${styles.renueva}`}>nueva</span>
                </span>
            </div>
            <div className={styles.referenciaMetricas}>
                <span className={styles.referenciaBancasLabel}>Métricas:</span>
                <span className={styles.metricaItem}>
                    <FontAwesomeIcon icon={faChair} /> totales
                </span>
                <span className={styles.metricaItem}>
                    <FontAwesomeIcon icon={faRecycle} /> pone en juego
                </span>
                <span className={styles.metricaItem}>
                    <FontAwesomeIcon icon={faTrophy} /> nuevas
                </span>
            </div>
            <div className={styles.containerViz} style={{minHeight: Math.min(686, 74 + maxLegislador * 20)}}>
                {bloques.map((bloque) => (<div key={bloque.nombres[0]} className={styles.bloque}>
                    <div className={styles.stack}>
                        {legisladores.filter((l) => bloque.nombres.includes(l.Bloque)
                        ).toSorted((l1, l2) => l1.FinalizaMandato === finalizaMandatoNuevo && l2.FinalizaMandato !== finalizaMandatoNuevo ? 1 : 0).map((l) => (
                        <div key={`${l.Apellido} ${l.Nombres}`} className={`${styles.banca} ${l.FinalizaMandato !== finalizaMandatoNuevo ? styles.actual : styles.renueva} ${styles.actualTop}`} style={{ backgroundColor: bloque.color }} title={`${l.Apellido}, ${l.Nombres} - ${bloque.nombres[0]}`}>{l.Apellido}</div>
                        ))}
                    </div>
                    
                    <div className={styles.metricasFlex}>
                        <span className={styles.metricaItem}><FontAwesomeIcon icon={faChair} /> {legisladores.filter((l) => bloque.nombres.includes(l.Bloque)).length}</span>
                        <span className={styles.metricaItem}><FontAwesomeIcon icon={faRecycle} /> {enJuego[bloque.nombres[0]]}</span>
                        <span className={styles.metricaItem}><FontAwesomeIcon icon={faTrophy} /> {legisladores.filter((l) => bloque.nombres.includes(l.Bloque) && l.FinalizaMandato === finalizaMandatoNuevo).length}</span>
                    </div>
                    <div className={styles.label}>
                        <span className={`${styles.title} ${useMuyCorto ? styles.narrow : styles.wide}`}>{useMuyCorto ? bloque.muyCorto : bloque.corto}</span>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

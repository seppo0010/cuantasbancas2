'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faRecycle } from '@fortawesome/free-solid-svg-icons';
import datos_ from './datos.json';
import styles from './provincia.module.css';
import homeStyles from './home.module.css';
import { Legislador } from './Legislador';
import { Bloque } from './Bloque';

interface DatosType {
    diputados: Legislador[];
    senadores: Legislador[];
    finalizaMandato: string;
    bloques: Bloque[];
}

const datos = datos_ as DatosType;

export default function Home() {
    const [selectedChamber, setSelectedChamber] = useState<'diputados' | 'senadores'>('diputados');
    
    const provincias = Array.from(new Set([
        ...datos.diputados.map((d) => d.Distrito), 
        ...datos.senadores.map((s) => s.Distrito)
    ]));

    const getDiputadosPorProvincia = (pcia: string): Legislador[] => {
        return datos.diputados.filter((d) => d.Distrito === pcia);
    };

    const getSenadoresPorProvincia = (pcia: string): Legislador[] => {
        return datos.senadores.filter((s) => s.Distrito === pcia);
    };

    const getBloqueColor = (bloque: string): string => {
        const b = datos.bloques.find((bl) => bl.nombres.includes(bloque) || bl.corto === bloque);
        return b?.color || '#aaa';
    };
    
    const filteredProvincias = provincias.filter(pcia => {
        if (selectedChamber === 'diputados') {
            return getDiputadosPorProvincia(pcia).length > 0;
        }
        return getSenadoresPorProvincia(pcia).length > 0;
    }).sort((a, b) => a.localeCompare(b));

    return (
        <div className="container is-max-desktop px-4">
            <header className="hero is-light">
                <div className="hero-body">
                    <div className={homeStyles.headerContent}>
                        <h1 className={`title is-1 ${homeStyles.mainTitle}`}>¿Cuántas bancas?</h1>
                        <h2 className={`subtitle is-3 ${homeStyles.subtitle}`}>El simulador electoral</h2>
                        <div className={`has-text-grey mb-4 ${homeStyles.version}`}>Versión 2025 de elecciones nacionales argentinas</div>
                        <p className={`content is-medium mb-5 ${homeStyles.description}`}>
                            Esta página te permite explorar y simular la distribución de bancas legislativas en Argentina para cada provincia. Podés ver cuántos diputados y senadores elige cada provincia, de qué partido son y simular cómo se repartirían según los resultados.
                        </p>
                    </div>
                    <div className={homeStyles.selectorBox}>
                        <div className="mb-4">
                            <span className={`has-text-weight-semibold ${homeStyles.selectorLabel}`}>Elegí la cámara:</span>
                            <div className="buttons has-addons is-centered mt-2">
                                <button 
                                    className={`button ${homeStyles.button} ${selectedChamber === 'diputados' ? homeStyles.selected : ''}`}
                                    onClick={() => setSelectedChamber('diputados')}
                                >
                                    Cámara de Diputados
                                </button>
                                <button 
                                    className={`button ${homeStyles.button} ${selectedChamber === 'senadores' ? homeStyles.selected : ''}`}
                                    onClick={() => setSelectedChamber('senadores')}
                                >
                                    Cámara de Senadores
                                </button>
                            </div>
                        </div>
                        <p className={`has-text-centered has-text-weight-medium ${homeStyles.selectorPrompt}`}>
                            Elegí la provincia en la que querés simular el reparto de bancas:
                        </p>
                    </div>
                </div>
            </header>

            <div className={`${styles.modal} ${homeStyles.referenciaBox}`}>
                <div className={homeStyles.referenciaSection}>
                    <strong className={homeStyles.referenciaTitle}>Referencia:</strong>
                    <div className={homeStyles.referenciaItems}>
                        <div className={homeStyles.referenciaItem}>
                            <div className={`${homeStyles.referenciaSwatch} ${homeStyles.referenciaSwatchRenueva}`} />
                            <span className={homeStyles.referenciaText}>Renueva (en juego)</span>
                        </div>
                        <div className={homeStyles.referenciaItem}>
                            <div className={`${homeStyles.referenciaSwatch} ${homeStyles.referenciaSwatchActual}`} />
                            <span className={homeStyles.referenciaText}>No renueva</span>
                        </div>
                    </div>
                </div>
                <div>
                    <strong className={homeStyles.referenciaTitle}>Bloques políticos:</strong>
                    <div className={homeStyles.bloquesItems}>
                        {datos.bloques.map((bloque) => (
                            <div key={bloque.nombres[0]} className={homeStyles.bloqueItem}>
                                <div 
                                    className={homeStyles.bloqueSwatch}
                                    style={{ backgroundColor: bloque.color }}
                                />
                                <span className={homeStyles.referenciaText}>{bloque.corto || bloque.nombres[0]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="columns is-multiline mt-4">
                {filteredProvincias.map((pcia: string) => {
                    const diputados = getDiputadosPorProvincia(pcia);
                    const senadores = getSenadoresPorProvincia(pcia);
                    const isShowingDiputados = selectedChamber === 'diputados';
                    const currentData = isShowingDiputados ? diputados : senadores;
                    const bancasEnJuego = currentData.filter((d) => d.FinalizaMandato === datos.finalizaMandato).length;
                    
                    // Agrupar por bloque y contar
                    const bloqueGroups = currentData.reduce((acc: Record<string, Legislador[]>, leg) => {
                        if (!acc[leg.Bloque]) {
                            acc[leg.Bloque] = [];
                        }
                        acc[leg.Bloque].push(leg);
                        return acc;
                    }, {});
                    
                    // Ordenar bloques por cantidad (mayor a menor)
                    const sortedBloques = Object.entries(bloqueGroups)
                        .sort((a, b) => b[1].length - a[1].length);
                    
                    // Ordenar legisladores: primero por bloque (mayor a menor), luego dentro de cada bloque: primero no renuevan, luego renuevan
                    const sortedLegisladores = sortedBloques.flatMap(([, legs]) => {
                        const noRenuevan = legs.filter((l) => l.FinalizaMandato !== datos.finalizaMandato);
                        const renuevan = legs.filter((l) => l.FinalizaMandato === datos.finalizaMandato);
                        return [...noRenuevan, ...renuevan];
                    });
                    
                    return (
                        <div key={pcia} className={`column is-one-third-desktop is-half-tablet ${styles.provinciaColumn}`}>
                            <div className={styles.modal}>
                                <h3 className={`${styles.title} ${styles.provinciaTitle}`}>{pcia}</h3>
                                
                                <div className={`${styles.referenciaBancas} ${styles.provinciaBancas}`}>
                                    {sortedLegisladores.map((legislador, idx: number) => {
                                        const renueva = legislador.FinalizaMandato === datos.finalizaMandato;
                                        const color = getBloqueColor(legislador.Bloque);
                                        return (
                                            <div
                                                key={idx}
                                                className={`${styles.provinciaBanca} ${renueva ? styles.renueva : styles.actual}`}
                                                style={{ backgroundColor: color }}
                                                title={`${legislador.Apellido} (${legislador.Bloque})`}
                                            />
                                        );
                                    })}
                                </div>
                                
                                <div className={`${styles.metricasFlex} ${styles.provinciaMetricas}`}>
                                    <div className={styles.metricaItem}>
                                        <FontAwesomeIcon icon={faChair} />
                                        <span>{currentData.length}</span>
                                    </div>
                                    <div className={styles.metricaItem}>
                                        <FontAwesomeIcon icon={faRecycle} />
                                        <span>{bancasEnJuego}</span>
                                    </div>
                                </div>
                                
                                <div className={styles.provinciaButton}>
                                    <Link 
                                        href={`/${selectedChamber}/${pcia.toLowerCase().replace(/ /g, '').replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u')}`}
                                    >
                                        <button className={`button is-fullwidth ${homeStyles.button} ${homeStyles.selected}`}>
                                            Simular distribución
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

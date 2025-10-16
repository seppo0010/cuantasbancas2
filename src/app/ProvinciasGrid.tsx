'use client';
import { useRouter } from 'next/navigation';
import { Distrito } from './Distrito';
import { Bloque } from './Bloque';
import { Legislador } from './Legislador';
import { Eleccion } from './types';
import ProvinciaChart from './ProvinciaChart';
import { slugsReverse } from './Distrito';

interface ProvinciasGridProps {
  camara: 'senadores' | 'diputados';
  datos: {
    diputados: Legislador[];
    senadores: Legislador[];
    elecciones: { [nombre: string]: Eleccion };
    finalizaMandato: string;
    bloques: Bloque[];
  };
  votos: { [eleccion: string]: { [partido: string]: number } };
}

export default function ProvinciasGrid({ camara, datos, votos }: ProvinciasGridProps) {
  const router = useRouter();
  const provinciasGrid: Distrito[][] = [
    ['Jujuy'],
    ['Salta', 'Tucumán', 'Formosa', 'Misiones'],
    ['Catamarca', 'Santiago del Estero', 'Chaco', 'Corrientes'],
    ['La Rioja', 'Córdoba', 'Santa Fe', 'Entre Ríos'],
    ['San Juan', 'San Luis', 'Buenos Aires', 'CABA'],
    ['Mendoza', 'La Pampa'],
    ['Neuquén', 'Río Negro'],
    ['Chubut'],
    ['Santa Cruz', 'Tierra del Fuego'],
  ];

  return (
    <div>
      {provinciasGrid.map((row: Distrito[]) => (
        <div key={JSON.stringify(row)} style={{ display: 'flex' }}>
          {row
            .filter((provincia: Distrito) =>
              Object.values(datos.elecciones).some(
                (e) => e.camara === camara && e.distrito === provincia
              )
            )
            .map((provincia: Distrito) => (
              <div
                key={provincia}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push(`/${camara}/${slugsReverse[provincia]}`)}
              >
                <ProvinciaChart
                  provincia={provincia}
                  bloques={datos.bloques}
                  votos={
                    votos[
                      Object.entries(datos.elecciones).find(
                        (e) => e[1].camara === 'diputados' && e[1].distrito === provincia
                      )![0]
                    ]
                  }
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
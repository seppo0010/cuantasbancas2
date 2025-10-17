"use client";
import dynamic from 'next/dynamic';
import { Bloque } from "./Bloque";
import { Distrito } from './Distrito';

const DynamicApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Ensure ApexCharts is not imported during SSR
});

export default function ProvinciaChart({ provincia, bloques, votos }: { provincia: Distrito, bloques: Bloque[], votos: { [partido: string]: number } }) {
  return (
    <div style={{ width: 200 }}>
      <DynamicApexCharts options={{
        chart: {
          animations: {
            enabled: false,
          },
          type: 'bar',
          toolbar: { show: false },
          width: 300,
          height: 180
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
          }
        },
        colors: bloques.map((b) => b.color),
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        stroke: {
          width: 1,
          colors: ['#ccc']
        },
        xaxis: {
          categories: bloques.map((b) => b.muyCorto),
          labels: { show: false },
        },
        yaxis: {
          show: true,
        },
        states: {
          active: {
            filter: {
              type: 'none',
            }
          },
          hover: {
            filter: {
              type: 'none',
            }
          },
        },
        title: {
          text: provincia,
          align: 'left',
          floating: true
        },
        tooltip: {
          enabled: false,
        }
      }
      } series={[{
        name: 'Porcentaje',
        data: bloques.map((b) => ({
          x: b.nombres[0],
          y: (Object.entries(votos).filter((v) => b.nombres.includes(v[0])).reduce((x, y) => x + y[1], 0) / 100).toFixed(1),
        }))
      }]} type="bar" height={150} />
    </div>
  )
}

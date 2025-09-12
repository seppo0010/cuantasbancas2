"use client";
import Chart from "react-apexcharts";
import { Bloque } from "./Bloque";

export default function ProvinciaChart({ provincia, bloques, votos }: { provincia: string, bloques: Bloque[], votos: { [partido: string]: number } }) {
  return (
    <div style={{width: 200}}>
      <Chart options={{
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
          categories: bloques.map((b) => b.corto),
          labels: { show: false },
        },
        yaxis: {
          show: true,
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
          y: (Object.entries(votos).filter((v) => b.nombres.includes(v[0])).reduce((x, y) => x + y[1], 0) / 100).toFixed(2),
        }))
      }]} type="bar" height={150} />
    </div>
  )
}
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/datos.json');
const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const elecciones = json.elecciones;

for (const eleccion in elecciones) {
  const partidos = elecciones[eleccion].partidos;
  if (!partidos) continue;
  const keys = Object.keys(partidos).filter(p => partidos[p] && typeof partidos[p] === 'object');
  const cantidad = keys.length;
  if (cantidad === 0) continue;
  // Normalizar a 99% en lugar de 100% para dejar 1% de voto en blanco
  const porcentaje = +(99 / cantidad).toFixed(2);
  keys.forEach(p => {
    if ('votos' in partidos[p]) {
      partidos[p].votos = porcentaje;
    }
  });
}

json.elecciones = elecciones;
fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
console.log('Porcentajes igualados correctamente a 99% (1% voto en blanco).');


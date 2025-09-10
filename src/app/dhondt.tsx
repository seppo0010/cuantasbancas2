export default function calcularDhondt(
    partidos: { partido: string, votos: number, porcentaje: number }[],
    bancasTotal: number,
    totalVotos: number,
    umbralVotos: number = 0,
) {
    if (!Array.isArray(partidos) || partidos.length === 0) {
        throw new Error("Debe proveer un array con partidos");
    }
    if (!Number.isInteger(bancasTotal) || bancasTotal <= 0) {
        bancasTotal = 30;
    }
    const partidosConVotos = partidos.map((p) => ({
        ...p,
        votos: Math.round((p.porcentaje / 100) * (totalVotos ?? (() => { throw new Error("Falta totalVotos") })()))
    }));
    const partidosFiltrados = partidosConVotos.filter((p) => p.votos >= umbralVotos);
    if (partidosFiltrados.length === 0) {
        return [];
    }
    const resultado = partidosFiltrados.map((p) => ({
        partido: p.partido,
        votos: p.votos,
        porcentaje: p.porcentaje,
        bancas: 0
    }));
    const divisiones = resultado.flatMap((p, idx) =>
        Array.from({ length: bancasTotal }, (_, i) => ({
            idx,
            cociente: p.votos / (i + 1)
        }))
    );
    divisiones
        .sort((a, b) => b.cociente - a.cociente)
        .slice(0, bancasTotal)
        .forEach(({ idx }) => {
            resultado[idx].bancas++;
        });
    const totalBancasAsignadas = resultado.reduce((sum, p) => sum + p.bancas, 0);
    return resultado.map((p) => ({
        ...p,
        porcentajeBancas: (p.bancas / totalBancasAsignadas) * 100
    }));
}

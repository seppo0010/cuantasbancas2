import Mapa from "../../Mapa";

export async function generateStaticParams() {
    const res = [];
    for (const camara of ['diputados', 'senadores']) {
        for (const distrito of [
            "Buenos Aires",
            "Catamarca",
            "Chaco",
            "Chubut",
            "Ciudad Autónoma de Buenos Aires",
            "Córdoba",
            "Corrientes",
            "Entre Ríos",
            "Formosa",
            "Jujuy",
            "La Pampa",
            "La Rioja",
            "Mendoza",
            "Misiones",
            "Neuquén",
            "Río Negro",
            "Salta",
            "San Juan",
            "San Luis",
            "Santa Cruz",
            "Santa Fe",
            "Santiago del Estero",
            "Tierra del Fuego",
            "Tucumán"]) {
            res.push({ camara, distrito: encodeURI(distrito) })
        }
    }
    return res;
}

export default async function Home({
    params,
}: {
    params: Promise<{
        camara: 'senadores' | 'diputados',
        distrito: string
    }>
}) {
    const { camara, distrito } = await params
    return <Mapa camara={camara} distrito={decodeURI(distrito) as
        "Buenos Aires" |
        "Catamarca" |
        "Chaco" |
        "Chubut" |
        "Ciudad Autónoma de Buenos Aires" |
        "Córdoba" |
        "Corrientes" |
        "Entre Ríos" |
        "Formosa" |
        "Jujuy" |
        "La Pampa" |
        "La Rioja" |
        "Mendoza" |
        "Misiones" |
        "Neuquén" |
        "Río Negro" |
        "Salta" |
        "San Juan" |
        "San Luis" |
        "Santa Cruz" |
        "Santa Fe" |
        "Santiago del Estero" |
        "Tierra del Fuego" |
        "Tucumán"
    } />
}

import { NoSsr } from "@/app/nossr";
import { DistritoSlug, slugs } from "../../Distrito";
import Mapa from "../../Mapa";
import { Metadata } from "next";

export async function generateStaticParams() {
    const res = [];
    for (const camara of ['diputados', 'senadores']) {
        for (const distrito of Object.keys(slugs)) {
            res.push({ camara, distrito })
        }
    }
    return res;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{
        camara: 'senadores' | 'diputados',
        distrito: DistritoSlug
    }>
}): Promise<Metadata> {
    const { camara, distrito } = await params;
    const distritoNombre = slugs[distrito];
    const camaraTexto = camara === 'diputados' ? 'Diputados' : 'Senadores';
    
    const title = `${distritoNombre} - ${camaraTexto} | ¿Cuántas bancas?`;
    const description = `Simulá la distribución de bancas de ${camaraTexto} en ${distritoNombre} para las elecciones legislativas 2025. Probá diferentes resultados con el sistema D'Hondt.`;
    
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            siteName: '¿Cuántas bancas?',
            images: [
                {
                    url: 'https://simulador.poderciudadano.org/images/ImageCardsSociales.png',
                    width: 1200,
                    height: 630,
                    alt: `Simulador electoral ${distritoNombre}`,
                }
            ],
            url: `https://simulador.poderciudadano.org/${camara}/${distrito}`,
            type: 'website',
            locale: 'es_AR',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://simulador.poderciudadano.org/images/ImageCardsSociales.png'],
            creator: '@poderciudadano',
        },
    };
}

export default async function Home({
    params,
}: {
    params: Promise<{
        camara: 'senadores' | 'diputados',
        distrito: DistritoSlug
    }>
}) {
    const { camara, distrito } = await params
    return <NoSsr><Mapa camara={camara} distrito={slugs[distrito] } /></NoSsr>
}

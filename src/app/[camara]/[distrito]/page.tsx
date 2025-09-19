import { NoSsr } from "@/app/nossr";
import { DistritoSlug, slugs } from "../../Distrito";
import Mapa from "../../Mapa";

export async function generateStaticParams() {
    const res = [];
    for (const camara of ['diputados', 'senadores']) {
        for (const distrito of Object.keys(slugs)) {
            res.push({ camara, distrito })
        }
    }
    return res;
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

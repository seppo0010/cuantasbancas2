import Mapa from "../Mapa";

export async function generateStaticParams() {
    return [{camara: 'diputados'}, {camara: 'senadores'}];
}

export default async function Home({
    params,
  }: {
    params: Promise<{ camara: 'senadores' | 'diputados' }>
  }) {
    const { camara } = await params
    return <Mapa camara={camara} distrito={null} />
}

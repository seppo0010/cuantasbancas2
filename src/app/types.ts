export interface Eleccion {
    camara: "diputados" | "senadores";
    distrito: string;
    electores: number;
    partidos: {
        [partido: string]: {
            candidatos: Array<{
                Apellido: string;
                Nombres: string;
            }>;
            votos: number;
        };
    };
    finalizaMandatoNuevo: string;
}
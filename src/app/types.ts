import { Distrito } from "./Distrito";

export interface Eleccion {
    camara: "diputados" | "senadores";
    distrito: Distrito;
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
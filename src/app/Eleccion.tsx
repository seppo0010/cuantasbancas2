"use client";

import { Distrito } from "./Distrito";

export interface Eleccion {
  electores: number;
  camara: string;
  distrito: Distrito;
  finalizaMandatoNuevo: string;
  partidos: { [partido: string]: { votos: number; candidatos: { Nombres: string; Apellido: string }[]; }; };
}

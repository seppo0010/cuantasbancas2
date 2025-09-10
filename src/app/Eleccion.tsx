"use client";
export interface Eleccion {
  electores: number;
  camara: string;
  finalizaMandatoNuevo: string;
  partidos: { [partido: string]: { votos: number; candidatos: string[]; }; };
}

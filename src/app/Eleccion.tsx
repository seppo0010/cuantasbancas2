"use client";
export interface Eleccion {
  electores: number;
  camara: string;
  distrito: string;
  finalizaMandatoNuevo: string;
  partidos: { [partido: string]: { votos: number; candidatos: { Nombres: string; Apellido: string }[]; }; };
}

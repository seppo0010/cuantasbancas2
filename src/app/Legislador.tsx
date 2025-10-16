"use client";

import { Distrito } from "./Distrito";

export interface Legislador {
  Apellido: string;
  Nombres: string;
  Distrito: Distrito;
  IniciaMandato: string;
  FinalizaMandato: string;
  Bloque: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NichoEntity } from "@/features/nichos/domain/entities/nicho.entity";

export interface FallecidoEntity {
  idPersona: string;
  nombre: string;
  apellido: string;
}

export interface HuecoEntity {
  idDetalleHueco: string;
  idNicho?: NichoEntity;
  numHueco: number;
  estado: string;
  idFallecido: FallecidoEntity | null;
  fechaCreacion: string;
  fechaActualizacion: string | null;
  requisitosInhumacion: any[]; // TODO: Definir interfaz cuando se implemente el módulo de requisitos
}

export interface CreateHuecoEntity {
  idNicho: string;
  numeroHueco: number;
  estado: string;
  idFallecido?: string;
}

export interface UpdateHuecoEntity {
  idDetalleHueco: string;
  estado: string;
  idFallecido?: string;
} 
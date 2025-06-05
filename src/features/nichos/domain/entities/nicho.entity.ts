import { CementeryEntity } from "@/features/cementery/domain/entities/cementery.entity";

export interface NichoEntity {
  idNicho: string;
  idCementerio: CementeryEntity | string; // Assuming CementeryEntity is defined elsewhere
  sector: string;
  fila: string;
  numero: string;
  tipo: string;
  estado: string;
  fechaConstruccion: string;
  observaciones?: string;
  numeroPisos: number;
  fechaCreacion: string;
  fechaActualizacion: string | null;
}

export interface CreateNichoEntity {
  idCementerio: string;
  sector: string;
  fila: string;
  numero: string;
  tipo: string;
  fechaConstruccion: string;
  observaciones?: string;
  numeroPisos: number;
}

export interface UpdateNichoEntity {
  idNicho: string;
  sector?: string;
  fila?: string;
  numero?: string;
  tipo?: string;
  fechaConstruccion?: string;
  observaciones?: string;
  numeroPisos?: number;
} 
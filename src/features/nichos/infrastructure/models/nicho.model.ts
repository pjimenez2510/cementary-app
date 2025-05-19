import { CementeryModel } from "@/features/cementery/infrastructure/models/cementery.model";

export interface NichoModel {
  id_nicho: string;
  id_cementerio: CementeryModel;
  sector: string;
  fila: string;
  numero: string;
  tipo: string;
  estado: string;
  fecha_construccion: string;
  observaciones?: string;
  numero_pisos: number;
  fecha_creacion: string;
  fecha_actualizacion: string | null;
}

export interface CreateNichoModel {
  id_cementerio: string;
  sector: string;
  fila: string;
  numero: string;
  tipo: string;
  fecha_construccion: string;
  observaciones?: string;
  numero_pisos: number;
}

export interface UpdateNichoModel {
  id_nicho: string;
  sector?: string;
  fila?: string;
  numero?: string;
  tipo?: string;
  fecha_construccion?: string;
  observaciones?: string;
  numero_pisos?: number;
} 
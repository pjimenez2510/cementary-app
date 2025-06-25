import { NichoEntity } from "@/features/nichos/domain/entities/nicho.entity";
import { PersonEntity } from "@/features/person/domain/entities/person.entity";

export type TipoDocumento = "Escritura" | "Contrato" | "Factura" | "Otro";
export type EstadoPropietario =
  | "Activo"
  | "Inactivo"
  | "En proceso"
  | "Vendido"
  | "Heredado";

export interface PropietarioNichoEntity {
  idPropietarioNicho: string;
  idPersona?: PersonEntity;
  idNicho?: NichoEntity;
  fechaAdquisicion: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  estado: EstadoPropietario;
  observaciones: string;
  fechaCreacion: string;
  fechaActualizacion: string | null;
  tipo: 'Dueño' | 'Heredero';
}

export interface CreatePropietarioNichoEntity {
  idPersona: string;
  idNicho: string;
  fechaAdquisicion: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  estado: EstadoPropietario;
  observaciones: string;
  tipo: 'Dueño' | 'Heredero';
}

export interface UpdatePropietarioNichoEntity {
  idPropietarioNicho: string;
  estado?: EstadoPropietario;
  observaciones?: string;
  tipoDocumento?: TipoDocumento;
  numeroDocumento?: string;
  tipo?: 'Dueño' | 'Heredero';
}

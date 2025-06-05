import { NichoModel } from "@/features/nichos/infrastructure/models/nicho.model";
import { TipoDocumento, EstadoPropietario } from "../../domain/entities/propietario-nicho.entity";
import { PersonModel } from "@/features/person/infraestrcture/models/person.model";

export interface PropietarioNichoModel {
  id_propietario_nicho: string;
  id_persona: PersonModel;
  id_nicho: NichoModel;
  fecha_adquisicion: string;
  tipo_documento: TipoDocumento;
  numero_documento: string;
  estado: EstadoPropietario;
  observaciones: string;
  fecha_creacion: string;
  fecha_actualizacion: string | null;
}

export interface CreatePropietarioNichoModel {
  id_persona: string;
  id_nicho: string;
  fecha_adquisicion: string;
  tipo_documento: TipoDocumento;
  numero_documento: string;
  estado: EstadoPropietario;
  observaciones: string;
}

export interface UpdatePropietarioNichoModel {
  id_propietario_nicho: string;
  estado?: EstadoPropietario;
  observaciones?: string;
  tipo_documento?: TipoDocumento;
  numero_documento?: string;
} 
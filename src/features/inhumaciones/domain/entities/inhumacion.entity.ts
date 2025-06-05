import { NichoEntity } from "@/features/nichos/domain/entities/nicho.entity";
import { PersonEntity } from "@/features/person/domain/entities/person.entity";

export interface InhumacionEntity {
  idInhumacion: string;
  idNicho: NichoEntity;
  idFallecido: PersonEntity;
    fechaInhumacion: string;
    horaInhumacion: string;
    solicitante: string;
    responsableInhumacion: string;
    observaciones?: string;
    estado: string;
    codigoInhumacion: string;
    fechaCreacion: string;
    fechaActualizacion: string | null;
}

export interface CreateInhumacionEntity {
    idNicho: string;
    idFallecido: string;
    fechaInhumacion: string;
    horaInhumacion: string;
    solicitante: string;
    responsableInhumacion: string;
    observaciones?: string;
    estado: string;
    codigoInhumacion: string;
}

export interface UpdateInhumacionEntity {
    idInhumacion: string;
    idNicho?: string;
    idFallecido?: string;
    fechaInhumacion?: string;
    horaInhumacion?: string;
    solicitante?: string;
    responsableInhumacion?: string;
    observaciones?: string;
    estado?: string;
    codigoInhumacion?: string;
}
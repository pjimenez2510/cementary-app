import { NichoEntity } from "@/features/nichos/domain/entities/nicho.entity";

export interface InhumacionEntity {
  idInhumacion: string;
  idNicho: NichoEntity;
  idFallecido: string;
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
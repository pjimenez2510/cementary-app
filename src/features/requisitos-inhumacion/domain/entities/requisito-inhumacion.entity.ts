import { CementeryEntity } from "@/features/cementery/domain/entities/cementery.entity";
import { HuecoEntity } from "@/features/huecos/domain/entities/hueco.entity";
import { PersonEntity } from "@/features/person/domain/entities/person.entity";

export interface RequisitoInhumacionEntity {
  idRequsitoInhumacion: string;
  idCementerio: CementeryEntity;
  pantoneroACargo: string;
  metodoSolicitud: string;
  idSolicitante: PersonEntity;
  observacionSolicitante?: string;
  copiaCertificadoDefuncion: boolean;
  informeEstadisticoINEC: boolean;
  copiaCedula: boolean;
  pagoTasaInhumacion: boolean;
  copiaTituloPropiedadNicho: boolean;
  autorizacionDeMovilizacionDelCadaver: boolean;
  oficioDeSolicitud: boolean;
  idHuecoNicho: HuecoEntity;
  firmaAceptacionSepulcro: string;
  idFallecido: PersonEntity;
  fechaInhumacion: string;
  horaInhumacion: string;
  nombreAdministradorNicho: string;
}

export interface CreateRequisitoInhumacionEntity {
  idCementerio: string;
  pantoneroACargo: string;
  metodoSolicitud: string;
  idSolicitante: string;
  observacionSolicitante?: string;

  copiaCertificadoDefuncion: boolean;
  observacionCertificadoDefuncion?: string;

  informeEstadisticoINEC: boolean;
  observacionInformeEstadisticoINEC?: string;

  copiaCedula: boolean;
  observacionCopiaCedula?: string;

  pagoTasaInhumacion: boolean;
  observacionPagoTasaInhumacion?: string;

  copiaTituloPropiedadNicho: boolean;
  observacionCopiaTituloPropiedadNicho?: string;

  autorizacionDeMovilizacionDelCadaver: boolean;
  observacionAutorizacionMovilizacion?: string;

  idHuecoNicho: string;
  firmaAceptacionSepulcro: string;
  idFallecido: string;
  fechaInhumacion: string;

  oficioDeSolicitud: boolean;
  observacionOficioSolicitud?: string;

  nombreAdministradorNicho: string;

  horaInhumacion: string;
}

export interface UpdateRequisitoInhumacionEntity {
  idRequisitoInhumacion: string;
  copiaCertificadoDefuncion: boolean;
  informeEstadisticoINEC: boolean;
  copiaCedula: boolean;
  pagoTasaInhumacion: boolean;
  copiaTituloPropiedadNicho: boolean;
}

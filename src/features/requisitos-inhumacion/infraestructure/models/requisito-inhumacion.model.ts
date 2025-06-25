import { CementeryModel } from "@/features/cementery/infrastructure/models/cementery.model";
import { HuecoModel } from "@/features/huecos/infrastructure/models/hueco.model";
import { PersonModel } from "@/features/person/infraestrcture/models/person.model";

export interface RequisitoInhumacionModel {
  id_requsitoInhumacion: string;
  id_cementerio: CementeryModel;
  pantoneroACargo: string;
  metodoSolicitud: string;
  id_solicitante: PersonModel;
  observacionSolicitante: string;
  copiaCertificadoDefuncion: boolean;
  informeEstadisticoINEC: boolean;
  copiaCedula: boolean;
  pagoTasaInhumacion: boolean;
  OficioDeSolicitud: boolean;
  autorizacionDeMovilizacionDelCadaver: boolean;
  copiaTituloPropiedadNicho: boolean;
  id_hueco_nicho: HuecoModel;
  firmaAceptacionSepulcro: string;
  id_fallecido: PersonModel;
  fechaInhumacion: string;
  horaInhumacion: string;
  nombreAdministradorNicho: string;
}

export interface CreateRequisitoInhumacionModel {
  id_cementerio: string;
  pantoneroACargo: string;
  metodoSolictud: string;
  id_solicitante: string;
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

  OficioDeSolicitud: boolean;
  observacionOficioSolicitud?: string;

  id_hueco_nicho: string;
  firmaAceptacionSepulcro: string;
  id_fallecido: string;
  fechaInhumacion: string;
  horaInhumacion: string;

  nombreAdministradorNicho: string;
}

export interface UpdateRequisitoInhumacionModel {
  id_requisitoInhumacion: string;
  copiaCertificadoDefuncion: boolean;
  informeEstadisticoINEC: boolean;
  copiaCedula: boolean;
  pagoTasaInhumacion: boolean;
  copiaTituloPropiedadNicho: boolean;
  autorizacionDeMovilizacionDelCadaver: boolean;
  OficioDeSolicitud: boolean;
  
}

import { CementeryEntity } from "@/features/cementery/domain/entities/cementery.entity";
import { HuecoEntity } from "@/features/huecos/domain/entities/hueco.entity";
import { PersonEntity } from "@/features/person/domain/entities/person.entity";



export interface RequisitoInhumacionEntity {
    idRequsitoInhumacion: string;
    idCementerio: CementeryEntity;
    pantoneroACargo: string;
    metodoSolicitud: string;
    idSolicitante: PersonEntity
    observacionSolicitante: string;
    copiaCertificadoDefuncion: boolean;
    informeEstadisticoINEC: boolean;
    copiaCedula: boolean;
    pagoTasaInhumacion: boolean;
    copiaTituloPropiedadNicho: boolean;
    idHuecoNicho: HuecoEntity;
    firmaAceptacionSepulcro: string;
    idFallecido: PersonEntity;
    fechaInhumacion: string;
    horaInhumacion: string;
    pdfUrls: string [];

    }


    export interface CreateRequisitoInhumacionEntity {
        idCementerio: string;
        pantoneroACargo: string;
        metodoSolicitud: string;
        idSolicitante: string;
        observacionSolicitante: string;
        copiaCertificadoDefuncion: boolean;
        informeEstadisticoINEC: boolean;
        copiaCedula: boolean;
        pagoTasaInhumacion: boolean;
        copiaTituloPropiedadNicho: boolean;
        idHuecoNicho: string;
        firmaAceptacionSepulcro: string;
        idFallecido: string;
        fechaInhumacion: string;
        horaInhumacion: string;
    }

    export interface UpdateRequisitoInhumacionEntity {
        idRequisitoInhumacion: string;
        observacionSolicitante: string;
    }

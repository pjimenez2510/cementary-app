import { CementeryMapper } from "@/features/cementery/infrastructure/mappers/cementery.mapper";
import { CreateRequisitoInhumacionEntity, RequisitoInhumacionEntity, UpdateRequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";
import { CreateRequisitoInhumacionModel, RequisitoInhumacionModel, UpdateRequisitoInhumacionModel } from "../models/requisito-inhumacion.model";
import { PersonMapper } from "@/features/person/infraestrcture/mappers/person.mapper";
import { HuecoMapper } from "@/features/huecos/infrastructure/mappers/hueco.mapper";


export class RequisitoInhumacionMapper {
    static toEntity(data: RequisitoInhumacionModel): RequisitoInhumacionEntity {
        return {
            idRequsitoInhumacion: data.id_requsitoInhumacion,
            idCementerio: CementeryMapper.toEntity(data.id_cementerio),
            pantoneroACargo: data.pantoneroACargo,
            metodoSolicitud: data.metodoSolicitud,
            idSolicitante: PersonMapper.toEntity( data.id_solicitante),
            observacionSolicitante: data.observacionSolicitante,
            copiaCertificadoDefuncion: data.copiaCertificadoDefuncion,
            informeEstadisticoINEC: data.informeEstadisticoINEC,
            copiaCedula: data.copiaCedula,
            pagoTasaInhumacion: data.pagoTasaInhumacion,
            copiaTituloPropiedadNicho: data.copiaTituloPropiedadNicho,
            idHuecoNicho: HuecoMapper.toEntity( data.id_hueco_nicho),
            firmaAceptacionSepulcro: data.firmaAceptacionSepulcro,
            idFallecido: PersonMapper.toEntity( data.id_fallecido),
            fechaInhumacion: data.fechaInhumacion,
            horaInhumacion: data.horaInhumacion,
            pdfUrls: data.pdfUrls
        };
    }

    static toModel(entity: CreateRequisitoInhumacionEntity): CreateRequisitoInhumacionModel{
        return {
            id_cementerio: entity.idCementerio,
            pantoneroACargo: entity.pantoneroACargo,
            metodoSolictud: entity.metodoSolicitud,
            id_solicitante: entity.idSolicitante,
            observacionSolicitante: entity.observacionSolicitante,
            copiaCertificadoDefuncion: entity.copiaCertificadoDefuncion ,
            informeEstadisticoINEC: entity.informeEstadisticoINEC ,
            copiaCedula: entity.copiaCedula ,
            pagoTasaInhumacion: entity.pagoTasaInhumacion,
            copiaTituloPropiedadNicho: entity.copiaTituloPropiedadNicho,
            id_hueco_nicho: entity.idHuecoNicho,
            firmaAceptacionSepulcro: entity.firmaAceptacionSepulcro,
            id_fallecido: entity.idFallecido,
            fechaInhumacion: entity.fechaInhumacion,
            horaInhumacion: entity.horaInhumacion
        }
    }

    static toUpdateModel(entity: UpdateRequisitoInhumacionEntity): UpdateRequisitoInhumacionModel{
        return {
            id_requisitoInhumacion: entity.idRequisitoInhumacion,
            observacionSolicitante: entity.observacionSolicitante 
        }

    }
}

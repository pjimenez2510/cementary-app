import { NichoModel, CreateNichoModel, UpdateNichoModel } from "../models/nicho.model";
import { NichoEntity, CreateNichoEntity, UpdateNichoEntity } from "../../domain/entities/nicho.entity";
import { CementeryMapper } from "@/features/cementery/infrastructure/mappers/cementery.mapper";

export class NichoMapper {
  static toEntity(model: NichoModel): NichoEntity {
    return {
      idNicho: model.id_nicho,
      idCementerio: typeof model.id_cementerio != 'string' ? CementeryMapper.toEntity(model.id_cementerio): model.id_cementerio,
      sector: model.sector,
      fila: model.fila,
      numero: model.numero,
      tipo: model.tipo,
      estado: model.estado,
      fechaConstruccion: model.fecha_construccion,
      observaciones: model.observaciones,
      numeroPisos: model.numero_pisos,
      fechaCreacion: model.fecha_creacion,
      fechaActualizacion: model.fecha_actualizacion,
    };
  }

  static toModel(entity: CreateNichoEntity): CreateNichoModel {
    return {
      id_cementerio: entity.idCementerio,
      sector: entity.sector,
      fila: entity.fila,
      numero: entity.numero,
      tipo: entity.tipo,
      fecha_construccion: entity.fechaConstruccion,
      observaciones: entity.observaciones,
      numero_pisos: entity.numeroPisos,
    };
  }

  static toUpdateModel(entity: UpdateNichoEntity): UpdateNichoModel {
    return {
      id_nicho: entity.idNicho,
      sector: entity.sector,
      fila: entity.fila,
      numero: entity.numero,
      tipo: entity.tipo,
      fecha_construccion: entity.fechaConstruccion,
      observaciones: entity.observaciones,
      numero_pisos: entity.numeroPisos,
    };
  }
} 
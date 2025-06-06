import {
  HuecoModel,
  CreateHuecoModel,
  UpdateHuecoModel,
  FallecidoModel,
} from "../models/hueco.model";
import {
  HuecoEntity,
  CreateHuecoEntity,
  UpdateHuecoEntity,
  FallecidoEntity,
} from "../../domain/entities/hueco.entity";
import { NichoMapper } from "@/features/nichos/infrastructure/mappers/nicho.mapper";

export class FallecidoMapper {
  static toEntity(model: FallecidoModel): FallecidoEntity {
    return {
      idPersona: model.id_persona,
      nombre: model.nombre,
      apellido: model.apellido,
    };
  }
}

export class HuecoMapper {
  static toEntity(model: HuecoModel): HuecoEntity {
    return {
      idDetalleHueco: model.id_detalle_hueco,
      idNicho: model.id_nicho
        ? NichoMapper.toEntity(model.id_nicho)
        : undefined,
      numHueco: model.num_hueco,
      estado: model.estado,
      idFallecido: model.id_fallecido
        ? FallecidoMapper.toEntity(model.id_fallecido)
        : null,
      fechaCreacion: model.fecha_creacion,
      fechaActualizacion: model.fecha_actualizacion,
      requisitosInhumacion: model.requisitos_inhumacion,
    };
  }

  static toModel(entity: CreateHuecoEntity): CreateHuecoModel {
    return {
      id_nicho: entity.idNicho,
      num_hueco: entity.numeroHueco,
      estado: entity.estado,
      id_fallecido: entity.idFallecido,
    };
  }

  static toUpdateModel(entity: UpdateHuecoEntity): UpdateHuecoModel {
    return {
      id_detalle_hueco: entity.idDetalleHueco,
      estado: entity.estado,
      id_fallecido: entity.idFallecido,
    };
  }
}

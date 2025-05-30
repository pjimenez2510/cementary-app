import { CreatePersonEntity, PersonEntity, UpdatePersonEntity } from "../../domain/entities/person.entity";
import { CreatePersonModel, PersonModel, UpdatePersonModel } from "../models/person.model";

export class PersonMapper{
    static toEntity(model: PersonModel): PersonEntity {
        return {
            id_persona: model.id_persona,
            cedula: model.cedula,
            nombres: model.nombres,
            apellidos: model.apellidos,
            fecha_nacimiento: model.fecha_nacimiento,
            fecha_defuncion: model.fecha_defuncion,
            lugar_defuncion: model.lugar_defuncion,
            causa_defuncion: model.causa_defuncion,
            direccion: model.direccion,
            telefono: model.telefono,
            correo: model.correo,
            tipo: model.tipo,
        };
    }

    static toModel(entity: CreatePersonEntity):CreatePersonModel {
        return {
            cedula: entity.cedula,
            nombres: entity.nombres,
            apellidos: entity.apellidos,
            fecha_nacimiento: entity.fecha_nacimiento,
            fecha_defuncion: entity.fecha_defuncion,
            lugar_defuncion: entity.lugar_defuncion,
            causa_defuncion: entity.causa_defuncion,
            direccion: entity.direccion,
            telefono: entity.telefono,
            correo: entity.correo,
            tipo: entity.tipo,
        };
    }

    static toUpdateModel(entity: UpdatePersonEntity):UpdatePersonModel {
        return {
            id_persona: entity.id_persona,
            cedula: entity.cedula,
            nombres: entity.nombres,
            apellidos: entity.apellidos,
            fecha_nacimiento: entity.fecha_nacimiento,
            fecha_defuncion: entity.fecha_defuncion,
            lugar_defuncion: entity.lugar_defuncion,
            causa_defuncion: entity.causa_defuncion,
            direccion: entity.direccion,
            telefono: entity.telefono,
            correo: entity.correo,
            tipo: entity.tipo,
        };
    }
}
import { CreateRequisitoInhumacionEntity, RequisitoInhumacionEntity, UpdateRequisitoInhumacionEntity } from "../entities/requisito-inhumacion.entity";


export interface RequisitoInhumacionRepository {
    findAll(): Promise<RequisitoInhumacionEntity[]>;
    findById(id: string): Promise<RequisitoInhumacionEntity>;
    create(requisitoInhumacion: CreateRequisitoInhumacionEntity): Promise<RequisitoInhumacionEntity>;
    update(requisitoInhumacion: UpdateRequisitoInhumacionEntity): Promise<RequisitoInhumacionEntity>;
    delete(id: string): Promise<void>;

}
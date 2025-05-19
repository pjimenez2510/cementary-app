import { NichoEntity, CreateNichoEntity, UpdateNichoEntity } from "../entities/nicho.entity";

export interface NichoRepository {
  findAll(): Promise<NichoEntity[]>;
  findById(id: string): Promise<NichoEntity>;
  create(nicho: CreateNichoEntity): Promise<NichoEntity>;
  update(nicho: UpdateNichoEntity): Promise<NichoEntity>;
  delete(id: string): Promise<void>;
} 
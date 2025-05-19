import { API_ROUTES } from "@/core/constants/api-routes";
import { NichoModel } from "../models/nicho.model";
import { NichoRepository } from "../../domain/repositories/nicho.repository";
import { NichoEntity, CreateNichoEntity, UpdateNichoEntity } from "../../domain/entities/nicho.entity";
import { NichoMapper } from "../mappers/nicho.mapper";
import AxiosClient from "@/core/infrastructure/axios-client";

export class NichoRepositoryImpl implements NichoRepository {
  private httpClient: AxiosClient;

  constructor() {
    this.httpClient = AxiosClient.getInstance();
  }

  static getInstance(): NichoRepositoryImpl {
    return new NichoRepositoryImpl();
  }

  async findAll(): Promise<NichoEntity[]> {
    const response = await this.httpClient.get<NichoModel[]>(API_ROUTES.NICHOS.LIST);
    return response.data.map(NichoMapper.toEntity);
  }

  async findById(id: string): Promise<NichoEntity> {
    const response = await this.httpClient.get<NichoModel>(API_ROUTES.NICHOS.GET_BY_ID(id));
    return NichoMapper.toEntity(response.data);
  }

  async create(nicho: CreateNichoEntity): Promise<NichoEntity> {
    const model = NichoMapper.toModel(nicho);
    const response = await this.httpClient.post<NichoModel>(API_ROUTES.NICHOS.CREATE, model);
    return NichoMapper.toEntity(response.data);
  }

  async update(nicho: UpdateNichoEntity): Promise<NichoEntity> {
    const model = NichoMapper.toUpdateModel(nicho);
    const response = await this.httpClient.patch<NichoModel>(
      API_ROUTES.NICHOS.UPDATE(model.id_nicho),
      model
    );
    return NichoMapper.toEntity(response.data);
  }

  async delete(id: string): Promise<void> {
    await this.httpClient.delete(API_ROUTES.NICHOS.DELETE(id));
  }
} 
import { useQuery } from "@tanstack/react-query";
import { NichoRepositoryImpl } from "../../infrastructure/repositories/nicho.repository.impl";
import { NICHO_QUERY_KEYS } from "../../domain/constants/nicho-keys";
import { NichoEntity } from "../../domain/entities/nicho.entity";

export const useFindAllNichosQuery = () => {
  return useQuery<NichoEntity[]>({
    queryKey: NICHO_QUERY_KEYS.all(),
    queryFn: () => NichoRepositoryImpl.getInstance().findAll(),
  });
};

export const useFindNichoByIdQuery = (id: string) => {
  return useQuery<NichoEntity>({
    queryKey: NICHO_QUERY_KEYS.byId(id),
    queryFn: () => NichoRepositoryImpl.getInstance().findById(id),
    enabled: !!id,
  });
}; 
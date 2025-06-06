import { useQuery } from "@tanstack/react-query"
import { RequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity"
import { INHUMACION_QUERY_KEYS } from "@/features/inhumaciones/domain/constants/inhumacion-key";
import { RequisitoInhumacionRepositoryImpl } from "../../infraestructure/repositories/requisito-inhumacion.repository.impl";
import { REQUISITO_INHUMACION_QUERY_KEYS } from "../../domain/constants/requisito-inhumacion-key";


export const useFindAllRequisitosInhumacionQuery = () => {
    return useQuery<RequisitoInhumacionEntity[]>({
        queryKey: REQUISITO_INHUMACION_QUERY_KEYS.all(),
        queryFn: () => {
            const repository = RequisitoInhumacionRepositoryImpl.getInstance();
            return repository.findAll();
        },
    });
}


export const useFindRequisitoInhumacionByIdQuery = (id: string) => {
    return useQuery<RequisitoInhumacionEntity>({
        queryKey: REQUISITO_INHUMACION_QUERY_KEYS.byId(id),
        queryFn: () => {
            const repository = RequisitoInhumacionRepositoryImpl.getInstance();
            return repository.findById(id);
        },
        enabled: !!id,
    })
}
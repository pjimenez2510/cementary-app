import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateRequisitoInhumacionEntity, RequisitoInhumacionEntity, UpdateRequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";
import { RequisitoInhumacionRepositoryImpl } from "../../infraestructure/repositories/requisito-inhumacion.repository.impl";
import { REQUISITO_INHUMACION_QUERY_KEYS } from "../../domain/constants/requisito-inhumacion-key";
import { toast } from "sonner";


export const useCreateRequisitoInhumacionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<RequisitoInhumacionEntity, Error, CreateRequisitoInhumacionEntity>({
        mutationFn: async(data)=>{
            const repository = RequisitoInhumacionRepositoryImpl.getInstance();
            return await repository.create(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: REQUISITO_INHUMACION_QUERY_KEYS.all() });
            toast.success("Requisito de inhumación creado exitosamente");
        },
        onError: (error) => {
            toast.error("Error al crear el requisito de inhumación", {
                description: error.message,
            });
        },
    })

}

export const useUpdateRequisitoInhumacionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<RequisitoInhumacionEntity, Error, UpdateRequisitoInhumacionEntity>({
        mutationFn: async(data)=>{
            const repository = RequisitoInhumacionRepositoryImpl.getInstance();
            return await repository.update(data);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: REQUISITO_INHUMACION_QUERY_KEYS.all() });
            queryClient.invalidateQueries({ queryKey: REQUISITO_INHUMACION_QUERY_KEYS.byId(data.idRequsitoInhumacion) });
            toast.success("Requisito de inhumación actualizado exitosamente");
        },
        onError: (error) => {
            toast.error("Error al actualizar el requisito de inhumación", {
                description: error.message,
            });
        },
    })

    
}

export const useDeleteRequisitoInhumacionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: async(id) => {
            const repository = RequisitoInhumacionRepositoryImpl.getInstance();
            return await repository.delete(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: REQUISITO_INHUMACION_QUERY_KEYS.all() });
            toast.success("Requisito de inhumación eliminado exitosamente");
        },
        onError: (error) => {
            toast.error("Error al eliminar el requisito de inhumación", {
                description: error.message,
            });
        },
    })
}
import { useRouter } from "next/navigation";
import { RequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";
import { useForm } from "react-hook-form";
import { CreateRequisitoInhumacionDTO, CreateRequisitoInhumacionSchema } from "../../domain/schemas/requisito-inhumacion.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateRequisitoInhumacionMutation, useUpdateRequisitoInhumacionMutation } from "./use-requisito-inhumacion-mutation";


export function useRequisitoInhumacionForm(requisitoInhumacion?: RequisitoInhumacionEntity) {
    const router = useRouter();
    const methods = useForm<CreateRequisitoInhumacionDTO>({
    resolver: zodResolver(CreateRequisitoInhumacionSchema),
    defaultValues: requisitoInhumacion ? {
        idCementerio: requisitoInhumacion.idCementerio?.idCementerio,
        pantoneroACargo: requisitoInhumacion.pantoneroACargo,
        metodoSolicitud: requisitoInhumacion.metodoSolicitud,
        idSolicitante: requisitoInhumacion.idSolicitante?.id_persona,
        observacionSolicitante: requisitoInhumacion.observacionSolicitante ,
        copiaCertificadoDefuncion: requisitoInhumacion.copiaCertificadoDefuncion ,
        informeEstadisticoINEC: requisitoInhumacion.informeEstadisticoINEC ,
        copiaCedula: requisitoInhumacion.copiaCedula,
        pagoTasaInhumacion: requisitoInhumacion.pagoTasaInhumacion ,
        copiaTituloPropiedadNicho: requisitoInhumacion.copiaTituloPropiedadNicho,
        idHuecoNicho: requisitoInhumacion.idHuecoNicho?.idDetalleHueco,
        firmaAceptacionSepulcro: requisitoInhumacion.firmaAceptacionSepulcro,
        idFallecido: requisitoInhumacion.idFallecido?.id_persona,
        fechaInhumacion: requisitoInhumacion.fechaInhumacion,
        horaInhumacion: requisitoInhumacion.horaInhumacion
    } : {},
  });

  const { mutate: create, isPending: isCreating } = useCreateRequisitoInhumacionMutation();
  const { mutate: update, isPending: isUpdating } = useUpdateRequisitoInhumacionMutation();

  const  onSubmit = (data: CreateRequisitoInhumacionDTO) => {

    if(requisitoInhumacion && requisitoInhumacion.idRequsitoInhumacion) {
        update({
            idRequisitoInhumacion: requisitoInhumacion.idRequsitoInhumacion,
            ...data,
        }, {
            onSuccess: () => {
                router.push("/requisitos-inhumacion");
            },
        });
    } else {
        create(data, {
            onSuccess: () => {
                router.push("/requisitos-inhumacion");
            },
        });
    }
  };

    return {
        methods,
        onSubmit,
        isPending: isCreating || isUpdating,
    };

}


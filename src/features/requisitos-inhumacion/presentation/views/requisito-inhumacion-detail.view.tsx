
"use client";
import ContainerApp from "@/core/layout/container-app";
import { useFindRequisitoInhumacionByIdQuery } from "../hooks/use-requisito-inhumacion-queries";
import { RequisitoInhumacionCard } from "../components/requisito-inhumacion-card.component";

interface RequisitoInhumacionViewProps{
    requisitoInhumacionId: string;
}


export default function RequisitoInhumacionDetailView({ requisitoInhumacionId }: RequisitoInhumacionViewProps) {

    const { data: requisitoInhumacion, isLoading } = useFindRequisitoInhumacionByIdQuery(requisitoInhumacionId);

     if (isLoading) {
        return (
          <ContainerApp title="Detalles del Nicho">
            <div className="text-center py-8">Cargando...</div>
          </ContainerApp>
        );
      }

       if (!requisitoInhumacion) {
          return (
            <ContainerApp title="Detalles del Nicho">
              <div className="text-center py-8 text-red-500">No se encontró el nicho.</div>
            </ContainerApp>
          );
        }


    return (
        <ContainerApp title={`Requisito de Inhumación - ${requisitoInhumacion?.idRequsitoInhumacion}`} >
            <RequisitoInhumacionCard requisitoInhumacion={requisitoInhumacion}  />
        </ContainerApp>
    )
}
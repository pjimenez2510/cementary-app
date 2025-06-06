"use client";
import { FormProvider } from "react-hook-form";
import { InhumacionEntity } from "../../domain/entities/inhumacion.entity";
import { useInhumacionForm } from "../hooks/use-inhumacion-form";
import RHFNichoSelect from "@/shared/components/form/rhf/rhf-nicho-select";
import RHFInput from "@/shared/components/form/rhf/rhf-input";
import RHFSelect from "@/shared/components/form/rhf/rhf-select";
import RHFCalendar from "@/shared/components/form/rhf/rhf-calendar";
import { Button } from "@/shared/components/ui/button";
import clsx from "clsx";
import RHFTextarea from "@/shared/components/form/rhf/rhf-text-area";

const estadoOptions = [
  { value: "Pendiente", label: "Pendiente" },
  { value: "Programada", label: "Programada" },
  { value: "Realizada", label: "Realizada" },
  { value: "Cancelada", label: "Cancelada" },
];

interface InhumacionFormProps {
  inhumacion?: InhumacionEntity;
}

export function InhumacionForm({ inhumacion }: InhumacionFormProps) {
  const { methods, onSubmit, isPending } = useInhumacionForm(inhumacion);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RHFNichoSelect
            name="idNicho"
            label="Nicho"
            placeholder="Selecciona un nicho"
          />
          <RHFInput
            name="idFallecido"
            label="ID del Fallecido"
            placeholder="Ingresa el ID del fallecido"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RHFCalendar name="fechaInhumacion" label="Fecha de Inhumación" />
          <RHFInput
            name="horaInhumacion"
            label="Hora de Inhumación"
            type="time"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RHFInput
            name="solicitante"
            label="Solicitante"
            placeholder="Nombre del solicitante"
          />
          <RHFInput
            name="responsableInhumacion"
            label="Responsable de Inhumación"
            placeholder="Nombre del responsable"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RHFInput
            name="codigoInhumacion"
            label="Código de Inhumación"
            placeholder="Código de inhumación"
          />
          <RHFSelect
            name="estado"
            label="Estado"
            placeholder="Selecciona el estado"
            options={estadoOptions}
          />
        </div>

        <div className="space-y-2">
          <RHFTextarea
            name="observaciones"
            label="Observaciones"
            placeholder="Observaciones adicionales (opcional)"
            rows={4}
          />
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button
            type="submit"
            size="lg"
            className={clsx(
              "px-8 min-w-32",
              isPending && "opacity-50 cursor-not-allowed"
            )}
            disabled={isPending}
          >
            {isPending ? "Guardando..." : "Guardar Inhumación"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
import { FormProvider } from "react-hook-form";
import { Button } from "@/shared/components/ui/button";
import RHFInput from "@/shared/components/form/rhf/rhf-input";
import RHFSelect from "@/shared/components/form/rhf/rhf-select";
import { useHuecoForm } from "../hooks/use-hueco-form";
import clsx from "clsx";

const estadoOptions = [
  { value: "Disponible", label: "Disponible" },
  { value: "Ocupado", label: "Ocupado" },
  { value: "Reservado", label: "Reservado" },
];

interface NichoHuecoFormProps {
  nichoId: string;
  onSuccess?: () => void;
}

export function NichoHuecoForm({ nichoId, onSuccess }: NichoHuecoFormProps) {
  const { methods, onSubmit, isPending } = useHuecoForm(nichoId, onSuccess);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RHFInput name="numeroHueco" label="Número de Hueco" type="number" />
          <RHFSelect name="estado" label="Estado" options={estadoOptions} placeholder="Selecciona el estado" />
        </div>
        <div className="flex justify-end pt-2">
          <Button type="submit" size="lg" className={clsx("px-8", isPending && "opacity-50 cursor-not-allowed")}
            disabled={isPending}>
            {isPending ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
} 
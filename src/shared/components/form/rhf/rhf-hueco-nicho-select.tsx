import { useFindAllHuecosQuery } from "@/features/huecos/presentation/hooks/use-hueco-queries";
import RHFSelect from "./rhf-select";


interface RHFHuecoNichoSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: { value: string; label: string }[];
  className?: string;
}


export default function RHFHuecoNichoSelect({
    name,
    label,
    placeholder,
    disabled,
}: RHFHuecoNichoSelectProps){

    const { data: huecosNichos, isLoading } = useFindAllHuecosQuery();
    const options = (huecosNichos ?? [])
        .filter((h) => h.idDetalleHueco !== undefined)
        .map((h) => ({
            value: h.idDetalleHueco as string,
            label: `Sector: ${h.idNicho?.sector} - Fila: ${h.idNicho?.fila} - Número: ${h.idNicho?.numero} - Hueco: ${h.numHueco} - Tipo: ${h.idNicho?.tipo}`,
        }));

    return (
        <RHFSelect 
        name={name}
        label={label}
        options={options}
        placeholder={
            isLoading ? "Cargando huecos..." : placeholder || "Selecciona un hueco"
        }
        disabled={isLoading || disabled} />
    )
}
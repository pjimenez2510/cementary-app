import { useFindAllNichosQuery } from "@/features/nichos/presentation/hooks/use-nicho-queries";
import RHFSelect from "./RHFSelect";


interface RHFNichoSelectProps {
    name: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

export default function RHFNichoSelect({ name, label, placeholder, disabled }: RHFNichoSelectProps) {
    const { data: nichos, isLoading } = useFindAllNichosQuery();

    const options = nichos?.map(n => ({
        value: n.idNicho,
        label: `${n.sector}` + ` - Fila: ${n.fila} - Número: ${n.numero} - Tipo: ${n.tipo}`
    })) ?? [];

    return (
        <RHFSelect
            name={name}
            label={label}
            options={options}
            placeholder={isLoading ? "Cargando nichos..." : (placeholder || "Selecciona un nicho")}
            disabled={isLoading || disabled}
        />
    );
}
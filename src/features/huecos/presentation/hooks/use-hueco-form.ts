import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateHuecoMutation } from "./use-hueco-mutations";
import { CreateHuecoDTO, CreateHuecoSchema } from "@/features/huecos/domain/schemas/hueco.schema";

export function useHuecoForm(nichoId: string, onSuccess?: () => void) {
  const methods = useForm<CreateHuecoDTO>({
    resolver: zodResolver(CreateHuecoSchema),
    defaultValues: {
      idNicho: nichoId,
      estado: "Disponible",
      numeroHueco: 1,
    },
  });

  const { mutate: create, isPending } = useCreateHuecoMutation();

  const onSubmit = (data: CreateHuecoDTO) => {
    create(data, {
      onSuccess: () => {
        methods.reset();
        onSuccess?.();
      },
    });
  };

  return {
    methods,
    onSubmit,
    isPending,
  };
} 
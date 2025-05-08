import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { login } from "@/features/auth/presentation/services/actions/sign-in";
import { LoginEN } from "@/features/auth/inferfaces/auth.interface";

const schema = z.object({
  ci: z.string().min(1, "La cédula es requerida"),
  password: z
    .string()
    .min(8, "La contraseña debe tener como mínimo 8 caracteres"),
});

type FormFields = z.infer<typeof schema>;

export function useLoginForm() {
  const methods = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      ci: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await login(data);
  };

  return { onSubmit, methods, isSubmitting: methods.formState.isSubmitting };
} 
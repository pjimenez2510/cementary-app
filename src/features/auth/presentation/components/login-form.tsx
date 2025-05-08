import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/rhf/RHFInput";
import RHFPasswordInput from "@/components/rhf/RHFPasswordInput";
import { useLoginForm } from "@/features/auth/hooks/use-login-form";
import Link from "next/link";

const LoginForm = () => {
  const { methods, onSubmit, isSubmitting } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col items-center w-full max-w-xl" onSubmit={methods.handleSubmit(onSubmit)}>
        <RHFInput
          name="ci"
          label="Cédula"
          placeholder="Ingrese su número de cédula"
        />
        <RHFPasswordInput
          name="password"
          label="Contraseña"
          placeholder="Contraseña"
        />
        <Button className="my-4" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </Button>
      </form>
      <p className="text-center text-sm">
        ¿No tienes una cuenta?{' '}
        <Link href="/register" className="text-blue-500 hover:underline">
          Regístrate
        </Link>
      </p>
    </FormProvider>
  );
};

export default LoginForm; 
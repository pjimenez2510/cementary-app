import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

type RHFInputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

function RHFInput({ name, label, type = "text", placeholder }: RHFInputProps) {
  const { control, formState } = useFormContext();

  const getErrorMessage = (name: string) => {
    return formState.errors[name]?.message as string | undefined;
  };

  return (
    <div className="w-full space-y-2 mb-4">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input type={type} placeholder={placeholder} {...field} />
        )}
      />
      <p className="text-sm text-destructive mt-1">{getErrorMessage(name)}</p>
    </div>
  );
}

export default RHFInput;

import { z } from "zod";

export const CreateNichoSchema = z.object({
  idCementerio: z.string().uuid("El cementerio es requerido y debe ser un UUID válido"),
  sector: z.string().min(1, "El sector es requerido").max(2, "Máximo 2 caracteres"),
  fila: z.string().min(1, "La fila es requerida").max(3, "Máximo 3 caracteres"),
  numero: z.string().min(1, "El número es requerido").max(4, "Máximo 4 caracteres"),
  tipo: z.enum(["Bóveda", "Nicho", "Doble", "Especial"], { message: "Tipo inválido" }),
  fechaConstruccion: z.string().min(1, "La fecha de construcción es requerida"),
  observaciones: z.string().max(500, "Máximo 500 caracteres").optional(),
  numHuecos: z.coerce.number().min(1, "Mínimo 1 hueco").max(10, "Máximo 10 huecos"),
});

export const UpdateNichoSchema = CreateNichoSchema.partial().extend({
  idNicho: z.string().uuid("ID de nicho inválido"),
});

export type CreateNichoDTO = z.infer<typeof CreateNichoSchema>;
export type UpdateNichoDTO = z.infer<typeof UpdateNichoSchema>; 
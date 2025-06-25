import { z } from "zod";

export const CreatePropietarioNichoSchema = z.object({
  idPersona: z.string().uuid("El ID de la persona es requerido y debe ser un UUID válido"),
  idNicho: z.string().uuid("El ID del nicho es requerido y debe ser un UUID válido"),
  fechaAdquisicion: z.string().min(1, "La fecha de adquisición es requerida"),
  tipoDocumento: z.enum(["Escritura", "Contrato", "Factura", "Otro"] as const, {
    message: "Tipo de documento inválido",
  }),
  numeroDocumento: z.string().min(1, "El número de documento es requerido"),
  estado: z.enum(["Activo", "Inactivo", "En proceso", "Vendido", "Heredado"] as const, {
    message: "Estado inválido",
  }),
  observaciones: z.string().min(1, "Las observaciones son requeridas"),
  tipo: z.enum(["Dueño", "Heredero"] as const, {
    message: "Tipo de propietario inválido",
  }),
});

export const UpdatePropietarioNichoSchema = z.object({
  idPropietarioNicho: z.string().uuid("El ID del propietario es requerido y debe ser un UUID válido"),
  estado: z.enum(["Activo", "Inactivo", "En proceso", "Vendido", "Heredado"] as const, {
    message: "Estado inválido",
  }).optional(),
  observaciones: z.string().min(1, "Las observaciones son requeridas").optional(),
  tipoDocumento: z.enum(["Escritura", "Contrato", "Factura", "Otro"] as const, {
    message: "Tipo de documento inválido",
  }).optional(),
  numeroDocumento: z.string().min(1, "El número de documento es requerido").optional(),
});

export type CreatePropietarioNichoDTO = z.infer<typeof CreatePropietarioNichoSchema>;
export type UpdatePropietarioNichoDTO = z.infer<typeof UpdatePropietarioNichoSchema>; 
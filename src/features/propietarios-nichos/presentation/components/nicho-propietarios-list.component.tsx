"use client";
import { useFindPropietariosByNichoQuery } from "../hooks/use-propietario-nicho-queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { AlertCircle, FileText, User2, BadgeCheck, Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useDeletePropietarioNichoMutation } from "../hooks/use-propietario-nicho-mutations";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/components/ui/alert-dialog";
import clsx from "clsx";

function EstadoChip({ estado }: { estado: string }) {
  let color = "bg-gray-200 text-gray-700";
  if (estado.toLowerCase() === "activo") color = "bg-green-100 text-green-700";
  if (estado.toLowerCase() === "inactivo") color = "bg-gray-300 text-gray-500";
  if (estado.toLowerCase() === "en proceso") color = "bg-yellow-100 text-yellow-700";
  if (estado.toLowerCase() === "vendido") color = "bg-blue-100 text-blue-700";
  if (estado.toLowerCase() === "heredado") color = "bg-purple-100 text-purple-700";
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>{estado}</span>
  );
}

interface NichoPropietariosListProps {
  nichoId: string;
}

export function NichoPropietariosList({ nichoId }: NichoPropietariosListProps) {
  const { data: propietarios, isLoading, error } = useFindPropietariosByNichoQuery(nichoId);
  const { mutate: deletePropietario, isPending } = useDeletePropietarioNichoMutation();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead><span className="flex items-center gap-1"><User2 className="w-4 h-4" />Propietario</span></TableHead>
            <TableHead><span className="flex items-center gap-1"><FileText className="w-4 h-4" />Tipo Documento</span></TableHead>
            <TableHead><span className="flex items-center gap-1"><FileText className="w-4 h-4" />Número Documento</span></TableHead>
            <TableHead><span className="flex items-center gap-1"><BadgeCheck className="w-4 h-4" />Estado</span></TableHead>
            <TableHead><span className="flex items-center gap-1">Acciones</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={5}>Cargando...</TableCell>
            </TableRow>
          )}
          {error && (
            <TableRow>
              <TableCell colSpan={5} className="text-red-500">
                {error instanceof Error ? error.stack : "Error desconocido"}
              </TableCell>
            </TableRow>
          )}
          {!isLoading && propietarios && propietarios.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="py-12 text-center">
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <AlertCircle className="w-12 h-12 mb-1 text-gray-400" />
                  <span className="text-base md:text-lg font-medium">No existen propietarios registrados para este nicho.</span>
                </div>
              </TableCell>
            </TableRow>
          )}
          {propietarios?.map((propietario) => (
            <TableRow key={propietario.idPropietarioNicho}>
              <TableCell>{`${propietario.idPersona?.nombres} ${propietario.idPersona?.apellidos}`}</TableCell>
              <TableCell>{propietario.tipoDocumento}</TableCell>
              <TableCell>{propietario.numeroDocumento}</TableCell>
              <TableCell><EstadoChip estado={propietario.estado} /></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Eliminar propietario?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer. ¿Deseas eliminar este propietario?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deletePropietario(propietario.idPropietarioNicho)}
                          disabled={isPending}
                          className={clsx(
                            "px-8 bg-red-500 hover:bg-red-600",
                            isPending && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          Eliminar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 
"use client";
import { useFindHuecosByNichoQuery } from "../hooks/use-hueco-queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { AlertCircle, Hash, User2, BadgeCheck, Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useDeleteHuecoMutation } from "../hooks/use-hueco-mutations";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/components/ui/alert-dialog";
import clsx from "clsx";
import { StatusChip } from "../utils/status-chip";


interface NichoHuecosListProps {
  nichoId: string;
}

export function NichoHuecosList({ nichoId }: NichoHuecosListProps) {
  const { data: huecos, isLoading, error, refetch } = useFindHuecosByNichoQuery(nichoId);
  const { mutate: deleteHueco, isPending } = useDeleteHuecoMutation();

  const handleDelete = (id: string) => {
    deleteHueco(id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead><span className="flex items-center gap-1"><Hash className="w-4 h-4" />Número</span></TableHead>
              <TableHead><span className="flex items-center gap-1"><BadgeCheck className="w-4 h-4" />Estado</span></TableHead>
              <TableHead><span className="flex items-center gap-1"><User2 className="w-4 h-4" />Fallecido</span></TableHead>
              <TableHead><span className="flex items-center gap-1">Acciones</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={4}>Cargando...</TableCell>
              </TableRow>
            )}
            {error && (
              <TableRow>
                <TableCell colSpan={4} className="text-red-500">
                  {error instanceof Error ? error.stack : "Error desconocido"}
                </TableCell>
              </TableRow>
            )}
            {!isLoading && huecos && huecos.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <AlertCircle className="w-12 h-12 mb-1 text-gray-400" />
                    <span className="text-base md:text-lg font-medium">No existen huecos registrados aún.</span>
                  </div>
                </TableCell>
              </TableRow>
            )}
            {huecos?.map((hueco) => (
              <TableRow key={hueco.idDetalleHueco}>
                <TableCell>{hueco.numHueco}</TableCell>
                <TableCell><StatusChip estado={hueco.estado} /></TableCell>
                <TableCell>{hueco.idFallecido ? `${hueco.idFallecido.nombre} ${hueco.idFallecido.apellido}` : '-'}</TableCell>
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
                          <AlertDialogTitle>¿Eliminar hueco?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. ¿Deseas eliminar este hueco?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(hueco.idDetalleHueco)}
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
    </div>
  );
} 
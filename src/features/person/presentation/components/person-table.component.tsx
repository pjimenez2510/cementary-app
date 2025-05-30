import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useDeletePersonMutation } from "../hooks/use-person-mutation";
import { useFindAllPersonsQuery } from "../hooks/use-person-queries";
import {  Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/components/ui/alert-dialog";
import clsx from "clsx";

export function PersonListTable() {
  const { data: persons, isLoading } = useFindAllPersonsQuery();
  const { mutate: deletePerson, isPending } = useDeletePersonMutation();

  return (
    <div className="rounded-lg border bg-white p-6 mt-4">
      <h3 className="text-lg font-semibold mb-4">
        Resultados ({persons?.length ?? 0})
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <span className="flex items-center gap-1">Cédula</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Nombres</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Apellidos</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Dirección</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Teléfono</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">
                  Correo Electrónico
                </span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Tipo</span>
              </TableHead>
              <TableHead>
                <span className="flex items-center gap-1">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={13}>Cargando...</TableCell>
              </TableRow>
            )}
            {!isLoading && persons && persons.length === 0 && (
              <TableRow>
                <TableCell colSpan={13} className="text-center">
                  No hay personas registradas
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              persons?.map((person) => (
                <TableRow key={person.id_persona}>
                  <TableCell>{person.cedula}</TableCell>
                  <TableCell>{person.nombres}</TableCell>
                  <TableCell>{person.apellidos}</TableCell>
                  <TableCell>{person.direccion ?? "N/A"}</TableCell>
                  <TableCell>{person.telefono ?? "N/A"}</TableCell>
                  <TableCell>{person.correo}</TableCell>
                  <TableCell>{person.tipo}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/persons/${person.id_persona}/editar`}>
                        <Button size="icon" variant="ghost">
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </Link>
                      <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>¿Eliminar nicho?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. ¿Deseas eliminar esta persona?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deletePerson(person.id_persona)}
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

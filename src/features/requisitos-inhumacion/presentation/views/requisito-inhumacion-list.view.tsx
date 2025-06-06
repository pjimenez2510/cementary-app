import { Button } from "@/shared/components/ui/button";
import RequisitoInhumacionFilters from "../components/requisito-inhumacion-filters.component";
import { RequisitoInhumacionListTable } from "../components/requisito-inhumacion-table.component";
import Link from "next/link";
import ContainerApp from "@/core/layout/container-app";
import { Plus } from "lucide-react";


export default function RequisitoInhumacionListView() {
  return (
    <ContainerApp title="Requisito de Inhumacion">
      <h2 className="text-2xl font-bold">Requisito de Inhumacion</h2>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold">Filtros</h3>
          <Link href="/requisitos-inhumacion/nuevo">
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Nuevo Registro
            </Button>
          </Link>
        </div>
        <RequisitoInhumacionFilters />
      </div>
      
      <RequisitoInhumacionListTable />
    </ContainerApp>
  );
} 
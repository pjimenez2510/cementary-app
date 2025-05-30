import ContainerApp from "@/core/layout/container-app";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { PersonListTable } from "../components/person-table.component";
import { PersonFilters } from "../components/person-filters.component";
import Link from "next/link";

export default function PersonListView() {
  return (
    <ContainerApp title="Personas">
      <h2 className="text-2xl font-bold">Gestión de Personas</h2>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold">Filtros</h3>
          <Link href="/persons/nuevo">
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Nueva Persona
            </Button>
          </Link>
        </div>
        <PersonFilters/>
      </div>
      <PersonListTable />
    </ContainerApp>
  );
}

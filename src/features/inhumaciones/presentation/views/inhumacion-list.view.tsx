import ContainerApp from "@/core/layout/container-app";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { InhumacionListTable } from "../components/inhumacion-table-component";
import { InhumacionFilters } from "../components/inhumacion-filters.component";

export default function InhumacionListView() {
  return (
    <ContainerApp title="Inhumaciones">
      <h2 className="text-2xl font-bold">Inhumaciones</h2>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold">Filtros</h3>
          <Link href="/inhumaciones/nuevo">
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Nuevo Registro
            </Button>
          </Link>
        </div>
        <InhumacionFilters />
      </div>

      <InhumacionListTable />
    </ContainerApp>
  );
}

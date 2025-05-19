import ContainerApp from "@/core/layout/container-app";
import { NichoFilters } from "../components/nicho-filters.component";
import { NichoListTable } from "../components/nicho-table.component";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";

export default function NichoListView() {
  return (
    <ContainerApp title="Nichos">
      <h2 className="text-2xl font-bold">Catastro de Nichos</h2>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-lg font-semibold">Filtros</h3>
          <Link href="/nichos/nuevo">
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Nuevo Nicho
            </Button>
          </Link>
        </div>
        <NichoFilters />
      </div>
      <NichoListTable />
    </ContainerApp>
  );
} 
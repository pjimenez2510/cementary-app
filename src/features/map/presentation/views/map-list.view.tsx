import ContainerApp from "@/core/layout/container-app";
import { CemeteryMapVisualization } from "../components/cemetery-map.component";

export default function CementeryListView() {
    return (
        <ContainerApp title="Cementerios">
            <h2 className="text-2xl font-bold">Cementerios y nichos</h2>
            <div className="rounded-lg border bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <h3 className="text-lg font-semibold">Filtros</h3>
                </div>
            </div>
            <CemeteryMapVisualization />
        </ContainerApp>
    );
}
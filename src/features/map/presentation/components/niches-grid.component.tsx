import React, { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { CementeryEntity } from '@/features/cementery/domain/entities/cementery.entity';
import { NichoEntity } from '@/features/nichos/domain/entities/nicho.entity';
import { useNiches } from '../hooks/use-niches';
import { HuecoTooltip } from './hole-tooltip.component';
import { getColorByHuecoOcupado } from '@/shared/lib/get-hueco-color';
import { ColumnsSelector } from './column-selector';

interface NichesGridProps {
    cemetery: CementeryEntity;
}

// Colores según cantidad de huecos ocupados
const holeCountConfig: Record<
    number,
    { color: string; hover: string; label: string }
> = {
    0: { color: 'bg-green-400', hover: 'hover:bg-green-500', label: 'Disponible' },
    1: { color: 'bg-blue-400', hover: 'hover:bg-blue-500', label: 'Reservado' },
    2: { color: 'bg-yellow-400', hover: 'hover:bg-yellow-500', label: 'Uso moderado' },
    3: { color: 'bg-orange-500', hover: 'hover:bg-orange-600', label: 'Uso alto' },
    4: { color: 'bg-red-500', hover: 'hover:bg-red-600', label: 'Muy alto' },
    5: { color: 'bg-red-600', hover: 'hover:bg-red-700', label: 'Lleno' },
};

const getNicheColorByHuecos = (nicho: NichoEntity) => {
    const ocupados = nicho.huecos?.filter(h => h.estado === 'ocupado')?.length || 0;
    const reservados = nicho.huecos?.filter(h => h.estado === 'reservado')?.length || 0;
    const total = nicho.huecos?.length || nicho.numHuecos || 0;
    return getColorByHuecoOcupado(ocupados, reservados, total);
};

export const NichesGrid: React.FC<NichesGridProps> = ({ cemetery }) => {
    const { niches, loading, error } = useNiches();
    const [gridColumns, setGridColumns] = useState<number>(10);

    const filteredNiches = niches.filter(
        (n: NichoEntity) => n.idCementerio?.idCementerio === cemetery.idCementerio
    );

    if (loading) return <div>Cargando nichos...</div>;
    if (error) return <div>{error}</div>;

    // Crear el estilo dinámico para las columnas del grid
    const gridStyle = {
        gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`
    };

    return (
        <div className="space-y-6">
            {/* Selector de columnas */}
            <ColumnsSelector 
                columns={gridColumns} 
                onChange={setGridColumns}
                maxColumns={20}
                minColumns={1}
            />

            {/* Leyenda de colores */}
            <div className="flex justify-center flex-wrap gap-4 mb-6">
                {Object.entries(holeCountConfig).map(([count, { color, label }]) => (
                    <div key={count} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${color}`}></div>
                        <span className="text-sm">{label}</span>
                    </div>
                ))}
            </div>

            {/* Grid de nichos con columnas dinámicas */}
            <div 
                className="grid gap-2 max-w-6xl mx-auto p-6 border rounded-lg bg-gray-50"
                style={gridStyle}
            >
                <TooltipProvider>
                    {filteredNiches.map((niche) => {
                        const colorStatus = getNicheColorByHuecos(niche);
                        return (
                            <Tooltip key={niche.idNicho}>
                                <TooltipTrigger asChild>
                                    <button
                                        className={`
                                            w-8 h-8 rounded border-2 border-white shadow-sm transition-all
                                            ${colorStatus.color} ${colorStatus.hover}
                                            text-white text-xs font-medium
                                            transform hover:scale-110 hover:shadow-lg
                                        `}
                                    >
                                        {niche.numero}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black">
                                    <div className="text-center">
                                        <p className="font-medium">Nicho {niche.numero}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {colorStatus.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Cementerio: {cemetery.nombre}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Sector: {niche.sector} | Fila: {niche.fila}
                                        </p>
                                    </div>
                                    <HuecoTooltip nicho={niche} />
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </TooltipProvider>
            </div>

            {/* Información adicional del grid */}
            <div className="text-center text-sm text-muted-foreground">
                <p>
                    Mostrando {filteredNiches.length} nichos en {gridColumns} columnas
                    {filteredNiches.length > 0 && (
                        <> • {Math.ceil(filteredNiches.length / gridColumns)} filas</>
                    )}
                </p>
            </div>
        </div>
    );
};
import React from 'react';
import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from '@/components/ui/tooltip';
import { CementeryEntity } from '@/features/cementery/domain/entities/cementery.entity';
import { NichoEntity } from '@/features/nichos/domain/entities/nicho.entity';
import { useNiches } from '../hooks/use-niches';

interface NichesGridProps {
    cemetery: CementeryEntity;
}

const getStatusColor = (estado: string) => {
    switch (estado) {
        case 'ocupado': return 'bg-red-500 hover:bg-red-600';
        case 'reservado': return 'bg-yellow-500 hover:bg-yellow-600';
        case 'disponible': return 'bg-green-500 hover:bg-green-600';
        default: return 'bg-gray-400 hover:bg-gray-500';
    }
};

const getStatusText = (estado: string) => {
    switch (estado) {
        case 'ocupado': return 'Ocupado';
        case 'reservado': return 'Reservado';
        case 'disponible': return 'Disponible';
        default: return 'Sin estado';
    }
};

export const NichesGrid: React.FC<NichesGridProps> = ({ cemetery }) => {
    const { niches, loading, error } = useNiches();

    const filteredNiches = niches.filter(
        (n: NichoEntity) => n.idCementerio.idCementerio === cemetery.idCementerio
    );

    if (loading) return <div>Cargando nichos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="space-y-4">
            <div className="flex justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Disponible</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm">Reservado</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm">Ocupado</span>
                </div>
            </div>

            <div className="grid grid-cols-10 gap-2 max-w-4xl mx-auto p-6 border rounded-lg bg-gray-50">
                <TooltipProvider>
                    {filteredNiches.map((niche) => (
                        <Tooltip key={niche.idNicho}>
                            <TooltipTrigger asChild>
                                <button
                                    className={`
                                        w-8 h-8 rounded border-2 border-white shadow-sm transition-all
                                        ${getStatusColor(niche.estado)}
                                        text-white text-xs font-medium
                                        transform hover:scale-110 hover:shadow-lg
                                    `}
                                >
                                    {niche.numero}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black'>
                                <div className="text-center bg-white">
                                    <p className="font-medium">Nicho {niche.numero}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Estado: {getStatusText(niche.estado)}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Cementerio: {cemetery.nombre}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Sector: {niche.sector} | Fila: {niche.fila}
                                    </p>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    );
};
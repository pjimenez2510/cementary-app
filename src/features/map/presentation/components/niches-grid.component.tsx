import React from 'react';
import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from '@/components/ui/tooltip';
import { CementeryEntity } from '@/features/cementery/domain/entities/cementery.entity';

interface NichesGridProps {
    cemetery: CementeryEntity;
}

// Mock de nicho - reemplazar cuando tengas la entidad real
interface MockNiche {
    id: string;
    number: number;
    status: 'ocupado' | 'reservado' | 'disponible';
}

export const NichesGrid: React.FC<NichesGridProps> = ({ cemetery }) => {
    // Mock de nichos - aquí deberías obtener los nichos del cementerio seleccionado
    const mockNiches: MockNiche[] = Array.from({ length: 80 }, (_, index) => ({
        id: `niche-${index + 1}`,
        number: index + 1,
        status: Math.random() > 0.7 ? 'ocupado' : Math.random() > 0.5 ? 'reservado' : 'disponible'
    }));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ocupado': return 'bg-red-500 hover:bg-red-600';
            case 'reservado': return 'bg-yellow-500 hover:bg-yellow-600';
            case 'disponible': return 'bg-green-500 hover:bg-green-600';
            default: return 'bg-gray-400 hover:bg-gray-500';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'ocupado': return 'Ocupado';
            case 'reservado': return 'Reservado';
            case 'disponible': return 'Disponible';
            default: return 'Sin estado';
        }
    };

    return (
        <div className="space-y-4">
            {/* Leyenda */}
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

            {/* Grid de nichos */}
            <div className="grid grid-cols-10 gap-2 max-w-4xl mx-auto p-6 border rounded-lg bg-gray-50">
                <TooltipProvider>
                    {mockNiches.map((niche) => (
                        <Tooltip key={niche.id}>
                            <TooltipTrigger asChild>
                                <button
                                    className={`
                                        w-8 h-8 rounded border-2 border-white shadow-sm transition-all
                                        ${getStatusColor(niche.status)}
                                        text-white text-xs font-medium
                                        transform hover:scale-110 hover:shadow-lg
                                    `}
                                >
                                    {niche.number}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black'>
                                <div className="text-center bg-white">
                                    <p className="font-medium">Nicho {niche.number}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Estado: {getStatusText(niche.status)}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Cementerio: {cemetery.nombre}
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
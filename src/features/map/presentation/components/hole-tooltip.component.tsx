import React from 'react';
import { NichoEntity } from '@/features/nichos/domain/entities/nicho.entity';
import { useFindHuecosByNichoQuery } from '@/features/huecos/presentation/hooks/use-hueco-queries';
import { getColorByHuecoOcupado } from '@/shared/lib/get-hueco-color';

interface HuecoTooltipProps {
  nicho: NichoEntity;
}

export const HuecoTooltip: React.FC<HuecoTooltipProps> = ({ nicho }) => {
  const { data: huecos, isLoading, error } = useFindHuecosByNichoQuery(nicho.idNicho ?? '');

  if (isLoading) return <p className="text-xs text-muted-foreground">Cargando huecos...</p>;
  if (error) return <p className="text-xs text-destructive">Error al cargar huecos</p>;

  const ocupados = huecos?.filter(h => h.estado === 'ocupado').length || 0;
const reservados = huecos?.filter(h => h.estado === 'reservado').length || 0;
const total = huecos?.length || nicho.numHuecos || 0;
const disponibles = Math.max(total - ocupados - reservados, 0);
const { color, label } = getColorByHuecoOcupado(ocupados, reservados, total);

const getEstadoDescripcion = () => {
  if (ocupados + reservados === 0) return 'Disponible';
  if (ocupados + reservados === total) return 'Lleno';
  return `Disponible (${disponibles}/${total})`;
};


  return (
    <div className="text-sm text-center space-y-1">
      <p className="font-semibold">Nicho {nicho.numero}</p>
      <p className="text-muted-foreground">Estado: {getEstadoDescripcion()}</p>
      <div className={`w-full h-2 rounded ${color}`} />
    </div>
  );
};

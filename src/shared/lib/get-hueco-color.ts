// utils/hueco-color.ts
export function getColorByHuecoOcupado(ocupados: number, total: number) {
  const ratio = total > 0 ? ocupados / total : 0;

  if (ocupados === 0)
    return {
      color: 'bg-green-400',
      hover: 'hover:bg-green-500',
      label: 'Disponible (0 ocupados)'
    };

  if (ocupados === total)
    return {
      color: 'bg-red-600',
      hover: 'hover:bg-red-700',
      label: 'Lleno (100%)'
    };

  if (ratio <= 0.2)
    return {
      color: 'bg-lime-400',
      hover: 'hover:bg-lime-500',
      label: `Bajo (${ocupados}/${total})`
    };

  if (ratio <= 0.4)
    return {
      color: 'bg-yellow-400',
      hover: 'hover:bg-yellow-500',
      label: `Moderado (${ocupados}/${total})`
    };

  if (ratio <= 0.6)
    return {
      color: 'bg-amber-500',
      hover: 'hover:bg-amber-600',
      label: `Medio (${ocupados}/${total})`
    };

  if (ratio <= 0.8)
    return {
      color: 'bg-orange-500',
      hover: 'hover:bg-orange-600',
      label: `Alto (${ocupados}/${total})`
    };

  return {
    color: 'bg-red-500',
    hover: 'hover:bg-red-600',
    label: `Muy alto (${ocupados}/${total})`
  };
}

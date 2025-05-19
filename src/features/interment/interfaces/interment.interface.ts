export interface IntermentRequest {
  id_nicho: string; 
  id_fallecido: string; 
  fecha_inhumacion: string; 
  hora_inhumacion: string;
  codigo_inhumacion: string;
  estado: 'Programada' | 'Completada' | 'Cancelada'; 
}


export interface IntermentResponse{
}
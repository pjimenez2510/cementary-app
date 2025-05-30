export interface PersonEntity {
    id_persona: string;
    cedula:string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    fecha_defuncion: string| null;
    lugar_defuncion: string| null;
    causa_defuncion: string | null;
    direccion: string | null;
    telefono: string | null;
    correo:string;
    tipo: string;
}

export interface CreatePersonEntity{
    cedula: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    fecha_defuncion?: string | null;
    lugar_defuncion?: string | null;
    causa_defuncion?: string | null;
    direccion?: string | null;
    telefono?: string | null;
    correo: string;
    tipo: string;
}

export interface UpdatePersonEntity {
    id_persona: string;
    cedula?: string;
    nombres?: string;
    apellidos?: string;
    fecha_nacimiento?: string;
    fecha_defuncion?: string | null;
    lugar_defuncion?: string | null;
    causa_defuncion?: string | null;
    direccion?: string | null;
    telefono?: string | null;
    correo?: string;
    tipo?: string;
}
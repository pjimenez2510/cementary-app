export interface PersonModel {
    id_persona: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    fecha_defuncion: string | null;
    lugar_defuncion: string | null;
    causa_defuncion: string | null;
    direccion: string | null;
    telefono: string | null;
    correo: string;
    tipo: string;
}

export interface CreatePersonModel {
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

export interface UpdatePersonModel {
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
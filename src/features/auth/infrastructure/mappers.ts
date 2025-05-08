// Mappers para traducir entre modelos ES <-> EN
import {
  LoginES,
  RegisterES,
  UserES,
  AuthResponseES,
  LoginEN,
  RegisterEN,
  UserEN,
  AuthResponseEN,
} from "../inferfaces/auth.interface";

// Login
export function mapLoginToES(data: LoginEN): LoginES {
  return {
    cedula: data.ci,
    password: data.password,
  };
}

export function mapLoginToEN(data: LoginES): LoginEN {
  return {
    ci: data.cedula,
    password: data.password,
  };
}

// Register
export function mapRegisterToES(data: RegisterEN): RegisterES {
  return {
    cedula: data.ci,
    email: data.email,
    nombre: data.firstName,
    apellido: data.lastName,
    password: data.password,
    rol: data.role,
  };
}

export function mapRegisterToEN(data: RegisterES): RegisterEN {
  return {
    ci: data.cedula,
    email: data.email,
    firstName: data.nombre,
    lastName: data.apellido,
    password: data.password,
    role: data.rol,
  };
}

// User
export function mapUserToEN(data: UserES): UserEN {
  return {
    id: data.id_user,
    ci: data.cedula,
    email: data.email,
    firstName: data.nombre,
    lastName: data.apellido,
    password: data.password,
    role: data.rol,
    createdAt: data.fecha_creacion,
    updatedAt: data.fecha_modificacion,
    status: data.estado,
  };
}

export function mapUserToES(data: UserEN): UserES {
  return {
    id_user: data.id,
    cedula: data.ci,
    email: data.email,
    nombre: data.firstName,
    apellido: data.lastName,
    password: data.password,
    rol: data.role,
    fecha_creacion: data.createdAt,
    fecha_modificacion: data.updatedAt,
    estado: data.status,
  };
}

// AuthResponse
export function mapAuthResponseToEN(data: AuthResponseES): AuthResponseEN {
  return {
    ...mapUserToEN(data),
    token: data.access_token,
  };
}

export function mapAuthResponseToES(data: AuthResponseEN): AuthResponseES {
  return {
    ...mapUserToES(data),
    access_token: data.token,
  };
} 
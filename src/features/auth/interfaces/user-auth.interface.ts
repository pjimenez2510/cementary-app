import {
  User,
  UserCreate,
} from "@/features/users/infraestructure/models/user.model";

export interface LoginRequest {
  cedula: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RegisterRequest extends UserCreate {}

export interface RegisterResponse extends User {}

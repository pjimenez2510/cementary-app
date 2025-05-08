import { User, UserBase } from "@/features/users/interfaces/user.interface";

export interface Login {
  ci: string;
  password: string;
}

export interface Register extends UserBase {
  email: string;
}

export interface AuthResponse extends User {
  token: string;
}
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../../interfaces/user-auth.interface";

export interface AuthRepository {
  signIn(request: LoginRequest): Promise<LoginResponse>;
  signUp(request: RegisterRequest): Promise<RegisterResponse>;
}

"use server";

import { useAuthStore } from "@/features/auth/infrastructure/auth-store";
import { AuthResponse, Login } from "@/features/auth/inferfaces/auth.interface";
import { auth, signIn } from "@/lib/auth";
import axios from "axios";
import { API_ROUTES } from "@/core/constants/api-routes";

export const login = async (params: Login) => {
  try {
    await signIn.email({
      email: params.ci,
      password: params.password,
    });
  } catch (error) {
    return { ok: false, message: "Error al iniciar sesión" };
  }
};
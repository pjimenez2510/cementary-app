import AxiosClient from "@/core/infrastructure/axios-client";
import { API_ROUTES } from "@/core/constants/api-routes";
import { useAuthStore } from "@/features/auth/infrastructure/auth-store";
import { Register } from "@/features/auth/inferfaces/auth.interface";

export const register = async (params: Register): Promise<{ ok: boolean; message: string }> => {
  try {
    const axios = AxiosClient.getInstance();

    const response = await axios.post(API_ROUTES.AUTH.REGISTER, params, { skipAuth: true });
    const data = response.data.data;

    useAuthStore.getState().setAuth(data);

    return { ok: true, message: "Register successful" };
  } catch (error: any) {
    return { ok: false, message: error.message || "Register failed" };
  }
};

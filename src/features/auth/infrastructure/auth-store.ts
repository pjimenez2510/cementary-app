import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthResponse } from "../inferfaces/auth.interface";
import { User } from "@/features/users/interfaces/user.interface";
import { cookies } from "next/headers";
import { createJSONStorage } from "zustand/middleware";
type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (data: AuthResponse) => void;
  logout: () => void;
} 

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: (data) =>
        set({
          user: data,
          token: data.token,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => cookies()),
      partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
);

export function getToken() {
  return useAuthStore.getState().token;
} 
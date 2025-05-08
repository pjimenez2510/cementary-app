import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

import { createAuthClient } from "better-auth/client";

export const auth = betterAuth({
  plugins: [nextCookies()],
  user: {
    additionalFields: {
      ci: {
        type: "string",
        required: true,
      },
    },
  },
})

const authClient = createAuthClient({
  baseURL: "http://localhost:3000/api/auth",
});

export const { signIn, signUp } = authClient;

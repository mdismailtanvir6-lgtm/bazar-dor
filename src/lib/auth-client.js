import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_PUBLIC_URL || process.env.BETTER_AUTH_LOCAL_URL,
});

export const { signUp, signIn, signOut, updateUser, useSession } = createAuthClient();

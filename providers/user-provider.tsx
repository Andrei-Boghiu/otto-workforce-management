"use client";

import type { JwtPayload } from "@supabase/supabase-js";
import { createContext, useContext, ReactNode } from "react";

export type User = JwtPayload | null;

interface UserProviderProps {
  user: User;
  children: ReactNode;
}

const UserContext = createContext<User>(null);

export function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);

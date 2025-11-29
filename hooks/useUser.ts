"use client";

import { useUserContext } from "@/providers/user-provider";

export const useUser = () => {
  const user = useUserContext();
  if (user === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
};

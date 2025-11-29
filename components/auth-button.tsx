"use client";

import { LogoutButton } from "./logout-button";
import { useUser } from "@/hooks/useUser";

export function AuthButton() {
  const user = useUser();

  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email;

  return (
    <div className="flex items-center gap-4">
      Hey, {name} <LogoutButton />
    </div>
  );
}

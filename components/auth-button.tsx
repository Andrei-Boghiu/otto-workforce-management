"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./logout-button";
import { User } from "@supabase/supabase-js";

export function AuthButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const supabase = createClient();

    supabase.auth
      .getUser()
      .then(({ data }) => {
        setUser(data?.user ?? null);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email;

  if (!user || isLoading) return null;

  return (
    <div className="flex items-center gap-4">
      Hey, {name} <LogoutButton />
    </div>
  );
}

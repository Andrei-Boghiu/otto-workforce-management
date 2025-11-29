"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { UserProvider } from "@/providers/user-provider";
import type { JwtPayload } from "@supabase/supabase-js";

export function UserWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getClaims().then(({ data }) => {
      setUser(data?.claims ?? null);
    });
  }, []);

  return <UserProvider user={user}>{children}</UserProvider>;
}

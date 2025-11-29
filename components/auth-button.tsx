"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LogoutButton } from "./logout-button";
import { useUser } from "@/hooks/useUser";
import { ArrowRightIcon } from "lucide-react";

type AuthButtonProps = {
  showUser?: boolean;
  showSignBtns?: boolean;
  showGoToDashboard?: boolean;
};

export function AuthButton({ showUser = true, showSignBtns = true, showGoToDashboard = false }: AuthButtonProps) {
  const user = useUser();

  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email;

  return user ? (
    <>
      {showUser && (
        <div className="flex items-center gap-4">
          Hey, {name} <LogoutButton />
        </div>
      )}

      {showGoToDashboard && (
        <Button asChild size="sm" variant={"outline"}>
          <Link href="/dashboard">
            <ArrowRightIcon /> Dashboard
          </Link>
        </Button>
      )}
    </>
  ) : (
    <>
      {showSignBtns && (
        <div className="flex gap-2">
          <Button asChild size="sm" variant={"outline"}>
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" variant={"default"}>
            <Link href="/auth/sign-up">Sign up</Link>
          </Button>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LogoutButton } from "./logout-button";
import { useUser } from "@/hooks/useUser";

type AuthButtonProps = {
  showUser?: boolean;
  showSignBtns?: boolean;
};

export function AuthButton({ showUser = true, showSignBtns = true }: AuthButtonProps) {
  const user = useUser();

  return user ? (
    <>
      {showUser && (
        <div className="flex items-center gap-4">
          Hey, {user.email} <LogoutButton />
        </div>
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

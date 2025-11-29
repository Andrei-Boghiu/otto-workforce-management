import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export function PrivateHeader() {
  return (
    <nav className="w-full border-b border-foreground/10 h-16 flex items-center">
      <div className="w-full mx-auto flex justify-between items-center p-4 text-sm">
        <div className="flex items-center gap-6 font-bold text-xl mx-2">
          <Link href="/">Otto - Workforce Management</Link>
        </div>

        <div className="flex items-center gap-6">
          <ThemeSwitcher />

          <Suspense>
            <AuthButton />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

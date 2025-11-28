import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export function PrivateHeader() {
  return (
    <nav className="w-full border-b border-foreground/10 h-16 flex items-center">
      <div className="w-full mx-auto flex justify-between items-center p-4 text-sm">
        <div className="flex items-center gap-6 font-semibold">
          <Link href="/">Otto</Link>
        </div>

        <div className="flex items-center gap-6">
          <ThemeSwitcher />

          <Suspense>
            <AuthButton showLogoutBtn={true} />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

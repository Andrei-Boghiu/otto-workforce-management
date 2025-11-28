import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "./theme-switcher";
import { PUBLIC_HEADER_LINKS } from "@/lib/utils";

export function PublicHeader() {
  return (
    <nav className="w-full border-b border-foreground/10 h-16 flex items-center">
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-4 text-sm">
        <div className="flex items-center gap-6 font-semibold">
          <Link href="/">Otto</Link>
          <Suspense>
            <AuthButton showLogoutBtn={false} />
          </Suspense>
        </div>

        <div className="flex items-center gap-6">
          <ThemeSwitcher />

          {PUBLIC_HEADER_LINKS.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

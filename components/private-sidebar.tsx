"use client";

import { PRIVATE_SIDEBAR_MAIN_LINKS, PRIVATE_SIDEBAR_FOOTER_LINKS } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const YEAR = new Date().getFullYear();

export function PrivateSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-foreground/10 bg-background flex flex-col min-h-[calc(100vh-64px)]">
      {/* Logo / title */}
      <div className="px-6 py-4 text-xl font-bold">Otto</div>

      {/* Main links */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-1">
        {PRIVATE_SIDEBAR_MAIN_LINKS.map(({ title, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-md text-sm font-medium hover:bg-foreground/5 transition-colors ${
                isActive ? "bg-foreground/10 text-foreground font-semibold" : "text-foreground/80"
              }`}
            >
              {title}
            </Link>
          );
        })}
      </nav>

      {/* Footer links */}
      <nav className="px-2 py-2 flex flex-col gap-1">
        {PRIVATE_SIDEBAR_FOOTER_LINKS.map(({ title, href }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-1 rounded-md text-xs text-foreground/70 hover:bg-foreground/5 transition-colors"
          >
            {title}
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <div className="px-6 py-4 text-xs text-foreground/60 border-t border-foreground/10">
        &copy; {YEAR} Otto Workforce Management
      </div>
    </aside>
  );
}

import Link from "next/link";
import { PUBLIC_FOOTER_LINKS } from "@/lib/utils";

const YEAR = new Date().getFullYear();

export function PublicFooter() {
  return (
    <footer className="w-full border-t border-foreground/10 py-10 px-6 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <p className="text-foreground/60">© {YEAR} Otto Workforce Management</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-center">
          {PUBLIC_FOOTER_LINKS.map(({ href, title }) => (
            <Link key={title} href={href} className="text-foreground/70 hover:text-foreground transition-colors">
              {title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

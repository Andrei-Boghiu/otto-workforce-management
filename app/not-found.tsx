import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <h1 className="text-7xl font-extrabold text-foreground mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground/90 mb-2">Oops! Page not found</h2>
      <p className="text-foreground/70 max-w-md mb-6">
        The page you are looking for doesn’t exist, might have been moved, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

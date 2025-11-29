"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong</h1>
      <p className="text-foreground/70 mb-6">An unexpected error occurred. Please try again.</p>

      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/80 transition-colors"
      >
        Retry
      </button>
    </div>
  );
}

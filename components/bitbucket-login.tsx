"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/client";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

interface Props {
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  setError: (v: string | null) => void;
}

export function BitbucketLogin({ isLoading, setIsLoading, setError }: Props) {
  const handleOAuthLogin = async () => {
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "bitbucket",
        options: {
          redirectTo: `${defaultUrl}/auth/callback`,
          queryParams: { next: "/dashboard" },
        },
      });

      if (error) throw error;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button type="button" className="w-full" variant="outline" onClick={handleOAuthLogin} disabled={isLoading}>
      Continue with Bitbucket
    </Button>
  );
}

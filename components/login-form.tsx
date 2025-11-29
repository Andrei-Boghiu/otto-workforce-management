"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PasswordLogin } from "./password-login";
import { BitbucketLogin } from "./bitbucket-login";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to log into your account</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <PasswordLogin isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError} />

            <BitbucketLogin isLoading={isLoading} setIsLoading={setIsLoading} setError={setError} />
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/auth/sign-up" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

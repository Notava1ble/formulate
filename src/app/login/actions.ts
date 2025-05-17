"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Provider } from "@supabase/auth-js";

export async function signIn(provider: Provider) {
  const supabase = await createClient();
  const baseUrl = getBaseUrl();

  // console.log("here:", baseUrl);
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }
  if (data.url) {
    redirect(data.url);
  }
}

function getBaseUrl() {
  // In the browser (e.g. on hydration) we just use a relative URL
  if (typeof window !== "undefined") return "";

  // Local development
  if (process.env.NODE_ENV === "development") {
    const port = process.env.PORT ?? "3000";
    return `http://localhost:${port}`;
  }

  // Use the production Url set only in the prod
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Fallback: Vercel’s auto-injected URL (could be preview!)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  const port = process.env.PORT ?? "3000";
  return `http://localhost:${port}`;
}

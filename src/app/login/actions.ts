"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${getBaseUrl()}/auth/callback`,
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
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.DEPLOYMENT_URL) {
    return `https://${process.env.DEPLOYMENT_URL}`;
  }

  const port = process.env.PORT ?? 3000;
  return `http://localhost:${port}`;
}

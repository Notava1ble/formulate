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

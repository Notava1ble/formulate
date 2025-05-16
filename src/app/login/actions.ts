// app/login/actions.ts
"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      // In production, use your real URL
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/home");
}

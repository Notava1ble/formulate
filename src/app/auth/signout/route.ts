import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (error) console.log(error);

  // Get the origin from the request URL
  const origin = new URL(request.url).origin;
  return NextResponse.redirect(`${origin}/`);
}

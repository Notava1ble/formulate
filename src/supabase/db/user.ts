import { createClient } from "../server";

export async function getUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getAllUserData() {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) return null;

  const { data, error } = await supabase.rpc("get_user_and_collections");

  if (error) {
    console.error("RPC error:", error.message);
    return null;
  }
  return data?.[0]; // <- safely extract the single result row
}

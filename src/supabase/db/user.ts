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

export async function doesUserOwnThisCollection(collectionId: number) {
  const user = await getUser();
  if (!user) {
    return false;
  }

  const supabase = await createClient();
  const { data: collection, error: checkError } = await supabase
    .from("collections")
    .select("id") // We only need to know if it exists, so just select 'id'
    .eq("id", collectionId)
    .eq("user_id", user.id)
    .maybeSingle(); // Returns one record or null, but not an error if not found

  if (checkError || !collection) {
    // If there's an error OR if no collection was found, the user is not authorized
    return false;
  }
  return true; // The user owns the collection
}

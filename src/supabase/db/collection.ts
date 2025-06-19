import { Database } from "../schema";
import { createClient } from "../server";

export type CollectionType = Database["public"]["Tables"]["collections"]["Row"];
export type CollectionInsertType =
  Database["public"]["Tables"]["collections"]["Insert"];
export type CollectionUpdateType =
  Database["public"]["Tables"]["collections"]["Update"];

export async function readCollections() {
  const supabase = await createClient();
  const { data: collections, error } = await supabase
    .from("collections")
    .select("*");
  //TODO: handle errors better
  if (error) {
    return null;
  }
  return collections as CollectionType[];
}

export async function getPremadeCollections() {
  const supabase = await createClient();

  const { data: collections, error } = await supabase
    .from("collections")
    .select("*")
    .is("user_id", null);
  //TODO: handle errors better
  if (error) {
    return null;
  }

  return collections as CollectionType[];
}

export async function getCollectionById(id: string) {
  const supabase = await createClient();

  // Check if id is a number
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return null;
  }

  const { data: collection, error } = await supabase
    .from("collections")
    .select("*")
    .eq("id", numericId)
    .single();
  //TODO: handle errors better
  if (error) {
    return null;
  }

  return collection as CollectionType;
}

export async function getCollectionsForUserId() {
  const supabase = await createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  if (userId) {
    const { data: collections, error } = await supabase
      .from("collections")
      .select("*")
      .eq("user_id", userId);
    //TODO: handle errors better
    if (error) {
      return null;
    }

    return collections as CollectionType[];
  }
  return null;
}

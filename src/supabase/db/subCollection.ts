import { Database } from "../schema";
import { createClient } from "../server";

export type SubCollectionType =
  Database["public"]["Tables"]["sub_collections"]["Row"];
export type SubCollectionInsertType =
  Database["public"]["Tables"]["sub_collections"]["Insert"];
export type SubCollectionUpdateType =
  Database["public"]["Tables"]["sub_collections"]["Update"];

export async function getSubCollectionById(
  id: string
): Promise<SubCollectionType | null> {
  const supabase = await createClient();

  const numericId = Number(id);
  if (isNaN(numericId)) {
    return null;
  }

  const { data: sub_collection, error } = await supabase
    .from("sub_collections")
    .select("*")
    .eq("id", numericId)
    .single();
  //TODO: handle errors better
  if (error) {
    return null;
  }

  return sub_collection as SubCollectionType;
}

export async function getSubCollectionsByCollectionId(
  collectionId: string
): Promise<SubCollectionType[] | null> {
  const supabase = await createClient();

  const numericId = Number(collectionId);
  if (isNaN(numericId)) {
    return null;
  }

  const { data: sub_collection, error } = await supabase
    .from("sub_collections")
    .select("*")
    .eq("collection_id", numericId);

  // TODO: Handle Errors better
  if (error) return null;

  return sub_collection as SubCollectionType[];
}

export async function getAllSubCollections(): Promise<
  SubCollectionType[] | null
> {
  const supabase = await createClient();
  const { data: sub_collections, error } = await supabase
    .from("sub_collections")
    .select("*");
  //TODO: handle errors better
  if (error) {
    return null;
  }
  return sub_collections as SubCollectionType[];
}

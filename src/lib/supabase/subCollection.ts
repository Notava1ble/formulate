import { createClient } from "./server";

export interface SubCollectionType {
  id: number;
  collection_id: string;
  name: string;
  icon: string;
}

export async function getSubCollectionById(
  id: string
): Promise<SubCollectionType | null> {
  const supabase = await createClient();
  const { data: sub_collection, error } = await supabase
    .from("sub_collections")
    .select("*")
    .eq("id", id)
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
  const { data: sub_collection, error } = await supabase
    .from("sub_collections")
    .select("*")
    .eq("collection_id", collectionId);

  // TODO: Handle Errors better
  if (error) return null;

  return sub_collection as SubCollectionType[] | null;
}

import { createClient } from "./server";

export interface CollectionType {
  id: number;
  name: string;
  subject: string;
  icon: string;
  user_id: string | null;
}

export async function readCollections() {
  const supabase = await createClient();
  const { data: collections, error } = await supabase
    .from("collections")
    .select("*");
  //TODO: handle errors better
  if (error) {
    return null;
  }
  return collections as CollectionType[] | null;
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

  return collections as CollectionType[] | null;
}

export async function getCollectionById(id: string) {
  const supabase = await createClient();
  const { data: collection, error } = await supabase
    .from("collections")
    .select("*")
    .eq("id", id)
    .single();
  //TODO: handle errors better
  if (error) {
    return null;
  }

  return collection as CollectionType | null;
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

    return collections as CollectionType[] | null;
  }
  return null;
}

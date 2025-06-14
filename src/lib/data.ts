import { SessionDataContextType } from "@/providers/session-data-provider";
import { getAllUserData, getUser } from "@/supabase/db/user";

export async function getUserData(): Promise<SessionDataContextType | null> {
  const [data, userData] = await Promise.all([getAllUserData(), getUser()]);
  if (!data) return null;

  const {
    collections,
    sub_collections: subCollections,
    premade_collections: premadeCollections,
    premade_sub_collections: premadeSubCollections,
    notes,
  } = data;

  // TODO: Make it not break when one of these is false
  console.log(
    userData && "yes",
    collections && "yes",
    subCollections && "yes",
    notes && "yes",
    premadeCollections && "yes",
    premadeSubCollections && "yes"
  );

  if (userData && data) {
    return {
      user: userData,
      collections,
      subCollections,
      premadeCollections,
      premadeSubCollections,
      notes,
    };
  }
  return null;
}

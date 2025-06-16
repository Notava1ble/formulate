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
    premade_notes: premadeNotes,
  } = data;

  // TODO: Make it not break when one of these is false
  console.log(
    userData && "yes",
    collections.length,
    subCollections.length,
    notes.length,
    premadeCollections.length,
    premadeSubCollections.length,
    premadeNotes.length
  );

  if (userData && data) {
    return {
      user: userData,
      collections,
      subCollections,
      notes,
      premadeCollections,
      premadeSubCollections,
      premadeNotes,
    };
  }
  return null;
}

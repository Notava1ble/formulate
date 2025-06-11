import { SessionDataContextType } from "@/providers/session-data-provider";
import {
  getCollectionsForUserId,
  getPremadeCollections,
} from "@/supabase/db/collection";
import { getNotesForUserId } from "@/supabase/db/notes";
import {
  getPremadeSubCollections,
  getSubCollectionsForUserId,
} from "@/supabase/db/subCollection";
import { getUser } from "@/supabase/db/user";

export async function getUserData(): Promise<SessionDataContextType | null> {
  const [
    user,
    collections,
    subCollections,
    notes,
    premadeCollections,
    premadeSubCollections,
  ] = await Promise.all([
    getUser(),
    getCollectionsForUserId(),
    getSubCollectionsForUserId(),
    getNotesForUserId(),
    getPremadeCollections(),
    getPremadeSubCollections(),
  ]);

  // TODO: Make it not break when one of these is false
  console.log(
    user && "yes",
    collections && "yes",
    subCollections && "yes",
    notes && "yes",
    premadeCollections && "yes",
    premadeSubCollections && "yes"
  );

  if (
    user &&
    collections &&
    subCollections &&
    notes &&
    premadeCollections &&
    premadeSubCollections
  ) {
    return {
      user,
      collections,
      subCollections,
      premadeCollections,
      premadeSubCollections,
      notes,
    };
  }
  return null;
}

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

import { SessionDataContextType } from "@/providers/session-data-provider";
import { getCollectionsForUserId } from "@/supabase/db/collection";
import { getNotesForUserId } from "@/supabase/db/notes";
import { getSubCollectionsForUserId } from "@/supabase/db/subCollection";
import { getUser } from "@/supabase/db/user";

export async function getUserData(): Promise<SessionDataContextType | null> {
  const [user, collections, subCollections, notes] = await Promise.all([
    getUser(),
    getCollectionsForUserId(),
    getSubCollectionsForUserId(),
    getNotesForUserId(),
  ]);

  if (user && collections && subCollections && notes) {
    return {
      user,
      collections,
      subCollections,
      notes,
    };
  }
  return null;
}

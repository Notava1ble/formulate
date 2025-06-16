"use client";

import { useSessionData } from "@/providers/session-data-provider";
import { CollectionType } from "@/supabase/db/collection";
import { SubCollectionType } from "@/supabase/db/subCollection";

import { NoteType } from "@/supabase/db/notes";
import NoteCard from "@/components/NoteCard";

const NoteList = ({
  sub_collection,
  collection,
}: {
  sub_collection: SubCollectionType;
  collection: CollectionType;
}) => {
  const { notes: allUserNotes, premadeNotes } = useSessionData();

  let notes: NoteType[];
  if (sub_collection.user_id === null) {
    // If the sub-collection is a premade one, we use the premade notes
    notes = premadeNotes.filter(
      (note) => note.sub_collection_id === sub_collection.id
    );
  } else {
    // If the sub-collection is a user-created one, we use the user's notes
    notes = allUserNotes.filter(
      (note) => note.sub_collection_id === sub_collection.id
    );
  }

  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
      {notes &&
        notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              collection={sub_collection}
              note={note}
              href={`/home/${collection.id}/${sub_collection.id}/${note.id}`}
            />
          );
        })}
    </div>
  );
};
export default NoteList;

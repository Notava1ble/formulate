"use client";

import { useSessionData } from "@/providers/session-data-provider";
import { CollectionType } from "@/supabase/db/collection";
import { SubCollectionType } from "@/supabase/db/subCollection";

import { NoteType } from "@/supabase/db/notes";
import NoteCard from "@/components/NoteCard";
import AddNoteButton from "@/components/AddNoteButton";

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

  return notes.length > 0 ? (
    <div className="w-full grid grid-cols-2 gap-8 mt-10 px-4">
      {notes.map((note) => {
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
  ) : (
    <div className="w-full flex-col-center mt-8 gap-6">
      <p className="text-zinc-400">This collection is empty.</p>
      <AddNoteButton
        collectionId={collection.id}
        subCollectionId={sub_collection.id}
      />
    </div>
  );
};
export default NoteList;

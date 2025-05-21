import { redirect } from "next/navigation";

import NoteCard from "@/components/NoteCard";
import { getCollectionById } from "@/supabase/db/collection";
import { getSubCollectionById } from "@/supabase/db/subCollection";
import { getNotesBySubCollectionId } from "@/supabase/db/notes";

export default async function Page({
  params,
}: {
  params: Promise<{ collectionId: string; subCollectionId: string }>;
}) {
  const { collectionId, subCollectionId } = await params;

  const [collection, sub_collection] = await Promise.all([
    getCollectionById(collectionId),
    getSubCollectionById(subCollectionId),
  ]);

  if (!collection || !sub_collection) redirect("/not-found");

  const notes = await getNotesBySubCollectionId(subCollectionId);

  return (
    <div className="p-6">
      <div className=" w-full flex-center p-24 pt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          {sub_collection.name}
        </h1>
      </div>
      <div className="flex-col-center mt-12">
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
      </div>
    </div>
  );
}

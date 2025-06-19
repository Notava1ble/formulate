import { notFound } from "next/navigation";

import { getCollectionById } from "@/supabase/db/collection";
import { getSubCollectionById } from "@/supabase/db/subCollection";
import CollectionTitle from "@/components/CollectionTitle";
import NoteList from "./NoteList";
import AddNoteButton from "@/components/AddNoteButton";

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

  if (!collection || !sub_collection) notFound();

  return (
    <div className="p-6">
      <CollectionTitle
        collection={sub_collection}
        parentCollection={collection}
      />
      <div className="flex-col-center mt-10">
        <div className="w-full flex justify-start px-4">
          <AddNoteButton
            collectionId={collection.id}
            subCollectionId={sub_collection.id}
            variant="outline"
          />
        </div>
        <NoteList sub_collection={sub_collection} collection={collection} />
      </div>
    </div>
  );
}

import { redirect } from "next/navigation";

import { collectionData } from "@/data/collectionData";
import { userCollectionData } from "@/data/userCollectionData";
import Navbar from "@/components/Navbar";
import NoteCard from "@/components/NoteCard";

export default async function Page({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const { collectionId } = await params;
  const intCollectionId = parseInt(collectionId);

  const collection =
    intCollectionId < 100
      ? collectionData.find((col) => col.id == intCollectionId)
      : userCollectionData.find((col) => col.id == intCollectionId);

  if (!collection) redirect("/not-found");

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className=" w-full flex-center p-24 pt-32">
          <h1 className="text-6xl font-semibold font-poppins">
            {collection.name}
          </h1>
        </div>
        {/* Premade Collections */}
        <div className="flex-col-center mt-12">
          <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
            {collection.notes.map((note) => {
              return (
                <NoteCard key={note.id} note={note} collection={collection} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

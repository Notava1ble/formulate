import { redirect } from "next/navigation";

import { collectionData } from "@/data/collectionData";
import { userCollectionData } from "@/data/userCollectionData";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ collectionId: string; noteId: string }>;
}) {
  const { collectionId, noteId } = await params;
  const intCollectionId = parseInt(collectionId);

  const collection =
    intCollectionId < 100
      ? collectionData.find((col) => col.id == intCollectionId)
      : userCollectionData.find((col) => col.id == intCollectionId);

  if (!collection) redirect("/not-found");

  const note = collection.notes.find((note) => note.id == parseInt(noteId));

  if (!note) redirect("/not-found");

  return (
    <div>
      <Navbar />
      <div className="prose prose-invert prose-lg mx-auto pt-30">
        <h1>{note.name}</h1>
        <Link href={`/home/${collection.id}`} className="no-underline">
          <sub>{collection.name}</sub>
        </Link>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

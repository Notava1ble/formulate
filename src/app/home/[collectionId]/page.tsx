import { redirect } from "next/navigation";

import { collectionData } from "@/data/collectionData";
import { userCollectionData } from "@/data/userCollectionData";

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

  return <div>Collection: {collection?.name}</div>;
}

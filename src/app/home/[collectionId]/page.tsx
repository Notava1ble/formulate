import { redirect } from "next/navigation";

import CollectionCard from "@/components/CollectionCard";
import { getCollectionById } from "@/lib/supabase/collection";
import { getSubCollectionsByCollectionId } from "@/lib/supabase/subCollection";

export default async function Page({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const { collectionId } = await params;

  // Fetch collection and sub_collections in parallel
  const [collection, sub_collections] = await Promise.all([
    getCollectionById(collectionId),
    getSubCollectionsByCollectionId(collectionId),
  ]);

  if (!collection) redirect("/not-found");

  return (
    <div className="p-6">
      <div className=" w-full flex-center p-24 pt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          {collection.name}
        </h1>
      </div>
      <div className="flex-col-center mt-12">
        <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
          {sub_collections &&
            sub_collections.map((subC) => {
              return (
                <CollectionCard
                  key={subC.id}
                  collection={subC}
                  href={`/home/${collection.id}/${subC.id}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

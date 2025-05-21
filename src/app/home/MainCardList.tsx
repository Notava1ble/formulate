import { readCollections } from "@/supabase/db/collection";
import CollectionCard from "../../components/CollectionCard";

const CardList = async ({ collectionId }: { collectionId?: string }) => {
  let collections;

  if (!collectionId) {
    collections = await readCollections();
  } else {
  }

  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
      {collections &&
        collections
          // .filter((collection) =>
          //   collection.name.toLocaleLowerCase().includes(stringQuery)
          // )
          .map((collection) => {
            return (
              <CollectionCard
                key={collection.id}
                collection={collection}
                href={`/home/${collection.id}`}
              />
            );
          })}
    </div>
  );
};
export default CardList;

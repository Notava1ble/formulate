import { readCollections } from "@/lib/supabase/collection";
import CollectionCard from "./CollectionCard";

const CardList = async () => {
  const collections = await readCollections();

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

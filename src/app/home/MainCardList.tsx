import {
  getCollectionsForUserId,
  getPremadeCollections,
} from "@/supabase/db/collection";
import CollectionCard from "../../components/CollectionCard";

const CardList = async () => {
  const [premadeCollections, userCollections] = await Promise.all([
    getPremadeCollections(),
    getCollectionsForUserId(),
  ]);

  return (
    <div className="flex-col-center mt-36">
      <h2 className="text-2xl font-poppins font-medium">Your Collections</h2>
      <div className="w-full grid grid-cols-2 gap-8 mt-8 px-4">
        {userCollections &&
          userCollections
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
      <h2 className="text-2xl font-poppins font-medium mt-16">
        Premade Collections
      </h2>
      <div className="w-full grid grid-cols-2 gap-8 mt-8 px-4">
        {premadeCollections &&
          premadeCollections
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
    </div>
  );
};
export default CardList;

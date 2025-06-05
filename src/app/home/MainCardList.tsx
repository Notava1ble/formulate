import {
  getCollectionsForUserId,
  getPremadeCollections,
} from "@/supabase/db/collection";
import CollectionCard from "../../components/CollectionCard";
import { cn } from "@/lib/utils";

const CardList = async () => {
  const [premadeCollections, userCollections] = await Promise.all([
    getPremadeCollections(),
    getCollectionsForUserId(),
  ]);

  const areThereAnyUserCollections =
    userCollections && userCollections.length > 0;

  return (
    <div className="flex-col-center mt-36">
      {areThereAnyUserCollections && (
        <>
          <h2 className="text-2xl font-poppins font-medium">
            Your Collections
          </h2>
          <div className="w-full grid grid-cols-2 gap-8 mt-8 px-4">
            {userCollections
              // .filter((collection) =>
              //   collection.name.toLocaleLowerCase().includes(stringQuery)
              // )
              .map((collection) => {
                return (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                    isPremade={false}
                    href={`/home/${collection.id}`}
                  />
                );
              })}
          </div>
        </>
      )}
      <h2
        className={cn(
          "text-2xl font-poppins font-medium",
          areThereAnyUserCollections && "mt-16"
        )}
      >
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
                  isPremade={true}
                  href={`/home/${collection.id}`}
                />
              );
            })}
      </div>
    </div>
  );
};
export default CardList;

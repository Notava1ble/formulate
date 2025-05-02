import CollectionCard from "@/components/CollectionCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { collectionData } from "@/data/collectionData";
import { userCollectionData } from "@/data/userCollectionData";
import { Plus } from "lucide-react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const stringQuery = query ? query.toLocaleLowerCase() : "";
  return (
    <>
      {/* Navbar */}
      <div className="fixed pt-6 px-4 pb-6 w-full bg-transparent backdrop-blur-lg border-b-1">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-poppins font-bold">Formulate</h1>
          <div className="flex-center gap-6">
            <Button variant="ghost">Login</Button>
            <Button>
              <Plus />
              Create
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Header Div */}
        <div className="w-full flex-center p-24 pt-32">
          <h1 className="text-6xl font-semibold font-poppins">
            Your Collections
          </h1>
        </div>

        {/* Searchbar */}
        <SearchBar query={query} />

        {/* Premade Collections */}
        <div className="flex-col-center mt-20">
          <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
            {userCollectionData
              .filter((collection) =>
                collection.name.toLocaleLowerCase().includes(stringQuery)
              )
              .map((collection) => {
                return (
                  <CollectionCard key={collection.id} collection={collection} />
                );
              })}
          </div>
        </div>

        {/* Content Page */}
        <div className="flex-col-center mt-36">
          <h2 className="text-2xl font-poppins font-medium">
            ---Look out some premade Collections---
          </h2>
          <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
            {collectionData
              .filter((collection) =>
                collection.name.toLocaleLowerCase().includes(stringQuery)
              )
              .map((collection) => {
                return (
                  <CollectionCard key={collection.id} collection={collection} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

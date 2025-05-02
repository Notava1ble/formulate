import CollectionCard from "@/components/CollectionCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { collectionData } from "@/data/collectionData";
import { Plus } from "lucide-react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const stringQuery = query ? query.toLocaleLowerCase() : "";
  return (
    <div className="p-6">
      {/* Navbar */}
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

      {/* Header Div */}
      <div className="w-full flex-center p-24">
        <h1 className="text-6xl font-semibold font-poppins">
          Your Collections
        </h1>
      </div>

      {/* Searchbar */}
      <SearchBar query={query} />

      {/* Content Page */}
      <div className="">
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
  );
};
export default Page;

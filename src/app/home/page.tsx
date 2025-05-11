import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  // const stringQuery = query ? query.toLocaleLowerCase() : "";

  return (
    <div className="p-6">
      {/* Header Div */}
      <div className="w-full flex-center p-24 pt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          Your Collections
        </h1>
      </div>

      {/* Searchbar */}
      <SearchBar query={query} />

      {/* Content Page */}
      <div className="flex-col-center mt-36">
        <h2 className="text-2xl font-poppins font-medium">
          ---Look out some premade Collections---
        </h2>
        <Suspense fallback={<Loading />}></Suspense>
      </div>
    </div>
  );
};
export default Page;

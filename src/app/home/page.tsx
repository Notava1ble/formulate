import SearchBar from "@/components/SearchBar";
import CardList from "@/app/home/MainCardList";

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
      <CardList />
    </div>
  );
};
export default Page;

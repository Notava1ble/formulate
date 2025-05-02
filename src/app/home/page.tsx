import SearchBar from "@/components/SearchBar";

const Page = () => {
  return (
    <div className="">
      {/* Header Div */}
      <div className="w-full p-24">
        <h1 className="text-6xl font-semibold font-poppins">
          Your Collections
        </h1>
      </div>
      <SearchBar />
    </div>
  );
};
export default Page;

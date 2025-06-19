import LoadingCards from "@/components/LoadingCards";
import SearchBar from "@/components/SearchBar";

const Loading = () => {
  return (
    <div className="p-6">
      <div className="w-full flex-center p-24 pt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          Your Collections
        </h1>
      </div>

      <SearchBar />

      <div className="flex-col-center mt-36">
        <LoadingCards />
      </div>
    </div>
  );
};
export default Loading;

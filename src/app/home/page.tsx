import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Page = () => {
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
      <SearchBar />
    </div>
  );
};
export default Page;

import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed pt-6 px-4 pb-6 w-full bg-black/30 backdrop-blur-lg border-b-1">
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
  );
};
export default Navbar;

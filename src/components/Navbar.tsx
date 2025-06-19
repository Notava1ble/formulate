import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 pt-6 px-4 pb-6 w-full bg-[var(--background)]/70 backdrop-blur-md border-b-1 z-100">
      <div className="w-full flex justify-between items-center">
        <Link href={`/home`} className="no-underline">
          <h1 className="text-lg font-poppins font-bold">Formulate</h1>
        </Link>
        <div className="flex-center gap-6">
          <Link href="/home/create">
            <Button>
              <Plus />
              Create
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

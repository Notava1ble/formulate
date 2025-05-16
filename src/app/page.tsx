import MainNavbar from "@/components/MainNavbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <MainNavbar />
      <div className="w-full flex-col-center mt-36">
        <h1 className="font-poppins text-7xl font-bold">
          The hub for all of your Formulas
        </h1>
        <p className="mt-16 text-xl text-neutral-400 font-roboto text-center">
          Add your own <b className="text-white">formulas</b> and search for
          what others have added. <br />
          Create cheatsheets and manage all in one place.
        </p>
        <Link href={"/home"} className="mt-20">
          <Button size="xl" className="text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

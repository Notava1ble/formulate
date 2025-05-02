import { Button } from "@/components/ui/button";
import { HouseIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex-center">
      <Link href="/home">
        <Button>
          <HouseIcon />
          Go Home
        </Button>
      </Link>
    </div>
  );
}

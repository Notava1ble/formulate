import { CollectionType } from "@/lib/supabase/collection";
import { SubCollectionType } from "@/lib/supabase/subCollection";
import Link from "next/link";

import { icons } from "lucide-react";

const CollectionCard = ({
  collection,
  href,
}: {
  collection: CollectionType | SubCollectionType;
  href: string;
}) => {
  const LucideIcon =
    icons[collection.icon as keyof typeof icons] || icons.Circle;

  return (
    <Link
      href={href}
      className="bg-zinc-800 rounded-md p-6 py-8 flex justify-start items-center gap-8 hover:scale-102 transition-all"
    >
      <div>
        <LucideIcon className="size-20" />
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">{collection.name}</h1>
      </div>
    </Link>
  );
};
export default CollectionCard;

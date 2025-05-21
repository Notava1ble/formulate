import { CollectionType } from "@/supabase/db/collection";
import { SubCollectionType } from "@/supabase/db/subCollection";
import Link from "next/link";

import Icon from "./Icon";

const CollectionCard = ({
  collection,
  href,
}: {
  collection: CollectionType | SubCollectionType;
  href: string;
}) => {
  return (
    <div className="bg-zinc-800 rounded-md hover:scale-102 transition-all">
      <Link
        href={href}
        className="p-6 py-8 flex justify-start items-center gap-8 animate-fade-in"
      >
        <div>
          <Icon iconName={collection.icon} />
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold">{collection.name}</h1>
        </div>
      </Link>
    </div>
  );
};
export default CollectionCard;

import { CollectionType } from "@/supabase/db/collection";
import { SubCollectionType } from "@/supabase/db/subCollection";
import Link from "next/link";

import Icon from "./Icon";
import CollectionCardOptions from "./CollectionCardOptions";

const CollectionCard = ({
  collection,
  parentId,
  isPremade,
  href,
}: {
  collection: CollectionType | SubCollectionType;
  parentId?: number;
  isPremade: boolean;
  href: string;
}) => {
  return (
    <div className="bg-zinc-800 rounded-md hover:scale-102 transition-all group relative">
      <Link
        href={href}
        className="p-6 py-8 flex justify-start items-center gap-8 animate-fade-in"
      >
        <div>
          <Icon iconName={collection.icon} className="size-20" />
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold">{collection.name}</h1>
        </div>
      </Link>

      {!isPremade && (
        <CollectionCardOptions collection={collection} parentId={parentId} />
      )}
    </div>
  );
};
export default CollectionCard;

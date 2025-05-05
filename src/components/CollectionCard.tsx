import Link from "next/link";
import type { CollectionType, SubCollectionType } from "../data/collectionData";

const CollectionCard = ({
  collection,
  href,
}: {
  collection: CollectionType | SubCollectionType;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="bg-zinc-800 rounded-md p-6 py-8 flex justify-start items-center gap-8 hover:scale-102 transition-all"
    >
      <div>
        <collection.icon className="size-20" />
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">{collection.name}</h1>
      </div>
    </Link>
  );
};
export default CollectionCard;

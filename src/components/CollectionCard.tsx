import type { CollectionType } from "../data/collectionData";

const CollectionCard = ({ collection }: { collection: CollectionType }) => {
  return (
    <div className="bg-zinc-800 rounded-md p-6 flex justify-start items-center gap-8 hover:scale-102 transition-all">
      <div>
        <collection.icon className="size-20" />
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">{collection.name}</h1>
        <p>{collection.subject}</p>
      </div>
    </div>
  );
};
export default CollectionCard;

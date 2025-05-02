import type { CollectionType } from "../data/collectionData";

const CollectionCard = ({ collection }: { collection: CollectionType }) => {
  return <div>{collection.name}</div>;
};
export default CollectionCard;

import Link from "next/link";
import type { CollectionType, NoteType } from "../data/collectionData";

const NoteCard = ({
  note,
  collection,
}: {
  note: NoteType;
  collection: CollectionType;
}) => {
  return (
    <Link
      href={`/home/${collection.id}/${note.id}`}
      className="bg-zinc-800 rounded-md p-6 py-8 flex justify-start items-center gap-8 hover:scale-102 transition-all"
    >
      <div>
        <collection.icon className="size-20" />
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">{note.name}</h1>
        <p>{note.content.substring(0, 50) + "..."}</p>
      </div>
    </Link>
  );
};
export default NoteCard;

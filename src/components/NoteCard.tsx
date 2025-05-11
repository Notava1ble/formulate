import { NoteType } from "@/lib/supabase/notes";
import { SubCollectionType } from "@/lib/supabase/subCollection";
import Link from "next/link";
import Icon from "./Icon";

const NoteCard = ({
  note,
  collection,
  href,
}: {
  note: NoteType;
  collection: SubCollectionType;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="bg-zinc-800 rounded-md p-6 py-8 flex justify-start items-center gap-8 hover:scale-102 transition-all"
    >
      <div>
        <Icon iconName={collection.icon} />
      </div>
      <div>
        <h1 className="text-3xl font-poppins font-bold">{note.name}</h1>
        <p>{note.theory.substring(0, 50) + "..."}</p>
      </div>
    </Link>
  );
};
export default NoteCard;

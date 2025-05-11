import { redirect } from "next/navigation";

import Link from "next/link";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import { getCollectionById } from "@/lib/supabase/collection";
import { getSubCollectionById } from "@/lib/supabase/subCollection";
import { getNoteById } from "@/lib/supabase/notes";

export default async function Page({
  params,
}: {
  params: Promise<{
    collectionId: string;
    subCollectionId: string;
    noteId: string;
  }>;
}) {
  const { collectionId, subCollectionId, noteId } = await params;

  const [collection, sub_collection, note] = await Promise.all([
    getCollectionById(collectionId),
    getSubCollectionById(subCollectionId),
    getNoteById(noteId),
  ]);

  if (!collection || !sub_collection || !note) redirect("/not-found");

  return (
    <div className="prose prose-invert prose-lg mx-auto pt-32 pb-64 overflow-y-auto">
      <h1 className="font-poppins">{note.name}</h1>
      <sub className="w-full flex items-center justify-start gap-2">
        <Link
          href={`/home/${collection.id}`}
          className="no-underline font-normal opacity-70 hover:opacity-100"
        >
          {collection.name}
        </Link>
        <ChevronRight />{" "}
        <Link
          href={`/home/${collection.id}/${sub_collection.id}`}
          className="no-underline font-normal opacity-70 hover:opacity-100"
        >
          {sub_collection.name}
        </Link>
        <ChevronRight /> <span>{note.name}</span>
      </sub>
      <h2>Theory</h2>
      <p>{note.theory}</p>
      <h2>Formulas</h2>
      <Markdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {note.sections
          .map((section) => {
            const header = section.sectionName;
            const formulas = section.formulas
              .map((formula) => `\n$$\n${formula}\n$$\n`)
              .join("");
            return `### ${header}\n${formulas}`;
          })
          .join("\n\n")}
      </Markdown>
      <h2>Symbol Definitions</h2>
      <Table className="not-prose">
        <TableBody>
          {note.symbols.map((symbol, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                <Markdown
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {`$${symbol.symbol}$`}
                </Markdown>
              </TableCell>
              <TableCell>{symbol.explanation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

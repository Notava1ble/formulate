import { redirect } from "next/navigation";

import { collectionData } from "@/data/collectionData";
import Link from "next/link";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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
  const intCollectionId = parseInt(collectionId);

  const collection = collectionData.find((col) => col.id == intCollectionId);

  if (!collection) redirect("/not-found");

  const subCollection = collection.subCollection.find(
    (subCollection) => subCollection.id == parseInt(subCollectionId)
  );

  if (!subCollection) redirect("/not-found");

  const note = subCollection.notes.find((note) => note.id == parseInt(noteId));

  if (!note) redirect("/not-found");

  return (
    <div className="prose prose-invert prose-lg mx-auto pt-32 pb-64 overflow-y-auto">
      <h1>{note.name}</h1>
      <Link href={`/home/${collection.id}`} className="no-underline">
        <sub>{collection.name}</sub>
      </Link>
      <h2>Theory</h2>
      <p>{note.theory}</p>
      <h2>Formulas</h2>
      <Markdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {note.formulas.map((formula) => `\n$$\n${formula}\n$$\n`).join("")}
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

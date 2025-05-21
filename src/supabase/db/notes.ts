import { createClient } from "../server";

export interface NoteType {
  id: number;
  sub_collection_id: number;
  name: string;
  theory: string;
  sections: Array<{
    formulas: string[];
    sectionName: string;
  }>;
  symbols: Array<{
    symbol: string;
    explanation: string;
  }>;
}

export async function getNoteById(id: string): Promise<NoteType | null> {
  const supabase = await createClient();

  const numericId = Number(id);
  if (isNaN(numericId)) {
    return null;
  }

  const { data: note, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", numericId)
    .single();
  //TODO: handle errors better
  if (error) {
    return null;
  }

  return note as NoteType;
}

export async function getNotesBySubCollectionId(
  subCollectionId: string
): Promise<NoteType[] | null> {
  const supabase = await createClient();

  const numericId = Number(subCollectionId);
  if (isNaN(numericId)) {
    return null;
  }

  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("sub_collection_id", numericId);

  // TODO: Handle Errors better
  if (error) return null;

  return notes as NoteType[];
}

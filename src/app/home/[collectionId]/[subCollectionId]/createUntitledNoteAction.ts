"use server";

import { rType } from "@/lib/actions";
import { parseServerActionResponse } from "@/lib/utils";
import { doesUserOwnThisSubCollection, getUser } from "@/supabase/db/user";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function createUntitledNoteAction(
  subCollectionId: number
): Promise<rType> {
  console.log("Creating untitled note for subCollectionId:", subCollectionId);
  const validation = z.number().int().positive().safeParse(subCollectionId);
  if (!validation.success) {
    console.log("Invalid subCollectionId:", subCollectionId);
    return parseServerActionResponse({
      error: "Invalid subCollectionId",
      status: "ERROR",
    });
  }

  const supabase = await createClient();
  const user = await getUser();
  if (!user) {
    return parseServerActionResponse({
      error: "User not authenticated",
      status: "ERROR",
    });
  }

  // Check if the sub-collection exists and belongs to the user
  const isSobCollectionOwnedByUser = await doesUserOwnThisSubCollection(
    subCollectionId
  );
  if (!isSobCollectionOwnedByUser) {
    return parseServerActionResponse({
      error: "You do not own this sub-collection",
      status: "ERROR",
    });
  }

  const { data, error } = await supabase
    .from("notes")
    .insert({
      name: "Untitled Note",
      theory: "An untitled note is a note that has not been given a name yet.",
      sections: [],
      symbols: [],
      sub_collection_id: subCollectionId,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating untitled note:", error);
    return parseServerActionResponse({
      error: "Failed to create untitled note",
      status: "ERROR",
    });
  }

  revalidatePath("/home", "layout");
  return parseServerActionResponse({
    data: data.id,
    status: "SUCCESS",
  });
}

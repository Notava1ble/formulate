"use server";

import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

interface formValuesType {
  name: string;
  collectionId: number;
  parentId?: number;
}

export interface rType {
  error: string;
  data: string;
  status: "SUCCESS" | "ERROR";
}

export const updateCollectionNameAction = async (
  formValues: formValuesType
): Promise<rType> => {
  const supabase = await createClient();

  if (formValues.parentId) {
    const { error } = await supabase
      .from("sub_collections")
      .update({ name: formValues.name })
      .eq("id", formValues.collectionId);

    if (error) {
      return { error: error.message, data: "", status: "ERROR" };
    }

    revalidatePath(`/home/${formValues.collectionId}/${formValues.parentId}`);
    return {
      error: "",
      data: "Subcollection updated successfully",
      status: "SUCCESS",
    };
  }

  const { error } = await supabase
    .from("collections")
    .update({ name: formValues.name })
    .eq("id", formValues.collectionId);

  if (error) {
    return { error: error.message, data: "", status: "ERROR" };
  }

  revalidatePath(`/home/${formValues.collectionId}`);
  return {
    error: "",
    data: "Collection updated successfully",
    status: "SUCCESS",
  };
};

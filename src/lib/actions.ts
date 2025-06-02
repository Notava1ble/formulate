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

export const deleteCollectionAction = async (
  collectionId: number,
  parentId?: number
): Promise<rType> => {
  "use server";
  const supabase = await createClient();
  if (parentId) {
    const { error } = await supabase
      .from("sub_collections")
      .delete()
      .eq("id", collectionId);

    if (error) {
      return { error: error.message, data: "", status: "ERROR" };
    }

    revalidatePath(`/home/${collectionId}`);
    return {
      error: "",
      data: "Subcollection deleted successfully",
      status: "SUCCESS",
    };
  }

  const { error } = await supabase
    .from("collections")
    .delete()
    .eq("id", collectionId);

  if (error) {
    return { error: error.message, data: "", status: "ERROR" };
  }
  revalidatePath("/home");
  revalidatePath(`/home/${collectionId}`);
  return {
    error: "",
    data: "Collection deleted successfully",
    status: "SUCCESS",
  };
};

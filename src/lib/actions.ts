"use server";

import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import {
  collectionEditSchema,
  deleteCollectionSchema,
  nameEditSchema,
} from "./validation";
import { parseServerActionResponse } from "./utils";
import { doesUserOwnThisCollection } from "@/supabase/db/user";

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

  // Validate the form values on the server for security and consistency
  const validation = nameEditSchema.safeParse(formValues);
  if (!validation.success) {
    console.error("Validation Error:", validation.error);
    return parseServerActionResponse({
      error: "Invalid data provided.",
      data: "",
      status: "ERROR",
    });
  }

  if (formValues.parentId) {
    const { error } = await supabase
      .from("sub_collections")
      .update({ name: formValues.name })
      .eq("id", formValues.collectionId);

    if (error) {
      return parseServerActionResponse({
        error: "Failed to update subcollection",
        data: "",
        status: "ERROR",
      });
    }

    revalidatePath("/home", "layout");
    return parseServerActionResponse({
      error: "",
      data: "Subcollection updated successfully",
      status: "SUCCESS",
    });
  }

  const { error } = await supabase
    .from("collections")
    .update({ name: formValues.name })
    .eq("id", formValues.collectionId);

  if (error) {
    return parseServerActionResponse({
      error: "Failed to update collection",
      data: "",
      status: "ERROR",
    });
  }

  revalidatePath("/home", "layout");
  return parseServerActionResponse({
    error: "",
    data: "Collection updated successfully",
    status: "SUCCESS",
  });
};

// Function to delete a collection or subcollection
export const deleteCollectionAction = async (
  collectionId: number,
  parentId?: number
): Promise<rType> => {
  const validation = deleteCollectionSchema.safeParse({
    collectionId,
    parentId,
  });
  if (!validation.success) {
    console.error("Validation Error:", validation.error);
    return parseServerActionResponse({
      error: "Invalid data provided.",
      data: "",
      status: "ERROR",
    });
  }

  const supabase = await createClient();
  if (parentId) {
    const { error } = await supabase
      .from("sub_collections")
      .delete()
      .eq("id", collectionId);

    if (error) {
      return parseServerActionResponse({
        error: "Failed to delete subcollection",
        data: "",
        status: "ERROR",
      });
    }

    revalidatePath("/home", "layout");
    return parseServerActionResponse({
      error: "",
      data: "Subcollection deleted successfully",
      status: "SUCCESS",
    });
  }

  const { error } = await supabase
    .from("collections")
    .delete()
    .eq("id", collectionId);

  if (error) {
    return parseServerActionResponse({
      error: "Failed to delete collection",
      data: "",
      status: "ERROR",
    });
  }

  revalidatePath("/home", "layout");
  return parseServerActionResponse({
    error: "",
    data: "Collection deleted successfully",
    status: "SUCCESS",
  });
};

export const editCollectionAction = async (
  formValues: formValuesType
): Promise<rType> => {
  const validation = collectionEditSchema.safeParse(formValues);
  if (!validation.success) {
    console.error("Validation Error:", validation.error);
    return parseServerActionResponse({
      error: "Invalid data provided.",
      data: "",
      status: "ERROR",
    });
  }

  const supabase = await createClient();

  if (formValues.parentId) {
    const hasCollection = await doesUserOwnThisCollection(formValues.parentId);
    if (!hasCollection) {
      console.error("User does not own this collection:", formValues.parentId);
      return parseServerActionResponse({
        error:
          "You do not have permission to move this subcollection to the selected parent collection.",
        data: "",
        status: "ERROR",
      });
    }
    const { error } = await supabase
      .from("sub_collections")
      .update({ name: formValues.name, collection_id: formValues.parentId })
      .eq("id", formValues.collectionId);

    if (error) {
      console.error("Error updating subcollection:", error);
      return parseServerActionResponse({
        error: "Failed to update subcollection",
        data: "",
        status: "ERROR",
      });
    }

    revalidatePath("/home", "layout");
    return parseServerActionResponse({
      error: "",
      data: "Subcollection updated successfully",
      status: "SUCCESS",
    });
  }

  const { error } = await supabase
    .from("collections")
    .update({ name: formValues.name })
    .eq("id", formValues.collectionId);

  if (error) {
    console.error("Error updating subcollection:", error);

    return parseServerActionResponse({
      error: "Failed to update collection",
      data: "",
      status: "ERROR",
    });
  }

  revalidatePath("/home", "layout");
  return parseServerActionResponse({
    error: "",
    data: "Collection updated successfully",
    status: "SUCCESS",
  });
};

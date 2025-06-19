"use server";

import { CollectionInsertType, CollectionType } from "@/supabase/db/collection";
import { createClient } from "@/supabase/server";
import {
  SubCollectionInsertType,
  SubCollectionType,
} from "@/supabase/db/subCollection";
import { parseServerActionResponse } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { formCollectionSchema } from "@/lib/validation";
import { doesUserOwnThisCollection } from "@/supabase/db/user";

interface FormValues {
  collectionId?: number | undefined;
  name: string;
  icon: string;
  subject?: string | undefined;
}

export interface rType {
  error: string;
  data: CollectionType | SubCollectionType;
  status: "SUCCESS" | "ERROR";
}

export async function createCollectionServerAction(
  formValues: FormValues
): Promise<rType> {
  // Validate the form values on the server for security and consistency
  const validation = formCollectionSchema.safeParse(formValues);
  if (!validation.success) {
    console.error("Validation Error:", validation.error);
    return parseServerActionResponse({
      error: "Invalid data provided.",
      data: "",
      status: "ERROR",
    });
  }

  // Create a Supabase client instance and get the current user
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If the parent Collection was not specified it creates a collection
  if (!formValues.collectionId) {
    const row: CollectionInsertType = {
      name: formValues.name,
      icon: formValues.icon,
      subject: formValues.subject!,
    };
    console.log(row);

    const { data, error } = await supabase
      .from("collections")
      .insert({ ...row, user_id: user?.id })
      .select()
      .single();

    if (error) {
      console.error(error);
      return parseServerActionResponse({
        error: "An unexpected error occurred",
        data: "",
        status: "ERROR",
      });
    }

    revalidatePath("/home", "layout");
    return parseServerActionResponse({
      error: "",
      data: data,
      status: "SUCCESS",
    });
  }

  // If the parent Collection was specified it creates a subcollection
  const row: SubCollectionInsertType = {
    name: formValues.name,
    icon: formValues.icon,
    collection_id: formValues.collectionId,
  };
  console.log(row);

  const hasCollection = await doesUserOwnThisCollection(row.collection_id);
  if (!hasCollection) {
    return parseServerActionResponse({
      error:
        "You do not have permission to create a subcollection in this collection",
      data: "",
      status: "ERROR",
    });
  }

  const { data, error } = await supabase
    .from("sub_collections")
    .insert(row)
    .select()
    .single();

  if (error) {
    console.error(error);
    return parseServerActionResponse({
      error: "An unexpected Error Occurred",
      data: "",
      status: "ERROR",
    });
  }
  revalidatePath("/home", "layout");

  return parseServerActionResponse({
    error: "",
    data: data,
    status: "SUCCESS",
  });
}

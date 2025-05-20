"use server";

import { CollectionType } from "@/lib/supabase/collection";
import { createClient } from "@/lib/supabase/server";
import { SubCollectionType } from "@/lib/supabase/subCollection";
import { parseServerActionResponse } from "@/lib/utils";

interface FormValues {
  collectionId?: number | undefined;
  name: string;
  icon: string;
  subject?: string | undefined;
}

export type CollectionCreateType = Omit<CollectionType, "id" | "user_id">;
export type SubCollectionCreateType = Omit<SubCollectionType, "id" | "user_id">;

export interface rType {
  error: string;
  data: CollectionType | SubCollectionType;
  status: "SUCCESS" | "ERROR";
}

export async function createCollectionServerAction(
  formValues: FormValues
): Promise<rType> {
  // If the parent Collection was not specified it creates a collection
  if (!formValues.collectionId) {
    const row: CollectionCreateType = {
      name: formValues.name,
      icon: formValues.icon,
      subject: formValues.subject!,
    };
    console.log(row);

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("collections")
      .insert({ ...row, user_id: user?.id })
      .select();

    if (error) {
      return parseServerActionResponse({
        error: error,
        data: "",
        status: "ERROR",
      });
    }

    return parseServerActionResponse({
      error: "",
      data: data[0],
      status: "SUCCESS",
    });
  }
  const row: SubCollectionCreateType = {
    name: formValues.name,
    icon: formValues.icon,
    collection_id: formValues.collectionId,
  };
  console.log(row);

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("sub_collections")
    .insert(row)
    .select();

  if (error) {
    return parseServerActionResponse({
      error: error,
      data: "",
      status: "ERROR",
    });
  }

  return parseServerActionResponse({
    error: "",
    data: data[0],
    status: "SUCCESS",
  });
}

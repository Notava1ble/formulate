"use client";

import { CollectionType } from "@/supabase/db/collection";
import { Button } from "./ui/button";
import { Check, LoaderCircle, PencilLine } from "lucide-react";
import { useActionState, useState } from "react";
import { z } from "zod";
import { updateCollectionNameAction } from "@/lib/actions";
import { SubCollectionType } from "@/supabase/db/subCollection";

interface FormErrors {
  name?: string[];
  parentId?: string[];
  collectionId?: string[];
}

const nameEditSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(32, { message: "Name must be at most 32 characters long" }),
  collectionId: z.number(),
  parentId: z.number().optional(),
});

const CollectionTitle = ({
  collection,
  parentCollection,
}: {
  collection: CollectionType | SubCollectionType;
  parentCollection?: CollectionType;
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const name = formData.get("name") as string | undefined;
      if (name == collection.name) {
        setActiveForm(false);
        return {
          ...prevState,
          error: "Name wasnt changed",
          status: "ERROR",
        };
      }

      const formValues = {
        name: name,
        collectionId: collection.id,
        parentId: parentCollection?.id,
      };

      console.log(formValues);
      const parsedFormValues = await nameEditSchema.parseAsync(formValues);
      setErrors({});

      const result = await updateCollectionNameAction(parsedFormValues);
      console.log(result);

      if (result.status === "ERROR") {
        console.log(result.error);
        const newErrors: FormErrors = {
          name: ["An Unexpected Error Occured"],
        };
        setErrors(newErrors);
      }

      setActiveForm(false);

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as FormErrors);
        console.log(fieldErorrs);

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }
      console.log(error);

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  if (activeForm) {
    return (
      <div className="w-full flex items-end justify-center p-24 pt-29">
        <form className="group flex-center relative" action={formAction}>
          <input
            className="w-min border-b-1 border-zinc-700 text-6xl font-semibold font-poppins outline-none focus:outline-none"
            defaultValue={collection.name}
            type="name"
            id="name"
            name="name"
          />
          {errors.name && (
            <p className="absolute left-0 -bottom-8 text-red-500 text-sm">
              {errors.name.join(", ")}
            </p>
          )}
          <Button
            variant="link"
            size="iconLg"
            type="submit"
            className="absolute -right-12 bottom-2 opacity-0 group-hover:opacity-100 transition-oppacity"
            disabled={isPending}
          >
            {isPending ? (
              <LoaderCircle className="size-6 animate-spin" />
            ) : (
              <Check className="size-6" />
            )}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full flex items-end justify-center p-24 pt-32">
      <div className="group flex-center relative">
        <h1 className="text-6xl font-semibold font-poppins">
          {collection.name}
        </h1>
        <Button
          variant="link"
          size="iconLg"
          className="absolute -right-12 bottom-2 opacity-0 group-hover:opacity-100 transition-oppacity"
          onClick={() => setActiveForm(true)}
        >
          <PencilLine className="size-6" />
        </Button>
      </div>
    </div>
  );
};
export default CollectionTitle;

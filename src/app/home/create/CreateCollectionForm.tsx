"use client";

import SearchedIcons, { SvgIcon } from "@/components/SearchedIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CollectionType } from "@/lib/supabase/collection";
import {
  FormCollectionFieldErrors,
  formCollectionSchema,
} from "@/lib/validation";
import { X } from "lucide-react";
import { useActionState, useState } from "react";
import { z } from "zod";
import { createCollectionServerAction } from "./action";

const CreateCollectionForm = ({
  collections,
}: {
  collections: CollectionType[] | null;
}) => {
  // TODO: Show the errors to the user
  const [errors, setErrors] = useState<FormCollectionFieldErrors>({});
  const [parentCollection, setParentCollection] = useState<
    CollectionType | undefined
  >(undefined);
  const [iconSearch, setIconSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<
    { selectedIconName: string; svgString: string } | undefined
  >(undefined);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const subject = formData.get("subject") as string | undefined;
      const formValues = {
        collectionId: parentCollection?.id,
        name: formData.get("name") as string,
        icon: selectedIcon?.selectedIconName,
        subject: subject ? subject : undefined,
      };

      console.log(formValues);
      const parsedFormValues = await formCollectionSchema.parseAsync(
        formValues
      );
      setErrors({});

      // TODO: write the entry in the database.
      const result = await createCollectionServerAction(parsedFormValues);
      console.log(result);

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as FormCollectionFieldErrors);
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

  return (
    <form action={formAction} className="mt-20 px-16">
      <div className="w-full flex gap-2">
        <div className="flex-1">
          <div className="flex flex-col justify-center items-start gap-2 w-full max-w-md">
            <Label htmlFor="parentCollection">Parent Collection</Label>
            <div className="flex-center gap-2 w-full">
              <Select
                value={parentCollection?.name || ""}
                onValueChange={(value) => {
                  setParentCollection(
                    collections?.find((collection) => value == collection.name)
                  );
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select a Parent Collection"
                    id="parentCollection"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Collections</SelectLabel>
                    {collections &&
                      collections.map((collection) => (
                        <SelectItem value={collection.name} key={collection.id}>
                          {collection.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="email"
                value={parentCollection?.name || ""}
              />

              {parentCollection ? (
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setParentCollection(undefined)}
                >
                  <X />
                </Button>
              ) : (
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-auto disabled:hover:cursor-not-allowed"
                  disabled
                >
                  <X />
                </Button>
              )}
            </div>
            <p className="invisible">{"\u00A0"}</p>
          </div>
          <div className="mt-6 grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="name">Collection Name</Label>
            <Input
              type="name"
              id="name"
              name="name"
              placeholder="Collection Name"
              className={`${errors.name ? "border-red-500" : ""}`}
            />
            <p
              className={`text-[12px] min-h-[18px] ${
                errors.name ? "text-red-500 visible" : "invisible"
              }`}
            >
              {errors.name ? errors.name[0] : "\u00A0"}
            </p>
          </div>
          <div className="mt-6 grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="subject">Collection Subject</Label>
            <Input
              type="subject"
              id="subject"
              name="subject"
              placeholder="Collection Subject"
              className={`${errors.subject ? "border-red-500" : ""}`}
            />
            <p
              className={`text-[12px] min-h-[18px] ${
                errors.subject ? "text-red-500 visible" : "invisible"
              }`}
            >
              {errors.subject ? errors.subject[0] : "\u00A0"}
            </p>
          </div>
        </div>
        <div className="flex-1">
          {selectedIcon ? (
            <div className="flex-col flex gap-2 justify-center h-full">
              <div className="border-1 rounded-sm p-6 flex-center">
                <SvgIcon svgString={selectedIcon.svgString} size={128} />
              </div>
              <Button
                onClick={() => {
                  setSelectedIcon(undefined);
                  setIconSearch("");
                }}
                variant="secondary"
              >
                <X /> Clear
              </Button>
            </div>
          ) : (
            <>
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="icon">Collection Icon</Label>
                <Input
                  type="icon"
                  id="icon"
                  placeholder="Icon Name"
                  value={iconSearch}
                  className={`${errors.icon ? "border-red-500" : ""}`}
                  onChange={(e) => setIconSearch(e.target.value)}
                />
              </div>
              <SearchedIcons
                iconSearch={iconSearch}
                errors={errors}
                handleClick={(selectedIconName: string, svgString: string) => {
                  setIconSearch(selectedIconName);
                  setSelectedIcon({ selectedIconName, svgString });
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-end items-center mt-6">
        {isPending ? (
          <Button type="button" disabled size="lg" className="text-lg ">
            Loading...
          </Button>
        ) : (
          <Button type="submit" size="lg" className="text-lg ">
            Create
          </Button>
        )}
      </div>
    </form>
  );
};

export default CreateCollectionForm;

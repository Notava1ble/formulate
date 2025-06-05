"use client";

import { CollectionType } from "@/supabase/db/collection";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";

const ParentCollectionSelector = ({
  parentCollection,
  setParentCollection,
  collections,
}: {
  parentCollection: CollectionType | undefined;
  setParentCollection: Dispatch<SetStateAction<CollectionType | undefined>>;
  collections: CollectionType[] | null;
}) => {
  return (
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
          <SelectContent className="max-h-60 overflow-y-auto">
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
  );
};
export default ParentCollectionSelector;

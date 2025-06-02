"use client";

import { Edit, MoreVertical, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useActionState, useState } from "react";
import { cn } from "@/lib/utils";
import { deleteCollectionAction } from "@/lib/actions";

const CollectionCardOptions = ({
  collectionId,
  parentId,
}: {
  collectionId: number;
  parentId?: number;
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevState: { error: string; status: string },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formData: FormData
  ) => {
    console.log(collectionId, parentId);

    const response = await deleteCollectionAction(collectionId, parentId);

    console.log(response);

    return {
      error: response.error,
      status: response.status,
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleDelete, {
    error: "",
    status: "INITIAL",
  });

  return (
    <div
      className={cn(
        "absolute top-4 right-2 transition-opacity group-hover:opacity-100",
        "opacity-0",
        open && "opacity-100"
      )}
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Edit />
            Edit
          </DropdownMenuItem>
          <form action={formAction}>
            <DropdownMenuItem
              variant="destructive"
              disabled={isPending}
              asChild
            >
              <button
                type="submit"
                className="w-full h-full flex items-center"
                disabled={isPending}
              >
                <Trash className="mr-2 h-4 w-4" />
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default CollectionCardOptions;

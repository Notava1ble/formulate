"use client";

import { Edit, MoreVertical, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useActionState, useState } from "react";
import { cn } from "@/lib/utils";
import { deleteCollectionAction } from "@/lib/actions";
import { Button } from "./ui/button";

// TODO: Add a dialog for confirming delete
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
      <AlertDialog>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Edit />
              Edit
            </DropdownMenuItem>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem variant="destructive" disabled={isPending}>
                <Trash />
                Delete
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              collection and allof its children
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={formAction}>
              <AlertDialogAction disabled={isPending} asChild>
                <Button
                  type="submit"
                  disabled={isPending}
                  variant="destructive"
                  className="text-white"
                >
                  <Trash />
                  {isPending ? "Deleting..." : "Delete"}
                </Button>
              </AlertDialogAction>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
export default CollectionCardOptions;

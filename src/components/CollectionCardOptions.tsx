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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useActionState, useEffect, useState } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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

  const [state, formAction, isPending] = useActionState(handleDelete, {
    error: "",
    status: "INITIAL",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (!isPending && state.status === "SUCCESS") {
      timer = setTimeout(() => {
        console.log("Timeout finished: Closing dialog.");
        setIsDeleteDialogOpen(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isPending, state.status]);

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
          <DropdownMenuItem
            variant="destructive"
            disabled={isPending}
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DELETE DIALOG */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={(open) => {
          if (!isPending) {
            setIsDeleteDialogOpen(open);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {state.status === "ERROR" && state.error
                ? `Error: ${state.error}`
                : state.status === "INITIAL" || isPending
                ? `This action cannot be undone. This will permanently delete this
              collection and all of its children.`
                : state.status === "SUCCESS"
                ? "Collection deleted successfully!"
                : "Preparing to delete..."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={formAction}>
              <Button
                type="submit"
                disabled={isPending}
                variant="destructive"
                className="text-white"
              >
                <Trash />
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* EDIT DIALOG */}
    </div>
  );
};
export default CollectionCardOptions;

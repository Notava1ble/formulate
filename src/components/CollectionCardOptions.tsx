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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useActionState, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { deleteCollectionAction } from "@/lib/actions";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SubCollectionType } from "@/supabase/db/subCollection";
import { CollectionType } from "@/supabase/db/collection";
import ParentCollectionSelector from "./ParentCollectionSelector";

// TODO: Add a dialog for confirming delete
const CollectionCardOptions = ({
  collection,
  parentId,
  allUserCollections,
}: {
  collection: CollectionType | SubCollectionType;
  parentId?: number;
  allUserCollections: CollectionType[] | null;
}) => {
  const [open, setOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [parentCollection, setParentCollection] = useState<
    CollectionType | undefined
  >(undefined);

  const handleDelete = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevState: { error: string; status: string },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formData: FormData
  ) => {
    console.log(collection.id, parentId);

    const response = await deleteCollectionAction(collection.id, parentId);

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
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => setIsEditDialogOpen(true)}
          >
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
      <Dialog
        open={isEditDialogOpen}
        onOpenChange={(open) => {
          if (!isPending) {
            setIsEditDialogOpen(open);
          }
        }}
      >
        <form>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit</DialogTitle>
              <DialogDescription>
                Edit Collection ({collection.name})
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <ParentCollectionSelector
                collections={allUserCollections}
                parentCollection={parentCollection}
                setParentCollection={setParentCollection}
              />
              <div className="w-full flex flex-col items-start justify-center gap-2 max-w-md">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="name"
                  id="name"
                  name="name"
                  defaultValue={collection.name}
                />
              </div>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
export default CollectionCardOptions;

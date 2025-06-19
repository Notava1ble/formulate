"use client";

import { Edit, Edit2, MoreVertical, Trash } from "lucide-react";
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
import { useActionState, useState } from "react";
import { cn } from "@/lib/utils";
import { deleteCollectionAction, editCollectionAction } from "@/lib/actions";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SubCollectionType } from "@/supabase/db/subCollection";
import { CollectionType } from "@/supabase/db/collection";
import ParentCollectionSelector from "./ParentCollectionSelector";
import { useSessionData } from "@/providers/session-data-provider";
import z from "zod";
import {
  collectionEditSchema,
  FormCollectionEditErrors,
} from "@/lib/validation";

// TODO: Add a dialog for confirming delete
const CollectionCardOptions = ({
  collection,
  parentId,
}: {
  collection: CollectionType | SubCollectionType;
  parentId?: number;
}) => {
  const [errors, setErrors] = useState<FormCollectionEditErrors>({});

  const [open, setOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { collections } = useSessionData();

  const [parentCollection, setParentCollection] = useState<
    CollectionType | undefined
  >(collections.find((collection) => collection.id === parentId) || undefined);

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

  const handleEdit = async (
    prevState: { error: string; status: string },
    formData: FormData
  ) => {
    try {
      const requestValues = {
        name: formData.get("name") as string,
        parentId: parentCollection?.id || undefined,
        collectionId: collection.id,
      };

      const validation = await collectionEditSchema.parseAsync(requestValues);

      // TODO: Make the request if the new values are different than the current ones
      const response = await editCollectionAction(validation);

      console.log(response);

      if (response.status === "SUCCESS") {
        setIsEditDialogOpen(false);
        setOpen(false);
      }

      return {
        error: response.error,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as FormCollectionEditErrors);
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

  const [deleteState, deleteAction, isDeletePending] = useActionState(
    handleDelete,
    {
      error: "",
      status: "INITIAL",
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editState, editAction, isEditPending] = useActionState(handleEdit, {
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
          <DropdownMenuItem
            disabled={isDeletePending}
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Edit />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            disabled={isDeletePending}
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
          if (!isDeletePending) {
            setIsDeleteDialogOpen(open);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteState.status === "ERROR" && deleteState.error
                ? `Error: ${deleteState.error}`
                : deleteState.status === "INITIAL" || isDeletePending
                ? `This action cannot be undone. This will permanently delete this
              collection and all of its children.`
                : deleteState.status === "SUCCESS"
                ? "Collection deleted successfully!"
                : "Preparing to delete..."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={deleteAction}>
              <Button
                type="submit"
                disabled={isDeletePending}
                variant="destructive"
                className="text-white"
              >
                <Trash />
                {isDeletePending ? "Deleting..." : "Delete"}
              </Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* EDIT DIALOG */}
      <Dialog
        open={isEditDialogOpen}
        onOpenChange={(open) => {
          if (!isEditPending) {
            setIsEditDialogOpen(open);
          }
        }}
      >
        <DialogContent>
          <form action={editAction}>
            <DialogHeader>
              <DialogTitle>Edit</DialogTitle>
              <DialogDescription>
                Edit Collection ({collection.name})
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {parentId && (
                <ParentCollectionSelector
                  parentCollection={parentCollection}
                  setParentCollection={setParentCollection}
                />
              )}
              <div className="w-full flex flex-col items-start justify-center gap-2 max-w-md">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="name"
                  id="name"
                  name="name"
                  defaultValue={collection.name}
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
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isEditPending} variant="default">
                <Edit2 />
                {isEditPending ? "Editing..." : "Edit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CollectionCardOptions;

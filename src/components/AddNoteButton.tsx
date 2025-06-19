"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createUntitledNoteAction } from "@/app/home/[collectionId]/[subCollectionId]/createUntitledNoteAction";
import { useRouter } from "next/navigation";

export const createNoteHandler = async (
  collectionId: number,
  subCollectionId: number,
  router: AppRouterInstance
) => {
  const response = await createUntitledNoteAction(subCollectionId);
  if (response.status === "SUCCESS") {
    router.push(`/home/${collectionId}/${subCollectionId}/${response.data}`);
  } else {
    console.error("Failed to create note:", response.error);
  }
};

const AddNoteButton = ({
  className,
  variant,
  size,
  collectionId,
  subCollectionId,
  ...props
}: React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    collectionId: number;
    subCollectionId: number;
  }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      {...props}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await createNoteHandler(collectionId, subCollectionId, router);
        });
      }}
    >
      <Plus /> {isPending ? "Creating..." : "Add a Note"}
    </Button>
  );
};
export default AddNoteButton;

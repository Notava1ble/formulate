import { z } from "zod";

/**
 * Schema for a collection or sub-collection form
 */

export interface FormCollectionFieldErrors {
  collectionId?: string[];
  name?: string[];
  icon?: string[];
  subject?: string[];
}
export const formCollectionSchema = z
  .object({
    collectionId: z.number().int().positive().optional(),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" })
      .max(32, { message: "Name must be at most 32 characters long" }),
    icon: z
      .string({ required_error: "An Icon is required" })
      .nonempty({ message: "An Icon is required" }),
    subject: z
      .string()
      .min(3, { message: "Subject must be at least 3 characters long" })
      .max(16, { message: "Subject must be at most 16 characters long" })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.collectionId === undefined) {
        return !!data.subject;
      }
      return true;
    },
    {
      message: "Subject is required when a parent collection is not provided",
      path: ["subject"],
    }
  );

export interface FormCollectionNameEditErrors {
  name?: string[];
  parentId?: string[];
  collectionId?: string[];
}

export const nameEditSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(32, { message: "Name must be at most 32 characters long" }),
  collectionId: z.number().int().positive(),
  parentId: z.number().int().positive().optional(),
});

export const deleteCollectionSchema = z.object({
  collectionId: z.number().int().positive(),
  parentId: z.number().int().positive().optional(),
});

export interface FormCollectionEditErrors {
  name?: string[];
  newParentId?: string[];
  collectionId?: string[];
}

export const collectionEditSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(32, { message: "Name must be at most 32 characters long" }),
  parentId: z.number().int().positive().optional(),
  collectionId: z.number().int().positive(),
});

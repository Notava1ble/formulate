import { z } from "zod";

/**
 * Schema for a collection or sub-collection form
 */
export const formCollectionSchema = z.object({
  collectionId: z.number().optional(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(32, { message: "Name must be at most 32 characters long" }),
  icon: z.string().min(1, { message: "Icon key is required" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" })
    .max(16, { message: "Subject must be at most 16 characters long" })
    .optional(),
});

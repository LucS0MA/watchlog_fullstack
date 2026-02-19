import * as z from "zod";

// Schema review

export const ReviewInputSchema = z.object({
  comment: z
    .string()
    .min(1)
    .max(2000),

  movie_id: z.number().int().positive(),

  rating: z
    .number()
    .min(0)
    .max(5),

  user_id: z.number().int().positive(),
});

export type ReviewInput = z.infer<typeof ReviewInputSchema>;
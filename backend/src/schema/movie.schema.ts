import * as z from "zod";

// Schema pour input movie

export const MovieInputSchema = z.object({
  casting: z.string().min(1).max(500),

  director: z.string().min(1).max(120),

  posterurl: z
    .string()
    .url("URL poster invalide"),

  synopsis: z.string().min(10).max(2000),

  title: z.string().min(1).max(200),

  year: z
    .number()
    .int()
    .min(1888) // premier film
    .max(new Date().getFullYear() + 2),
});

export type MovieInput = z.infer<typeof MovieInputSchema>;

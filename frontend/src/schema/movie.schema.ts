import * as z from "zod";

// Schema movie

export const MovieInputSchema = z.object({
  casting: z.string().min(1).max(500),

  director: z.string().min(1).max(120),

  posterurl: z
    .string()
    .url("invalid poster URL"),

  synopsis: z.string().min(10).max(2000),

  title: z.string().min(1).max(200),

  year: z
    .number()
    .int()
    .min(1888) 
    .max(new Date().getFullYear() + 2),
});

export type MovieInput = z.infer<typeof MovieInputSchema>;

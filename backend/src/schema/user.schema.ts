import * as z from "zod";

// Schema pour input utilisateur

export const UserInputSchema = z.object({
  email: z
    .string()
    .email("Email invalide")
    .max(255),

  password_hash: z
    .string()
    .min(8, "Mot de passe trop court")
    .max(100),

  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/, "Username invalide"),
});

export type UserInput = z.infer<typeof UserInputSchema>;
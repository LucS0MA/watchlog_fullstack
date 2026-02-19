import * as z from "zod";

// Schema user

export const UserInputSchema = z.object({
  email: z.string().email("Invalid email").max(255),

  password_hash: z
    .string()
    .min(8, "Password too short")
    .max(100)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "The password must contain atleast one uppercase character, one number and one special character",
    ),

  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/, "Invalid username "),
});

export type UserInput = z.infer<typeof UserInputSchema>;

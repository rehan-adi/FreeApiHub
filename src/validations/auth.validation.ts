import { z } from "zod";

export const signupValidation = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(15, { message: "Username must be less than 15 characters" })
    .trim(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/.+/, { message: "Password cannot be empty" }),
});
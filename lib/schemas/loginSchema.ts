import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters" }).max(10, { message: "Password must be at most 10 characters" }),
});

export type loginInput = z.infer< typeof loginSchema >
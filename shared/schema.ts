import { z } from "zod";

export const passwordSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

export type PasswordInput = z.infer<typeof passwordSchema>;

export const responseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export type PasswordResponse = z.infer<typeof responseSchema>;

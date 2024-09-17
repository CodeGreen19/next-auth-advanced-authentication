import { Role } from "@prisma/client";
import * as z from "zod";

export const ProfileSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([Role.ADMIN, Role.USER]),
  email: z.optional(z.string().email()),
});

export const ResetSchema = z.object({
  newPass: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  confirmPass: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
});
export const ForgotSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(5, { message: "password must be at least 5 char" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type ForgotSchemaType = z.infer<typeof ForgotSchema>;
export type ResetSchemaType = z.infer<typeof ResetSchema>;
export type ProfileSchemaType = z.infer<typeof ProfileSchema>;

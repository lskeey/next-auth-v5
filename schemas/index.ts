import { UserRole } from "@prisma/client"
import { z } from "zod"

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  otp: z.optional(z.string())
})

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
  .min(8, { message: 'Must have at least 8 character' })
  .regex(passwordValidation, {
    message: 'Your password is not valid',
  }),
})

export const ResetSchema = z.object({
  email: z.string().email(),
})

export const NewPasswordSchema = z.object({
  password: z.string(),
})

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string()),
  newPassword: z.optional(z.string())
}).refine((data) => {
  if (data.password && !data.newPassword){
    return false
  }
  return true
}, {
  message: "New password is required!",
  path: ["newPassword"]
}).refine((data) => {
  if (!data.password && data.newPassword){
    return false
  }
  return true
}, {
  message: "Password is required!",
  path: ["password"]
})
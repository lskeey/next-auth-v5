import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
})

export const ResetSchema = z.object({
  email: z.string().email(),
})
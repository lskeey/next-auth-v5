'use server'

import { prisma as db } from "@/lib/db"
import { z } from "zod"
import { RegisterSchema } from "@/schemas"
import bcrypt from "bcrypt"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: "Invalid fields!"}

  const { name, email, password } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  })

  if (existingUser) return { error: "Email already in use!" }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: Send verification token email

  return { success: "User created!"}
}
'use server'

import { db } from "@/lib/db"
import { z } from "zod"
import { RegisterSchema } from "@/schemas"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/data/user"
import { generateVerificationToken } from "@/data/tokens"
import { sendVerificationEmail } from "@/lib/mail"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: "Invalid fields!"}

  const { name, email, password } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) return { error: "Email already in use!" }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  )

  return { success: "Confirmation email sent!!"}
}
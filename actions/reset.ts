"use server"

import { generateResetPasswordToken } from "@/data/tokens"
import { getUserByEmail } from "@/data/user"
import { sendResetPasswordEmail } from "@/lib/mail"
import { ResetSchema } from "@/schemas"
import { z } from "zod"

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values)

  if (!validateFields.success) return { error: "Invalid fields!"}

  const { email } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) return { error: "Email not found!" }

  const resetPasswordToken = await generateResetPasswordToken(email)

  await sendResetPasswordEmail(
    resetPasswordToken.email,
    resetPasswordToken.token
  )  

  return { success: "Reset email sent!"}
}
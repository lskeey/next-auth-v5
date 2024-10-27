"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSearchParams  } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useTransition } from "react"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import CardWrapper from "./card-wrapper"
import { NewPasswordSchema } from "@/schemas"
import { newPassword } from "@/actions/new-password"

const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: ""
    },
  })

  function onSubmit(data: z.infer<typeof NewPasswordSchema>) {
    setError("")
    setSuccess("")

    startTransition(() => {
      newPassword(data, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <CardWrapper
      headerLabel="Enter a new password"
      switchButtonLabel="Back to login"
      switchButtonHref="/auth/login">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>Reset password</Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default NewPasswordForm
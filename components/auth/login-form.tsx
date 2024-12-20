"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LoginSchema } from "@/schemas"
import { login } from "@/actions/login"
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
import Link from "next/link"
import CardWrapper from "./card-wrapper"

import { OtpStyledInput } from "@/components/ui/extension/otp-input"

const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : ""

  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      otp: ""
    },
  })

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    setError("")
    setSuccess("")

    startTransition(() => {
      login(data).then((data) => {
        if (data?.error) {
          form.reset()
          setError(data.error)
        }

        if (data?.success) {
          form.reset()
          setSuccess(data?.success)
        }

        if (data?.twoFactor) {
          setShowTwoFactor(true)
        }
      })
      .catch(() => setError("Something went wrong!"))
    })
  }

  return (
    <>
      {!showTwoFactor && (
      <CardWrapper
        headerLabel="Login"
        switchButtonLabel="Don't have an account?"
        switchButtonHref="/auth/register"
        showSocial>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Link href="/auth/reset" className="block text-sm hover:underline">Forgot password?</Link>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign in
            </Button>
          </form>
        </Form>
      </CardWrapper>
      )}
      {showTwoFactor && (
        <div className="max-w-md h-fit flex items-center justify-center outline outline-1 outline-muted rounded-md p-4 bg-background shadow-lg">
          <div className="w-full space-x-2 space-y-6">
            <div className="space-y-1">
              <h2 className="font-semibold">OTP verification</h2>
              <p className="text-xs">
                Enter the 6-digit code sent to your email address or phone number
              </p>
            </div>
            <Form {...form}>
              <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormControl>
                      <>
                        <FormItem>
                          <OtpStyledInput
                            numInputs={6}
                            inputType="text"
                            {...field}
                            disabled={isPending}
                          />
                        </FormItem>
                        <FormMessage />
                      </>
                    </FormControl>
                  )}
                />
                <Button type="submit" disabled={isPending}>Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginForm

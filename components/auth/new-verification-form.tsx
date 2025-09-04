"use client"

import { useSearchParams } from "next/navigation"
import CardWrapper from "./card-wrapper"
import { ScaleLoader } from "react-spinners"
import { useCallback, useEffect, useRef, useState } from "react"
import { newVerification } from "@/actions/new-verification"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const hasCalledRef = useRef(false);

  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const onSubmit = useCallback(() => {
    if (!token || hasCalledRef.current) {
      return;
    }
    hasCalledRef.current = true;
    newVerification(token)
    .then((data) => {
      setSuccess(data.success)
      setError(data.error)
    })
    .catch(() => {
      setError("Something went wrong!")
    })
  }, [token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])
  

  return (
    <CardWrapper
      headerLabel="Confirmation your verification"
      switchButtonLabel="Back to login"
      switchButtonHref="/auth/login"
    >
      <div className="flex justify-center items-center">
        {!success && !error && (
          <ScaleLoader />
        )}
        <FormSuccess message={success} />
        {!success && (
          <FormError message={error} />
        )}
      </div>
    </CardWrapper>
  )
}

export default NewVerificationForm
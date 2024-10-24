import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
  message?: string
}

export const FormSuccess = ({
  message,
}: FormSuccessProps) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 px-2 py-3 bg-emerald-100 border border-emerald-500 rounded-sm text-sm text-emerald-500">
      <CheckCircledIcon />
      {message}
    </div>
  )
}
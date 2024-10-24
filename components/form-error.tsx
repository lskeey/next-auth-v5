import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
  message?: string
}

export const FormError = ({
  message,
}: FormErrorProps) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 px-2 py-3 bg-destructive/10 border border-destructive rounded-sm text-sm text-destructive">
      <ExclamationTriangleIcon />
      {message}
    </div>
  )
}
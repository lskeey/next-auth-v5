import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Social from "./social"

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  switchButtonLabel: string
  switchButtonHref: string
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  switchButtonLabel,
  switchButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className="min-w-80">
      <CardHeader>
        <CardTitle className="text-xl text-center">{headerLabel}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex-col space-y-6">
        {showSocial && (
          <Social />
        )}
        <a href={switchButtonHref} className="text-sm hover:underline">{switchButtonLabel}</a>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
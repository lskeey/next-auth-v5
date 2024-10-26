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
        <div className="w-full flex items-center gap-2">
          <div className="flex-1 border"></div>
            <span className="text-xs">or sign in with</span>
          <div className="flex-1 border"></div>
        </div>
        {showSocial && (
          <Social />
        )}
        <a href={switchButtonHref} className="text-sm hover:underline">{switchButtonLabel}</a>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
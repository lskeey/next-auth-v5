import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from "./LoginForm"
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"
import { IoLogoGithub } from "react-icons/io"

const LoginCard = () => {
  return (
    <Card className="min-w-80">
      <CardHeader>
        <CardTitle className="text-xl text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex-col space-y-6">
        <div className="w-full flex gap-2">
          <Button variant={"outline"} className="flex-1">
            <FcGoogle />
          </Button>
          <Button variant={"outline"} className="flex-1">
            <IoLogoGithub />
          </Button>
        </div>
        <a href="#" className="text-sm hover:underline">Don&apos;t have an account?</a>
      </CardFooter>
    </Card>
  )
}

export default LoginCard
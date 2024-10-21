import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { IoLogoGithub } from "react-icons/io"

const Social = () => {
  return (
    <div className="w-full flex gap-2">
      <Button variant={"outline"} className="flex-1">
        <FcGoogle />
      </Button>
      <Button variant={"outline"} className="flex-1">
        <IoLogoGithub />
      </Button>
    </div>
  )
}

export default Social
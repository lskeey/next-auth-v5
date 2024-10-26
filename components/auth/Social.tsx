"use client"

import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { IoLogoGithub } from "react-icons/io"
import { handleOAuth } from "@/actions/login"

const Social = () => {
  return (
    <div className="w-full flex gap-2">
      <Button variant={"outline"} className="flex-1" onClick={() => handleOAuth("google")}>
        <FcGoogle />
      </Button>
      <Button variant={"outline"} className="flex-1" onClick={() => handleOAuth("github")}>
        <IoLogoGithub />
      </Button>
    </div>
  )
}

export default Social
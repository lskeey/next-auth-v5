"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user"
import { ExitIcon } from "@radix-ui/react-icons";
import { logout } from "@/actions/logout";

const UserButton = () => {
  const user = useCurrentUser()

  const onClick = () => {
    logout()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild >
        <Avatar className="w-7 h-7">
          <AvatarImage src={user?.image || ""} alt={`${user?.name} profile picture` || ""} />
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem onClick={onClick} className="cursor-pointer">
          <ExitIcon /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
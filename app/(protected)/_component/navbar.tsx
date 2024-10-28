"use client"

import UserButton from "@/components/auth/user-button";
import Link from "next/link";
import { BsShieldLockFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  return (
    <nav className="px-2 py-4 shadow-md mb-8">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <div className="flex items-center font-extrabold text-xl gap-1 cursor-pointer select-none">
          <BsShieldLockFill /> auth
        </div>
        <div className="space-x-4 text-sm">
          <Link href="/server" className={`hover:border-b-2 ${pathName === "/server" ? "border-b-2" : ""}`}>Server</Link>
          <Link href="/client" className={`hover:border-b-2 ${pathName === "/client" ? "border-b-2" : ""}`}>Client</Link>
          <Link href="/admin" className={`hover:border-b-2 ${pathName === "/admin" ? "border-b-2" : ""}`}>Admin</Link>
          <Link href="/settings" className={`hover:border-b-2 ${pathName === "/settings" ? "border-b-2" : ""}`}>Settings</Link>
        </div>
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar
"use client"

import { admin } from "@/actions/admin"
import RoleGate from "@/components/auth/role-gate"
import { Button } from "@/components/ui/button"
import { UserRole } from "@prisma/client"
import { toast } from "sonner"

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then(response => {
      if (response.ok) {
        return toast.success("Allowed API Route!")
      }

      return toast.error("Forbidden API Route!")
    })
  }

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        return toast.error(data.error)
      }
      return toast.success(data.success)
    })
  }

  return (
    <div className="text-sm space-y-6 shadow-md px-4 py-6 rounded-md border border-[#161b22]">
      <RoleGate allowedRole={UserRole.ADMIN}>
        <h1>Admin Page</h1>
      </RoleGate>
      <div className="flex items-center justify-between">
        <span>Admin-only API Route</span>
        <Button variant={"secondary"} size={"sm"} onClick={onApiRouteClick}>Click to test</Button>
      </div>
      <div className="flex items-center justify-between">
        <span>Admin-only Server Action</span>
        <Button variant={"secondary"} size={"sm"} onClick={onServerActionClick}>Click to test</Button>
      </div>
    </div>
  )
}

export default AdminPage
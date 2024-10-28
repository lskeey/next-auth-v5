import { ExtendedUser } from '@/types'
import React from 'react'
import { Badge } from './ui/badge'

interface UserInfoProps {
  user?: ExtendedUser,
  label: string
}

const UserInfo = ({user, label}: UserInfoProps) => {
  return (
    <div className="text-sm space-y-6 shadow-md px-4 py-6 rounded-md border border-[#161b22]">
      <h3 className="text-md">{label}</h3>
      <div className="flex justify-between">
        <span>ID</span>
        <span>{user?.id}</span>
      </div>
      <div className="flex justify-between">
        <span>Name</span>
        <span>{user?.name}</span>
      </div>
      <div className="flex justify-between">
        <span>Email</span>
        <span>{user?.email}</span>
      </div>
      <div className="flex justify-between">
        <span>Role</span>
        <span>{user?.role}</span>
      </div>
      <div className="flex justify-between">
        <span>Two Factor Authentication</span>
        <Badge variant={"secondary"}>{user?.isTwoFactorEnabled ? "ON" : "OFF"}</Badge>
      </div>
    </div>
  )
}

export default UserInfo
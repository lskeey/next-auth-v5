import { ExtendedUser } from '@/types'
import React from 'react'
import { Badge } from './ui/badge'

interface UserInfoProps {
  user?: ExtendedUser,
  label: string
}

const UserInfo = ({user, label}: UserInfoProps) => {
  return (
    <div className="text-sm space-y-6 shadow-md px-4 py-6 rounded-md">
      <Badge variant={"secondary"} className="text-md">{label}</Badge>
      <div className="flex justify-between">
        <span className='font-bold'>ID</span>
        <span>{user?.id}</span>
      </div>
      <div className="flex justify-between">
        <span className='font-bold'>Name</span>
        <span>{user?.name}</span>
      </div>
      <div className="flex justify-between">
        <span className='font-bold'>Email</span>
        <span>{user?.email}</span>
      </div>
      <div className="flex justify-between">
        <span className='font-bold'>Role</span>
        <span>{user?.role}</span>
      </div>
      <div className="flex justify-between">
        <span className='font-bold'>Two Factor Authentication</span>
        <Badge>{user?.isTwoFactorEnabled ? "ON" : "OFF"}</Badge>
      </div>
    </div>
  )
}

export default UserInfo
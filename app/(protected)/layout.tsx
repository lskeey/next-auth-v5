import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import Navbar from "./_component/navbar"

export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div>
        <Navbar />
        <div className="container mx-auto max-w-xl">
          {children}
        </div>
      </div>
    </SessionProvider>
  )
}
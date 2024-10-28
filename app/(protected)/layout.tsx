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
      <div className="min-h-screen bg-[#0d1117] text-[#ecf2f8]">
        <Navbar />
        <div className="container mx-auto max-w-xl">
          {children}
        </div>
      </div>
    </SessionProvider>
  )
}
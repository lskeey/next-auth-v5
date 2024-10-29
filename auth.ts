import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserById } from "./data/user"
import { UserRole } from "@prisma/client"
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation"
import { getAccountById } from "./data/account"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login"
  },
  events: {
    async linkAccount({ user }) {
      if (user) {
        await db.user.update({
          where: { id: user.id as string },
          data: { emailVerified: new Date()}
        })  
      }
    }
  },
  callbacks: {
    async signIn({ user, account}) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true

      if (account?.provider === "credentials" && user.id) {
        // Prevent sign in without email verification
        const existingUser = await getUserById(user.id)
  
        if (!existingUser?.emailVerified) return false

        if (existingUser.isTwoFactorEnabled) {
          const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

          if (!twoFactorConfirmation) return false
          
          await db.twoFactorConfirmation.delete({
            where: { id: twoFactorConfirmation.id }
          })
        }

        return true
      }


      return true
    },
    async session({ token, session}) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      }
      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.role = token.role as UserRole
        session.user.isOAuth = token.isOAuth as boolean
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token
      
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
    
      const existingAccount = await getAccountById(existingUser.id)

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    }
  }
})
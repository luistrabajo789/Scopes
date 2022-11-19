import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const secret = process.env.NEXTAUTH_SECRET
const url = process.env.NEXTAUTH_UR



export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET!
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import db from "utils/db";
import users from "models/User";

const secret = process.env.NEXTAUTH_SECRET
const url = process.env.NEXTAUTH_UR

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await users.findOne({
          email: credentials?.email!,
        });  
 
        await db.disconnect();

        if (user && bcryptjs.compareSync(credentials?.password!, user.password)) {
          return {
            _id:user._id,
            name: user.name,
            email:user.email
          };
        }
        throw new Error('Invalid email or password');
      },

    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import db from "utils/db";
import Usuarios from "models/Usuarios";
 

const secret = process.env.NEXTAUTH_SECRET;
const url = process.env.NEXTAUTH_UR;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await db.connect();
        const dataUser = await Usuarios.findOne({ email: credentials?.email! });
        await db.disconnect();
        if (
          dataUser &&
          bcryptjs.compareSync(credentials?.password!, dataUser.password)
        ) {    
          return {
          id: dataUser._id,
          name: dataUser.name,
          email: dataUser.email,
          image: null || "",
        }
        } else {
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};

export default NextAuth(authOptions);

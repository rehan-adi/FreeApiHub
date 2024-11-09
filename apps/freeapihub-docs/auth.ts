import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import prisma from "@freeapihub/db/index";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        let user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          const hashedPassword = await bcrypt.hash(password, 10);
          user = await prisma.user.create({
            data: {
              email,
              password: hashedPassword,
            },
          });
          return {
            email: user.email,
            message: "Account created successfully.",
          };
        } else {
          if (!user.password) {
            throw new Error("User password is not set");
          }
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            throw new Error("Invalid password");
          }
        }

        return {
          email: user?.email,
          message: "Login successful!",
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET, 
  cookies: {
    sessionToken: {
      name: `freeapitoken`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      },
    },
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.message = token.message as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.message = user.message;
      }
      return token;
    },
  },
});

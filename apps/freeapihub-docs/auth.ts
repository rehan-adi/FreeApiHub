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
          const hashedPassword = bcrypt.hashSync(password, 10);
          user = await prisma.user.create({
            data: {
              email,
              password: hashedPassword,
            },
          });
        } else {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (!isValidPassword) return null;
        }

        return {
          email: user?.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});

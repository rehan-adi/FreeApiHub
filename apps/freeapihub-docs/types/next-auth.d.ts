import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    message?: string; 
  }

  interface Session {
    user: User;
  }
}

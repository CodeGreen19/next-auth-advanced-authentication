import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "./auth.config";
import { getUserById, getUserByEmail } from "./data/user";
import { getAccountByUserId } from "./data/account";
import { Role } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async signIn({ user, account }: any) {
      if (account?.provider !== "credentials") {
        return true;
      }
      console.log("signIn==>", user);

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser: any = await getUserById(token.sub);
      const existingAccount = await getAccountByUserId(existingUser.id);
      if (existingUser) {
        token.role = existingUser?.role;
        token.name = existingUser?.name;
        token.email = existingUser?.email;
        token.isOAuth = !!existingAccount;
        token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      }
      return token;
    },
    async session({ session, user, token }: any) {
      console.log("session==>", session, token);

      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) session.user.role = token.role as Role;
      if (session.user) {
        session.user.email = token.email;
        session.user.isOAuth = token.isOAuth;
        session.user.name = token.name;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

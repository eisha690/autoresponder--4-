import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

const handler = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
})

export { handler as GET, handler as POST }

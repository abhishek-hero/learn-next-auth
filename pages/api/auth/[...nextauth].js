import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: '923617872649873',
      clientSecret: '770acd4929dae6f5ab89831e6fc81c64'
    })
  ]
}

export default NextAuth(authOptions)
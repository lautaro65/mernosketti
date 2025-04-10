import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import { generateCodeChallenge, generateCodeVerifier } from "@/utils/pkce"

const KICK_AUTH_URL = "https://id.kick.com/oauth"

const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "kick",
      name: "Kick",
      type: "oauth",
      authorization: {
        url: `${KICK_AUTH_URL}/authorize`,
        params: {
          response_type: "code",
          client_id: process.env.KICK_CLIENT_ID,
          redirect_uri: process.env.KICK_REDIRECT_URI,
          scope: "identify",
          code_challenge_method: "S256",
        },
      },
      token: `${KICK_AUTH_URL}/token`,
      userinfo: "https://kick.com/api/v1/user",
      clientId: process.env.KICK_CLIENT_ID,
      clientSecret: process.env.KICK_CLIENT_SECRET,
      profile(profile: any) {
        return {
          id: profile.id,
          name: profile.username,
          email: `${profile.username}@kick.com`,
          image: profile.avatar,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)

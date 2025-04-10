"use client"

import { generateCodeChallenge, generateCodeVerifier } from "@/utils/pkce"

export async function loginWithKick() {
  const verifier = generateCodeVerifier()
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem("kick_verifier", verifier)

  const redirectUrl = new URL("https://id.kick.com/oauth/authorize")
  redirectUrl.searchParams.set("response_type", "code")
  redirectUrl.searchParams.set("client_id", process.env.NEXT_PUBLIC_KICK_CLIENT_ID!)
  redirectUrl.searchParams.set("redirect_uri", process.env.NEXT_PUBLIC_KICK_REDIRECT_URI!)
  redirectUrl.searchParams.set("scope", "identify")
  redirectUrl.searchParams.set("code_challenge", challenge)
  redirectUrl.searchParams.set("code_challenge_method", "S256")
  redirectUrl.searchParams.set("state", crypto.randomUUID())

  window.location.href = redirectUrl.toString()
}


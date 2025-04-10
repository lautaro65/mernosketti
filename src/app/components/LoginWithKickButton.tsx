// pages/index.tsx
'use client'
import { useEffect } from "react"
import { generateCodeChallenge, generateCodeVerifier } from "@/utils/pkce"

export default function Home() {
  const loginWithKick = async () => {
    const verifier = generateCodeVerifier()
    const challenge = await generateCodeChallenge(verifier)

    // Guardamos el code_verifier en localStorage
    localStorage.setItem("kick_code_verifier", verifier)

    const params = new URLSearchParams({
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_KICK_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_KICK_REDIRECT_URI!,
      scope: "user",
      code_challenge: challenge,
      code_challenge_method: "S256",
      state: "kick-login-state",
    })

    window.location.href = `https://id.kick.com/oauth/authorize?${params.toString()}`
  }

  return (
    <main>
      <button onClick={loginWithKick}>Iniciar sesión con Kick</button>
    </main>
  )
}

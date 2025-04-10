// pages/api/auth/callback/kick.ts
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string
  const codeVerifier = req.cookies.kick_code_verifier || ""

  try {
    const params = new URLSearchParams()
    params.append("grant_type", "authorization_code")
    params.append("client_id", process.env.KICK_CLIENT_ID!)
    params.append("client_secret", process.env.KICK_CLIENT_SECRET!)
    params.append("redirect_uri", process.env.KICK_REDIRECT_URI!)
    params.append("code_verifier", codeVerifier)
    params.append("code", code)

    const response = await axios.post("https://id.kick.com/oauth/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    const tokenData = response.data

    // Podés guardar la sesión/token, o redirigir
    res.status(200).json({ tokenData })
  } catch (error: unknown) {
    res.status(500).json({ error: "Failed to exchange code for token" })
  }
}

import type { NextRequest } from "next/server"
import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers"
import { createHandler } from "tinacms/dist/next-tinacms-cloudinary"

export async function POST(req: NextRequest, context: { params: { route: string[] } }) {
  const { route } = context.params

  // This handles image uploads
  if (route[0] === "media") {
    const mediaHandler = createMediaHandler({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "",
      api_secret: process.env.CLOUDINARY_API_SECRET || "",
    })

    return mediaHandler(req)
  }

  // This handles Tina API requests
  const handler = createHandler({
    clientId: process.env.TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
    branch: process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  })

  return handler(req)
}

export async function GET(req: NextRequest, context: { params: { route: string[] } }) {
  const { route } = context.params

  if (route[0] === "media") {
    const mediaHandler = createMediaHandler({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "",
      api_secret: process.env.CLOUDINARY_API_SECRET || "",
    })

    return mediaHandler(req)
  }
}

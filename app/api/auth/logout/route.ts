import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  cookies().delete("tina-auth-token")
  return NextResponse.json({ success: true })
}

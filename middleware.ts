import { type NextRequest, NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

// Paths that require authentication
const PROTECTED_PATHS = ["/admin", "/api/tina"]

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not configured")
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = PROTECTED_PATHS.some((path) => pathname.startsWith(path))

  if (isProtectedPath) {
    // Get the token from the cookies
    const token = request.cookies.get("tina-auth-token")?.value

    // If there's no token, redirect to login
    if (!token) {
      const url = new URL("/admin/login", request.url)
      return NextResponse.redirect(url)
    }

    try {
      // Verify the token
      verify(token, process.env.JWT_SECRET)
      return NextResponse.next()
    } catch (error) {
      // If token is invalid, redirect to login
      const url = new URL("/admin/login", request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/tina/:path*"],
}

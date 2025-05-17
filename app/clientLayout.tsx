"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { TinaClientWrapper } from "@/lib/tina-client-wrapper"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <body className={inter.className}>
      <TinaClientWrapper>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </TinaClientWrapper>
    </body>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Manrope } from "next/font/google"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Serenica - Find Your Inner Calm",
  description: "A personalized meditation journey guided by AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${manrope.variable} font-sans`}>{children}</body>
    </html>
  )
}

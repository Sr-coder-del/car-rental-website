
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shri Manjunatha Tours and Travels",
  verification: {
    google: 'MHHWc2qHv-loIPcwIuy5BEmTRzzPfItD7OLTpNHJ3U8',
  },
  description:
    "Shri Manjunatha Tours and Travels - Reliable car rental, taxi and tour services for local and outstation travel.",
  keywords: [
    "Shri Manjunatha Tours and Travels",
    "car rental",
    "taxi service",
    "tour and travels",
    "outstation cab",
    "local taxi",
    "Karnataka tours",
  ],
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


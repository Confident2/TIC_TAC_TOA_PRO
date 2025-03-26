import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "A modern Tic Tac Toe game with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import { GeistMono } from "geist/font/mono";

import './globals.css'

export const metadata: Metadata = {
  title: 'bbtv',
  description: 'bbtv by bbki.ng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>{children}</body>
    </html>
  )
}

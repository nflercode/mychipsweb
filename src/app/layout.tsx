import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import { Toaster } from '@/components/ui/sonner'

const poppins = Poppins({ weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'My chips online - poker app',
  description: 'Poker app for keeping track on poker chips for games at home, invite your friends and play with virtual chips!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark`}>{children}</body>
      <Toaster position="top-center" />
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyFormula | Brand Guidelines',
  description: 'Official digital brand guidelines for MyFormula, featuring visual identity, typography, colors, and tone of voice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://i.postimg.cc" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://image2url.com" crossOrigin="anonymous" />
      </head>
      <body className="font-secondary">{children}</body>
    </html>
  )
}
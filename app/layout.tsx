import localFont from 'next/font/local'
import { Metadata } from 'next'
import { metadata as siteMetadata } from './metadata'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'

const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '300 700',
      style: 'normal',
    }
  ],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  ...siteMetadata,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 30,
      'max-image-preview': 'large',
      'max-snippet': 30,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Volta Finance - Spend whatever you hold, as whatever you need',
  description: 'The multi-currency neobank for Nigerians. Hold NGN, USD, and USDC in one app. Spend from any balance anywhere with one card. No P2P. No friction.',
  keywords: ['neobank', 'Nigeria', 'USDC', 'fintech', 'multi-currency', 'digital banking'],
  openGraph: {
    title: 'Volta Finance',
    description: 'Spend whatever you hold, as whatever you need.',
    url: 'https://voltafinance.tech',
    siteName: 'Volta Finance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volta Finance',
    description: 'Spend whatever you hold, as whatever you need.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

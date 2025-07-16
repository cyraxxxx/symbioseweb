/* import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Symbiose Web Solutions',
  description: 'Symbiose Web Solutions, Des solutions numériques sur mesure',
  other: {
    'theme-color': '#222222',
    "color-scheme": "dark only",
    //"twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "https://symbioseweb.ca",
    //"og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white-100 font-poppins">{children}</body>
    </html>
  )
}
 */

import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Symbiose Web Solutions',
  description: 'Symbiose Web Solutions — Des solutions numériques sur mesure pour vos projets web, SEO, design et performance.',
  keywords: [
    'Symbiose Web Solutions',
    'développement web',
    'agence web',
    'SEO',
    'création de site',
    'solutions numériques',
    'design UX',
    'performance web'
  ],
  metadataBase: new URL('https://symbioseweb.com'),
  openGraph: {
    title: 'Symbiose Web Solutions',
    description: 'Des solutions numériques sur mesure pour entreprises et créateurs. Basée à Mont-Saint-Hilaire.',
    url: 'https://symbioseweb.com',
    siteName: 'Symbiose Web Solutions',
    type: 'website',
    locale: 'fr_CA',
    // You can uncomment and add your image later:
    images: [
      {
        url: "https://symbioseweb.com/homepage-thumbnail.jpg",
        width: 1200,
        height: 661,
        alt: "Symbiose Web Thumbnail",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Symbiose Web Solutions',
    description: 'Des solutions numériques sur mesure pour entreprises et créateurs.',
    site: '@symbioseweb',
    images: [
      {
        url: "https://symbioseweb.com/homepage-thumbnail.jpg",
        width: 1200,
        height: 661,
        alt: "Symbiose Web Thumbnail",
      },
    ],
  },
  authors: [{ name: 'Cyril Robert', url: 'https://symbioseweb.com' }],
  creator: 'Cyril Robert',
  themeColor: '#222222',
  colorScheme: 'light',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: Add preload fonts or analytics scripts here */}
      </head>
      <body className="min-h-screen bg-white-100 text-black-500 font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}
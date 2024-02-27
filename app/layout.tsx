import './globals.css'
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
      {/* <body className="min-h-screen bg-black-100 font-poppins">{children}</body> */}
      <body className="min-h-screen bg-white-100 font-poppins">{children}</body>
    </html>
  )
}

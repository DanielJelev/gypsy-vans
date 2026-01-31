import './globals.css'
import { Providers } from './providers'

export const metadata = { title: 'GypsyVans', description: 'Boho-styled landing page' }

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@200;300;400;500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-page text-ink font-body"><Providers>{children}</Providers></body>
    </html>
  )
}

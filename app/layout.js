import './globals.css'
import { Providers } from './providers'
import CookieConsent from '../components/CookieConsent'

export const metadata = { title: 'GypsyVans', description: 'Boho-styled landing page' }

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
      </head>
      <body className="bg-page text-ink font-body">
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  )
}

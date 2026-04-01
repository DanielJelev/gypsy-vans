import './globals.css'
import { Providers } from './providers'

export const metadata = { title: 'GypsyVans', description: 'Boho-styled landing page' }

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
      </head>
      <body className="bg-page text-ink font-body"><Providers>{children}</Providers></body>
    </html>
  )
}

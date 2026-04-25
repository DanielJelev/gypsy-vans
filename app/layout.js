import './globals.css'
import { Providers } from './providers'
import CookieConsent from '../components/CookieConsent'

const socialPreviewImage = 'https://gypsyvans.bg/gypsy-van-logo.png'

export const metadata = {
  metadataBase: new URL('https://gypsyvans.bg'),
  title: {
    default: 'Gypsy Vans — Луксозен кемперван под наем в България',
    template: '%s | Gypsy Vans',
  },
  description:
    'Наемете луксозен Mercedes Sprinter кемперван за вашето приключение в България. Пълно оборудване, комфорт за до 4 души и свобода да пътувате навсякъде.',
  keywords: [
    'кемперван под наем',
    'кемпер България',
    'луксозен кемперван',
    'Mercedes Sprinter кемпер',
    'Gypsy Vans',
    'campervan rental Bulgaria',
    'наем на кемпер',
    'кемперван приключение',
  ],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://gypsyvans.bg',
    siteName: 'Gypsy Vans',
    title: 'Gypsy Vans — Луксозен кемперван под наем в България',
    description:
      'Наемете луксозен Mercedes Sprinter кемперван за вашето приключение в България. Пълно оборудване, комфорт за до 4 души и свобода.',
    images: [
      {
        url: socialPreviewImage,
        width: 102,
        height: 102,
        alt: 'Gypsy Vans лого',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Gypsy Vans — Луксозен кемперван под наем',
    description: 'Луксозен Mercedes Sprinter кемперван за приключения в България.',
    images: [socialPreviewImage],
  },
  alternates: { canonical: 'https://gypsyvans.bg' },
  icons: {
    icon: '/gypsy-van-logo.png',
    apple: '/gypsy-van-logo.png',
  },
}

export const viewport = {
  themeColor: '#C06C3E',
}

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

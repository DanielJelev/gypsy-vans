import './globals.css'
import { Providers } from './providers'
import CookieConsent from '../components/CookieConsent'

const siteUrl = 'https://www.gypsyvans.bg'
const socialPreviewImage = `${siteUrl}/gypsy-van-logo.jpg`

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gypsy Vans — Луксозен кемперван под наем в България',
    template: '%s | Gypsy Vans',
  },
  description:
    'Наемете луксозен Mercedes Sprinter кемперван за вашето приключение в България. Пълно оборудване, комфорт за до 4 души и свобода да пътувате навсякъде. Цени от 84€/ден.',
  keywords: [
    'кемперван под наем',
    'кемпер България',
    'кемпер ван под наем',
    'наем кемпер ван',
    'кемпер ван София',
    'кемпер под наем цена',
    'наем кемпер България',
    'луксозен кемперван',
    'Mercedes Sprinter кемпер',
    'Gypsy Vans',
    'campervan rental Bulgaria',
    'кемперван приключение',
    'кемпер ван с шофьор',
    'наем кемперван София',
  ],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: siteUrl,
    siteName: 'Gypsy Vans',
    title: 'Gypsy Vans — Луксозен кемперван под наем в България',
    description:
      'Наемете луксозен Mercedes Sprinter кемперван за вашето приключение в България. Пълно оборудване, комфорт за до 4 души. Цени от 84€/ден.',
    images: [
      {
        url: socialPreviewImage,
        width: 2048,
        height: 2048,
        type: 'image/jpeg',
        alt: 'Gypsy Vans — луксозен кемперван под наем',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gypsy Vans — Луксозен кемперван под наем',
    description: 'Луксозен Mercedes Sprinter кемперван за приключения в България. Цени от 84€/ден.',
    images: [socialPreviewImage],
  },
  alternates: { canonical: siteUrl },
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
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
      </head>
      <body className="bg-page text-ink font-body">
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  )
}

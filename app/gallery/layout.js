export const metadata = {
  title: 'Галерия',
  description:
    'Разгледайте снимки от пътешествия с Gypsy Vans — луксозен кемперван Mercedes Sprinter. Вдъхновете се за вашето следващо приключение.',
  openGraph: {
    title: 'Галерия | Gypsy Vans',
    description: 'Снимки от пътешествия с луксозен кемперван Gypsy Vans.',
    images: [
      {
        url: 'https://gypsyvans.bg/gypsy-van-logo.jpg',
        width: 2048,
        height: 2048,
        alt: 'Gypsy Vans — галерия от пътешествия с кемперван',
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: ['https://gypsyvans.bg/gypsy-van-logo.jpg'],
  },
}

export default function GalleryLayout({ children }) {
  return children
}

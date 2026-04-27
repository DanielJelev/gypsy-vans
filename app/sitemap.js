export default function sitemap() {
  const baseUrl = 'https://www.gypsyvans.bg'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

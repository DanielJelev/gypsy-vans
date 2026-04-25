export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://gypsyvans.bg/#organization',
      name: 'Gypsy Vans',
      url: 'https://gypsyvans.bg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gypsyvans.bg/gypsy-van-logo.png',
      },
      sameAs: [
        'https://www.instagram.com/gypsyvans.bg',
        'https://www.facebook.com/gypsyvans.bg',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+359887979934',
          contactType: 'customer service',
          areaServed: 'BG',
          availableLanguage: ['bg', 'en'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+359886837085',
          contactType: 'customer service',
          areaServed: 'BG',
          availableLanguage: ['bg', 'en'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://gypsyvans.bg/#website',
      url: 'https://gypsyvans.bg',
      name: 'Gypsy Vans',
      inLanguage: 'bg',
      publisher: { '@id': 'https://gypsyvans.bg/#organization' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://gypsyvans.bg/#localbusiness',
      name: 'Gypsy Vans',
      description: 'Луксозен кемперван Mercedes Sprinter под наем в България. Пълно оборудване и комфорт за до 4 души.',
      url: 'https://gypsyvans.bg',
      logo: 'https://gypsyvans.bg/gypsy-van-logo.png',
      image: 'https://gypsyvans.bg/van/van-image-inside.webp',
      address: { '@type': 'PostalAddress', addressLocality: 'София', addressCountry: 'BG' },
      telephone: '+359887979934',
      priceRange: '€84–€125/ден',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
      sameAs: [
        'https://www.instagram.com/gypsyvans.bg',
        'https://www.facebook.com/gypsyvans.bg',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Какво е включено в цената, при наемане на кемпер?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'В цената е включено пълно обзавеждане и оборудване на кемпера - спални принадлежности, кухненски прибори и съдове, пълна газова бутилка, къмпинг столове и маса, основни консумативи за готвене и почистване. Получаваш също застраховки Гражданска Отговорност и Каско, денонощна пътна помощ и подробен брифинг.',
          },
        },
        {
          '@type': 'Question',
          name: 'Какви документи са необходими за да управлявам кемпера?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Валидно свидетелство за управление (категория B или по-висока) и лична карта.',
          },
        },
        {
          '@type': 'Question',
          name: 'Какво е нужно да взема с мен?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Подходящи дрехи, храни и напитки, средства за лична хигиена, лекарства и документи за управление. Всичко останало вече те очаква в кемпера.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ще получа ли отстъпка при по-дълги периоди на наем?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Разбира се! Предлагаме прогресивни отстъпки при по-продължителни наемни периоди.',
          },
        },
      ],
    },
  ],
}

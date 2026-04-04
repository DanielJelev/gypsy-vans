export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Gypsy Vans',
      description: 'Луксозен кемперван Mercedes Sprinter под наем в България. Пълно оборудване и комфорт за до 4 души.',
      url: 'https://gypsyvans.bg',
      image: 'https://gypsyvans.bg/van/van-image-outside.webp',
      address: { '@type': 'PostalAddress', addressLocality: 'София', addressCountry: 'BG' },
      priceRange: '€84–€125/ден',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
      sameAs: ['https://www.instagram.com/gypsyvans.bg'],
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

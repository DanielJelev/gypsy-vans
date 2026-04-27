export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.gypsyvans.bg/#organization',
      name: 'Gypsy Vans',
      url: 'https://www.gypsyvans.bg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gypsyvans.bg/gypsy-van-logo.png',
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
      '@id': 'https://www.gypsyvans.bg/#website',
      url: 'https://www.gypsyvans.bg',
      name: 'Gypsy Vans',
      inLanguage: 'bg',
      publisher: { '@id': 'https://www.gypsyvans.bg/#organization' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.gypsyvans.bg/#localbusiness',
      name: 'Gypsy Vans',
      description: 'Луксозен кемперван Mercedes Sprinter под наем в България. Пълно оборудване и комфорт за до 4 души.',
      url: 'https://www.gypsyvans.bg',
      logo: 'https://www.gypsyvans.bg/gypsy-van-logo.png',
      image: 'https://www.gypsyvans.bg/van/van-image-inside.webp',
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
          name: 'Какви са условията за да резервирам кемпер ван?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Нужни са: шофьорска книжка (категория B) и поне 2 години опит, депозит от 750 € (напълно възстановим при липса на щети) и стандартна такса за почистване от 55 евро. Цената за наем зависи от периода.',
          },
        },
        {
          '@type': 'Question',
          name: 'Подходящ ли е кемпер вана за деца?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Да! Gypsy Van е проектиран за комфортно пътуване на двойка с едно или две деца. Задните седалки са монтирани от лицензирана фирма с ISOFIX система.',
          },
        },
        {
          '@type': 'Question',
          name: 'Колко души могат да пътуват и спят в кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Комфортно могат да пътуват и спят до 4 души. Кемпер ванът разполага с две отделни седящи групи за допълнителен комфорт.',
          },
        },
        {
          '@type': 'Question',
          name: 'С какво оборудване идва кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Получавате напълно оборудван дом на колела: спални принадлежности, хавлии, козметика, оборудвана кухня с прибори, консумативи, кафе и чай, проектор, къмпинг маса и столове.',
          },
        },
        {
          '@type': 'Question',
          name: 'Има ли скрити такси при наем на кемпер ван?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Не! Няма скрити такси за оборудване. Единствено при непочистена тоалетна касета при връщане се начислява такса от 35 €.',
          },
        },
        {
          '@type': 'Question',
          name: 'Какви са цените за наем на кемпер ван в България?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Цените варират според сезона: слаб сезон 84–105 €/ден, среден сезон 92–115 €/ден, силен сезон 100–125 €/ден. При по-дълъг наем има прогресивни отстъпки.',
          },
        },
        {
          '@type': 'Question',
          name: 'Мога ли да взема домашен любимец в кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Обичайно по-големи породи не се допускат, но пишете ни допълнително и ще обсъдим възможностите.',
          },
        },
        {
          '@type': 'Question',
          name: 'Колко спални места има в кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'В Gypsy Van има две спални, подходящи за спане на до 4 души.',
          },
        },
        {
          '@type': 'Question',
          name: 'Мога ли да пътувам извън България с кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Да, можете да пътувате в чужбина. Споделете планирания маршрут, за да подготвим всички необходими документи, зелена карта и допълнителни застраховки.',
          },
        },
        {
          '@type': 'Question',
          name: 'Как се извършва плащането за наем на кемпер вана?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Приемаме плащане само по банков път или чрез сигурна платформа за онлайн плащания.',
          },
        },
        {
          '@type': 'Question',
          name: 'До кога трябва да върна кемпера?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Кемпер ванът трябва да бъде върнат до 16:00 часа в последния ден от наемния период.',
          },
        },
        {
          '@type': 'Question',
          name: 'Какво да си взема за почивка с кемпер ван?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Кемпер ванът идва напълно оборудван. Нужни са само подходящи дрехи, лични вещи, документи и ентусиазъм.',
          },
        },
        {
          '@type': 'Question',
          name: 'Каква е таксата за втори водач?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Можете да заявите втори водач без допълнителна такса. Всички водачи трябва да отговарят на изискванията.',
          },
        },
        {
          '@type': 'Question',
          name: 'Има ли ограничение в километрите при наем на кемпер?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Не, няма ограничения за километража — пътувайте свободно без да броите километри!',
          },
        },
      ],
    },
  ],
}

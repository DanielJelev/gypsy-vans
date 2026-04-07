'use client';

import { WaveDivider } from './WaveDivider';

const plans = [
  {
    name: 'Слаб сезон',
    price: '84–105',
    currency: '€',
    frequency: '/ден',
    features: [
      'до 4 дни = 105 €/ден',
      'от 5 до 6 дни = 103 €/ден',
      'от 7 до 13 дни = 100 €/ден',
      'от 14 до 20 дни = 95 €/ден',
      'от 21 до 29 дни = 90 €/ден',
      '30 или повече дни = 84 €/ден',
    ],
    badge: '15% ОТСТЪПКА',
    months: 'Януари, Февруари, Март и Декември',
    accent: 'sage',
    featured: false,
  },
  {
    name: 'Силен сезон',
    price: '100–125',
    currency: '€',
    frequency: '/ден',
    features: [
      'до 4 дни = 125 €/ден',
      'от 5 до 6 дни = 123 €/ден',
      'от 7 до 13 дни = 119 €/ден',
      'от 14 до 20 дни = 113 €/ден',
      'от 21 до 29 дни = 106 €/ден',
      '30 или повече дни = 100 €/ден',
    ],
    badge: 'НАЙ-ПОПУЛЯРЕН',
    months: 'Юни, Юли, Август и Септември',
    accent: 'terracotta',
    featured: true,
  },
  {
    name: 'Среден сезон',
    price: '92–115',
    currency: '€',
    frequency: '/ден',
    features: [
      'до 4 дни = 115 €/ден',
      'от 5 до 6 дни = 113 €/ден',
      'от 7 до 13 дни = 109 €/ден',
      'от 14 до 20 дни = 104 €/ден',
      'от 21 до 29 дни = 98 €/ден',
      '30 или повече дни = 92 €/ден',
    ],
    badge: '10% ОТСТЪПКА',
    months: 'Април, Май, Октомври и Ноември',
    accent: 'desert-rose',
    featured: false,
  },
];

const PricePlans = () => {
  return (
    <section className="relative pb-[160px] overflow-hidden" style={{ background: 'var(--beige-bg)' }}>

      <div className="container-page">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
              Ценови пакети
            </h2>
            <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-12 space-y-8">
            <p className="text-earth text-lg md:text-xl leading-[1.8] text-center">
              Нашият кемперван идва при вас наистина оборудван за пътешествия.
              Помислили сме за абсолютно всичко, което ще ви бъде необходимо за
              комфортен престой. В него комфортно могат да пътуват и спят до <span className="serif-head font-bold text-terracotta">4 души</span>.
            </p>

            <p className="text-earth text-lg md:text-xl leading-[1.8] text-center">
              Цените варират в зависимост от <span className="serif-head font-semibold">продължителността</span> на вашето
              приключение и <span className="serif-head font-semibold">сезона</span>. Преди да направите резервацията, моля, запознайте се с нашите
              условия за наемане и прегледайте най-често задаваните въпроси.
            </p>

            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-sand/50" />
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-terracotta" />
                <div className="w-2 h-2 rounded-full bg-desert-rose" />
                <div className="w-2 h-2 rounded-full bg-sage" />
              </div>
              <div className="h-px flex-1 bg-sand/50" />
            </div>

            <p className="text-earth text-base md:text-lg leading-[1.8] text-center font-medium">
              Ако искате вашето пътуване да стартира от друга точка, различна от
              София — <a href="#contact" className="text-terracotta underline underline-offset-2 decoration-terracotta/40 hover:decoration-terracotta">пишете ни</a>. Предлагаме гъвкави опции за доставка на Gypsy
              van-а в различни точки на страната.
            </p>

            <p className="script-head text-xl md:text-2xl text-terracotta text-center">
              Благодарим ви, че избирате да създавате незабравими спомени с Gypsy Vans!
            </p>
          </div>

        </div>
      </div>

      {/* Min-stay banner */}
      <div className="relative bg-linen overflow-hidden py-16 md:py-20 my-12">
        <WaveDivider fill="var(--beige-bg)" height={80} position="top" overlap={-1} />

        {/* Decorative large number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span className="text-earth/[0.04] text-[180px] md:text-[250px] font-bold leading-none select-none">2</span>
        </div>

        <div className="container-page relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="script-head text-2xl md:text-3xl text-earth leading-snug">
              Минималният брой нощувки за наемане на кемпервана e
            </p>
            <span className="serif-head text-5xl md:text-6xl text-orange font-black leading-none block mt-3" style={{ WebkitTextStroke: '2px' }}>2</span>
          </div>
        </div>

        <WaveDivider fill="var(--beige-bg)" height={80} overlap={-1} />
      </div>

      <div className="container-page">
        <div className="max-w-6xl mx-auto">

          {/* Price cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative group flex flex-col ${plan.featured ? 'md:-mb-4' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`inline-block px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white shadow-sm ${
                        plan.featured ? 'bg-terracotta' : 'bg-earth'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`relative overflow-hidden rounded-2xl flex flex-col flex-1 transition-all duration-300 ${
                    plan.featured
                      ? 'bg-white shadow-boho ring-2 ring-terracotta/20 hover:shadow-deep'
                      : 'bg-white/70 backdrop-blur-sm shadow-soft border border-sand/60 hover:shadow-boho hover:bg-white'
                  }`}
                >
                  {/* Top accent strip */}
                  <div className={`h-1.5 bg-${plan.accent}`} />

                  {/* Season + price header */}
                  <div className={`px-6 text-center ${plan.featured ? 'pt-8 pb-5' : 'pt-6 pb-4'}`}>
                    <h3 className={`serif-head text-earth ${plan.featured ? 'text-2xl mb-1' : 'text-xl mb-0.5'}`}>{plan.name}</h3>
                    <p className="text-cocoa text-sm mb-4">{plan.months}</p>
                    <div className="inline-flex items-baseline gap-1">
                      <span className={`serif-head text-earth font-semibold leading-none ${plan.featured ? 'text-5xl' : 'text-4xl'}`}>
                        {plan.price}
                      </span>
                      <span className="text-cocoa/60 text-base">{plan.currency}{plan.frequency}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-6"><div className="h-px bg-sand/40" /></div>

                  {/* Pricing tiers */}
                  <div className="px-6 pt-4 flex-1">
                    {plan.features.map((feature, idx) => {
                      const parts = feature.split('=');
                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-between py-2.5 ${
                            idx < plan.features.length - 1 ? 'border-b border-sand/20' : ''
                          }`}
                        >
                          <span className="text-cocoa text-sm">{parts[0].trim()}</span>
                          <span className="serif-head text-base text-earth font-bold tabular-nums tracking-wide">
                            {parts[1]?.trim()}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className={`px-6 pb-6 ${plan.featured ? 'pt-5' : 'pt-4'}`}>
                    <a
                      href="/#contact"
                      aria-label={`Резервирай ${plan.name}`}
                      className={`block text-center w-full py-3 rounded-full text-xs tracking-widest uppercase transition-colors duration-300 ${
                        plan.featured
                          ? 'bg-orange text-white hover:bg-terracotta'
                          : 'border border-earth/20 text-earth hover:bg-earth hover:text-white'
                      }`}
                    >
                      РЕЗЕРВИРАЙ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom wave — transitions to linen contact */}
      <WaveDivider fill="#F5EDE3" height={120} overlap={-2} />
    </section>
  );
};

export default PricePlans;

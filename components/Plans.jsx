'use client';

import { motion } from 'framer-motion';
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
    accent: 'bg-sage',
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
    accent: 'bg-terracotta',
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
    accent: 'bg-desert-rose',
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const PricePlans = () => {
  return (
    <section className="relative pt-20 md:pt-32 pb-[160px] overflow-hidden" style={{ background: 'var(--beige-bg)' }}>
      {/* Soft decorative blobs */}
      <div className="absolute top-0 -right-40 w-80 h-80 rounded-full bg-sand/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 -left-32 w-72 h-72 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-page">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
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
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center mb-16 space-y-4"
          >
            <p className="text-cocoa/70 text-base md:text-lg leading-relaxed">
              Нашият кемперван идва при вас наистина оборудван за пътешествия.
              Помислили сме за абсолютно всичко, което ще ви бъде необходимо за
              комфортен престой. В него комфортно могат да пътуват и спят до 4 души.
            </p>
            <p className="text-cocoa/70 text-base md:text-lg leading-relaxed">
              Цените варират, в зависимост от продължителността на вашето
              приключение и сезона.
            </p>
            <p className="text-cocoa/70 text-base md:text-lg leading-relaxed">
              Преди да направите резервацията, моля, запознайте се с нашите
              условия за наемане и прегледайте най-често задаваните въпроси.
            </p>
            <p className="text-earth/80 text-base md:text-lg leading-relaxed font-medium">
              Ако искате вашето пътуване да стартира от друга точка, различна от
              София — пишете ни. Предлагаме гъвкави опции за доставка на Gypsy
              van-а в различни точки на страната.
            </p>
            <p className="text-cocoa/60 text-base md:text-lg leading-relaxed italic serif-head">
              Благодарим ви, че избирате да създавате незабравими спомени с Gypsy Vans!
            </p>

            {/* Min-stay notice */}
            <div className="inline-flex items-center gap-2 bg-sand/30 backdrop-blur-sm rounded-full px-6 py-3 border border-sand/50 mt-4">
              <div className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
              <span className="text-earth text-sm md:text-base font-medium">
                Минималното време за наемане е 2 нощувки.
              </span>
            </div>
          </motion.div>

          {/* Price cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative group ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-white shadow-sm ${
                        plan.featured ? 'bg-terracotta' : 'bg-earth/70'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    plan.featured
                      ? 'bg-white shadow-boho ring-2 ring-terracotta/20'
                      : 'bg-white/70 backdrop-blur-sm shadow-soft hover:shadow-boho border border-sand/60'
                  }`}
                >
                  {/* Top accent bar */}
                  <div className={`h-1.5 ${plan.accent}`} />

                  {/* Header area */}
                  <div className="px-7 pt-8 pb-6 text-center">
                    <h3 className="serif-head text-2xl text-earth mb-1">{plan.name}</h3>
                    <p className="text-cocoa/50 text-xs tracking-wide mb-5">{plan.months}</p>

                    <div className="flex items-baseline justify-center gap-1">
                      <span className="serif-head text-4xl md:text-5xl text-earth font-semibold">
                        {plan.price}
                      </span>
                      <span className="text-cocoa/60 text-lg">{plan.currency}</span>
                      <span className="text-cocoa/40 text-sm">{plan.frequency}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-7">
                    <div className="h-px bg-sand/60" />
                  </div>

                  {/* Features */}
                  <div className="px-7 pt-6 pb-8">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-cocoa/70">
                          <div className={`w-2 h-2 rounded-full ${plan.accent} flex-shrink-0 opacity-70`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/#contact"
                      className={`block text-center w-full py-3 rounded-full text-sm tracking-widest uppercase ${
                        plan.featured
                          ? 'bg-orange border border-orange text-white'
                          : 'border border-earth/30 text-earth'
                      }`}
                    >
                      РЕЗЕРВИРАЙ
                    </a>
                  </div>
                </div>
              </motion.div>
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

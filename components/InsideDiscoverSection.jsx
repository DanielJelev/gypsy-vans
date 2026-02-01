'use client';

import { motion } from 'framer-motion';

const bullets = [
  { text: 'Комфортно легло', icon: '🛏️' },
  { text: 'Изцяло оборудвана кухня', icon: '🍳' },
  { text: 'Система за независима енергия', icon: '🔋' },
  {
    text: 'Умно разпределение на пространството и възможност да пътувате до 4-ма души',
    icon: '👨‍👩‍👧‍👦',
  },
  { text: 'Висококачествени материали и дизайнерски детайли', icon: '✨' },
  { text: 'Множество удобства за дълги пътешествия', icon: '🧭' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function InsideDiscoverSection() {
  return (
    <section className="bg-page" aria-labelledby="inside-heading">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 id="inside-heading" className="font-head text-3xl md:text-5xl text-ink">
              Какво ще откриеш вътре:
            </h2>
            <div className="h-px w-32 bg-pebble/70" aria-hidden />
          </div>

          {/* Bullet "tiles" with a soft reveal */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {bullets.map((b) => (
              <motion.div
                key={b.text}
                variants={item}
                className="group relative overflow-hidden rounded-l border border-pebble/60 bg-white/70 backdrop-blur-sm shadow-soft p-5"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-pebble/30 blur-2xl transition-transform duration-700 ease-soft group-hover:scale-125"
                  aria-hidden
                />
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-pebble/40 text-xl"
                    aria-hidden
                  >
                    {b.icon}
                  </div>
                  <p className="text-cocoa/95 leading-relaxed">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-10"
          >
            <div className="relative overflow-hidden rounded-l border border-pebble/60 bg-white/70 backdrop-blur-sm shadow-soft p-6 md:p-7">
              <div className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-pebble/35 blur-3xl" aria-hidden />
              <p className="text-cocoa/90 text-base md:text-lg leading-relaxed">
                Това е кемпер, създаден за хора, които ценят както свободата, така и комфорта.
                <br />
                Gypsy Vans - дом, който те следва навсякъде.
                <br />
                Създаден с любов. Изживян с дух. Споделен с теб.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

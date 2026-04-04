'use client';

import { motion } from 'framer-motion';
import { WaveDivider } from './WaveDivider';

const features = [
  { color: 'bg-terracotta', title: 'Комфортно легло', desc: 'Просторно и удобно за двама, с качествен матрак и меко спално бельо.' },
  { color: 'bg-desert-rose', title: 'Оборудвана кухня', desc: 'Плот, мивка, газов котлон, хладилник и всичко нужно за готвене на път.' },
  { color: 'bg-sand', title: 'Независима енергия', desc: 'Соларни панели и батерии за пълна автономност далеч от мрежата.' },
  { color: 'bg-sage', title: 'До 4 души', desc: 'Умно разпределение на пространството за комфортно пътуване.' },
  { color: 'bg-cream border border-sand/50', title: 'Дизайнерски детайли', desc: 'Висококачествени материали и внимание към всеки детайл.' },
  { color: 'bg-terracotta', title: 'Готов за приключения', desc: 'Множество удобства за дълги и незабравими пътешествия.' },
];

/* Stagger offsets to give the top row an organic, hand-placed feel */
const offsets = ['md:translate-y-0', 'md:translate-y-6', 'md:translate-y-2', 'md:translate-y-4', 'md:translate-y-0', 'md:translate-y-5'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export function BohoServicesGrid() {
  return (
    <section id="discover" className="relative overflow-hidden" style={{ background: 'var(--beige-bg)' }}>

      <div className="container-page">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">Какво ще откриеш</p>
            <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
              Отвътре
            </h2>
            <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
          </motion.div>

          {/* Feature items – organic layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`group flex flex-col items-center text-center ${offsets[i]}`}
              >
                {/* Arch-shaped accent */}
                <div className="relative mb-5">
                  <div className="w-20 h-28 md:w-24 md:h-32 arch-frame-subtle bg-sand/30 group-hover:bg-sand/50 transition-colors duration-500" />
                  <div
                    className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full ${f.color} shadow-sm group-hover:scale-110 transition-transform duration-500`}
                  />
                </div>

                <h3 className="serif-head text-lg md:text-xl text-earth mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="text-cocoa text-sm leading-relaxed max-w-[220px]">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}

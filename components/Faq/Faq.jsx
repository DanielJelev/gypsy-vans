'use client';

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WaveDivider } from '../WaveDivider';
import { debounce } from "../../app/utils/debounce";

const sections = [
  {
    title: "Какво е включено в цената, при наемане на кемпер?",
    description:
      "В цената е включено пълно обзавеждане и оборудване на кемпера - спални принадлежности, кухненски прибори и съдове, пълна газова бутилка, къмпинг столове и маса, основни консумативи за готвене и почистване. Получаваш също застраховки Гражданска Отговорност и Каско, денонощна пътна помощ за републиканската пътна мрежа на България и подробен брифинг преди тръгване.",
  },
  {
    title: "Какви документи са необходими за да управлявам кемпера?",
    description:
      "Валидно свидетелство за управление (категория B или по-висока), лична карта и доза приключенски ентусиазъм!",
  },
  {
    title: "Какво е нужно да взема с мен?",
    description:
      "Трябва да вземеш доброто си настроение, подходящи за твоето приключение дрехи, храни и напитки, средства за лична хигиена, лекарства и документи за управление на кемпера. Всичко останало вече те очаква в кемпера. Препоръчваме ти да вземеш и камера, с която да запечаташ незабравимите моменти от предстоящото пътешествие.",
  },
  {
    title: "Ще получа ли отстъпка при по-дълги периоди на наем?",
    description:
      "Разбира се! Предлагаме прогресивни отстъпки при по-продължителни наемни периоди. (недовършено)",
  },
];

export function Faq() {
  const [expandedSections, setExpandedSections] = useState({});
  const [sectionHeights, setSectionHeights] = useState({});
  const sectionRefs = useRef({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useLayoutEffect(() => {
    const measure = () => {
      const heights = {};
      Object.entries(sectionRefs.current).forEach(([key, el]) => {
        if (el) heights[key] = el.offsetHeight;
      });
      setSectionHeights(heights);
    };
    measure();

    const handleResize = debounce(measure, 200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative pt-20 md:pt-32 pb-[160px] overflow-hidden bg-linen">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-32 w-72 h-72 rounded-full bg-sand/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 -right-24 w-60 h-60 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-page">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">Въпроси</p>
            <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
              Често задавани
            </h2>
            <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {sections.map((section, index) => {
              const isOpen = !!expandedSections[index];
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-white shadow-boho border-terracotta/20'
                      : 'bg-white/60 backdrop-blur-sm shadow-soft border-sand/60 hover:shadow-boho'
                  }`}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center gap-4 p-6 md:p-7 text-left cursor-pointer"
                  >
                    {/* Dot indicator */}
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-terracotta' : 'bg-sand'
                      }`}
                    />
                    <span className="serif-head text-lg md:text-xl text-earth flex-1 leading-snug">
                      {section.title}
                    </span>
                    {/* Arrow */}
                    <svg
                      className={`w-5 h-5 text-terracotta/60 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isOpen ? (sectionHeights[index] || 500) : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div
                      ref={(el) => (sectionRefs.current[index] = el)}
                      className="px-6 md:px-7 pb-6 md:pb-7"
                    >
                      <div className="w-full h-px bg-sand/40 mb-5" />
                      <p className="text-cocoa/70 text-base md:text-lg leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <WaveDivider position="bottom" fill="var(--beige-bg)" height={120} overlap={-2} />
    </section>
  );
}

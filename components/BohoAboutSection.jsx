'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';
import Image from 'next/image';

export function BohoAboutSection() {
  return (
    <section
      id="about"
      className="relative bg-coffee overflow-hidden pb-[140px] pt-12 md:pt-20"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-[5%] w-48 h-48 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-40 right-[5%] w-60 h-60 rounded-full bg-desert-rose/8 blur-3xl pointer-events-none" aria-hidden />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 boho-dots opacity-[0.04] pointer-events-none" aria-hidden />

      <div className="container-page py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Images Side */}
          <div className="relative mx-auto w-full max-w-[480px] min-h-[400px] md:min-h-[540px]">
            {/* Main rectangular image */}
            <Parallax translateY={[-3, 3]} easing="easeOutQuad">
              <div className="rounded-2xl overflow-hidden shadow-deep w-[68%]">
                <Image
                  src="/van/_DSC6497.webp"
                  alt="Семейство Gypsy Vans"
                  width={327}
                  height={436}
                  className="w-full aspect-[3/4] object-cover"
                  sizes="(max-width: 768px) 68vw, 327px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI3IiBoZWlnaHQ9IjQzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDUzMzM2Ii8+PC9zdmc+"
                />
              </div>
            </Parallax>

            {/* Overlapping arch image */}
            <Parallax translateY={[6, -6]} easing="easeOutQuad" className="absolute top-20 right-0 w-[55%] z-10">
              <div className="arch-frame overflow-hidden shadow-deep border-4 border-coffee">
                <Image
                  src="/van/_DSC6520.webp"
                  alt="На път с кемпера"
                  width={264}
                  height={352}
                  className="w-full aspect-[3/4] object-cover"
                  sizes="(max-width: 768px) 55vw, 264px"
                />
              </div>
            </Parallax>

            {/* Small circular accent image */}
            <Parallax translateY={[4, -4]} easing="easeOutQuad" className="absolute -bottom-2 left-[25%] z-20">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-terracotta/60 shadow-deep">
                <Image
                  src="/van/_DSC6534.webp"
                  alt="Детайл"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  sizes="96px"
                />
              </div>
            </Parallax>

            {/* Decorative elements */}
            <div className="absolute -top-3 right-[40%] w-14 h-14 rounded-full border border-terracotta/20 pointer-events-none animate-float" aria-hidden />
            <div className="absolute bottom-10 -left-3 w-10 h-10 rounded-full border border-white/10 pointer-events-none" aria-hidden />
          </div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <p className="script-head text-4xl md:text-5xl text-desert-rose mb-2">
              Запознайте се
            </p>
            <h2 className="serif-head text-3xl md:text-[3.2rem] text-white leading-tight mb-6">
              Ние сме Дари, Мето и малката Кая
            </h2>
            <div className="w-16 h-px bg-terracotta/50 mx-auto md:mx-0 mb-6" aria-hidden />
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              Семейство приключенци, които вярват, че най-красивите истории се
              раждат по пътя. След хиляди изминати километри, стотици върхове,
              безброй минути под вода и под звездите, решихме да създадем нещо
              наше: <span className="text-terracotta font-medium">Gypsy Vans</span>.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Нашият Mercedes Sprinter е конвертиран изцяло по наш проект — с
              внимание към всеки детайл, с любов към природата и с желание да
              дадем на другите свободата, която ние самите търсим.
            </p>
            <p className="text-desert-rose/90 text-base md:text-lg leading-relaxed italic mb-8">
              Gypsy Vans не са просто кемперванове под наем. Това е покана да
              излезеш извън рамките, да се свържеш със себе си и с пътя, и да
              създадеш спомени, които топлят цял живот.
            </p>

            {/* Color palette dots — boho accent */}
            <div className="flex gap-3 justify-center md:justify-start" aria-hidden>
              <div className="w-5 h-5 rounded-full bg-terracotta" />
              <div className="w-5 h-5 rounded-full bg-desert-rose" />
              <div className="w-5 h-5 rounded-full bg-sand" />
              <div className="w-5 h-5 rounded-full bg-sage" />
              <div className="w-5 h-5 rounded-full bg-cream" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

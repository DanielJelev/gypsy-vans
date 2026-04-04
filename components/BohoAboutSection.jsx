'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { useLandingAssets } from '../app/contexts/LandingAssetsContext';
import { useState, useEffect } from 'react';

export function BohoAboutSection() {
  const { getAsset, loaded } = useLandingAssets();
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);

  // Reset error states when assets finish loading so Drive URLs aren't
  // permanently blocked by earlier fallback-image 404s.
  useEffect(() => {
    if (loaded) { setErr1(false); setErr2(false); setErr3(false); }
  }, [loaded]);

  const img1 = !err1 && getAsset('image-dari-and-meto') || '/van/image-dari-and-meto.webp';
  const img2 = !err2 && getAsset('image-kaya-in-bed') || '/van/image-kaya-in-bed.webp';
  const img3 = !err3 && getAsset('image-kaya-in-seat') || '/van/image-kaya-in-seat.webp';

  return (
    <section
      id="about"
      className="relative bg-coffee overflow-hidden pb-8 md:pb-[80px] pt-12 md:pt-20"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-[5%] w-48 h-48 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-40 right-[5%] w-60 h-60 rounded-full bg-desert-rose/8 blur-3xl pointer-events-none" aria-hidden />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 boho-dots opacity-[0.04] pointer-events-none" aria-hidden />

      <div className="container-page py-8 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-center md:text-left order-1 md:order-1"
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

          {/* Images Side */}
          <div className="relative mx-auto w-full max-w-[640px] min-h-[520px] md:min-h-[700px] order-2 md:order-2">
            {/* Main rectangular image */}
            <Parallax translateY={[-3, 3]} easing="easeOutQuad">
              <div className="rounded-2xl overflow-hidden shadow-deep w-[80%] md:w-[78%]">
                <Image
                  src={img1}
                  alt="Семейство Gypsy Vans"
                  width={327}
                  height={436}
                  className="w-full aspect-[3/4] object-cover"
                  sizes="(max-width: 768px) 68vw, 327px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI3IiBoZWlnaHQ9IjQzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDUzMzM2Ii8+PC9zdmc+"
                  onError={() => setErr1(true)}
                />
              </div>
            </Parallax>

            {/* Overlapping arch image */}
            <Parallax translateY={[6, -6]} easing="easeOutQuad" className="absolute top-16 right-2 sm:right-0 md:-right-0 w-[60%] sm:w-[60%] md:w-[55%] z-10">
              <div className="arch-frame overflow-hidden shadow-deep border-2 md:border-4 border-sand">
                <Image
                  src={img2}
                  alt="На път с кемпера"
                  width={264}
                  height={352}
                  className="w-full aspect-[3/4] object-cover"
                  sizes="(max-width: 768px) 45vw, 264px"
                  onError={() => setErr2(true)}
                />
              </div>
            </Parallax>

            {/* Small circular accent image */}
            <Parallax translateY={[4, -4]} easing="easeOutQuad" className="absolute -bottom-10 md:-bottom-32 left-[20%] md:left-[25%] z-20">
              <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 md:border-4 border-sand shadow-deep">
                <Image
                  src={img3}
                  alt="Детайл"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  sizes="176px"
                  onError={() => setErr3(true)}
                />
              </div>
            </Parallax>

            {/* Decorative elements */}
            <div className="absolute -top-3 right-[40%] w-14 h-14 rounded-full border border-terracotta/20 pointer-events-none animate-float" aria-hidden />
            <div className="absolute bottom-10 -left-3 w-10 h-10 rounded-full border border-white/10 pointer-events-none" aria-hidden />
          </div>

        </div>
      </div>

    </section>
  );
}

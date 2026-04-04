'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';
import Image from 'next/image';
import { useLandingAssets } from '../app/contexts/LandingAssetsContext';
import { useState, useEffect } from 'react';

export function BohoIntroSection() {
  const { getAsset, loaded } = useLandingAssets();
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);

  // Reset error states when assets finish loading so Drive URLs aren't
  // permanently blocked by earlier fallback-image 404s.
  useEffect(() => {
    if (loaded) { setErr1(false); setErr2(false); }
  }, [loaded]);

  const img1 = !err1 && getAsset('van-image-inside') || '/van/van-image-inside.webp';
  const img2 = !err2 && getAsset('van-image-outside') || '/van/van-image-outside.webp';

  return (
    <section className="relative bg-tan overflow-hidden pb-[140px]">

      <div className="container-page py-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image Side */}
          <div className="relative mx-auto w-full max-w-[380px] md:max-w-[420px] order-2 md:order-1">
            <Parallax translateY={[-4, 4]} easing="easeOutQuad">
                <div className="arch-frame overflow-hidden shadow-deep border-2 md:border-4 border-white">
                <Image
                  src={img1}
                  alt="Gypsy Vans интериор"
                  width={420}
                  height={560}
                  className="w-full aspect-[3/4] object-cover"
                  sizes="(max-width: 768px) 380px, 420px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIwIiBoZWlnaHQ9IjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjYzRhMDg4Ii8+PC9zdmc+"
                  onError={() => setErr1(true)}
                />
              </div>
            </Parallax>

            {/* Small circular overlapping image */}
            <Parallax translateY={[6, -6]} easing="easeOutQuad" className="absolute -bottom-16 md:-bottom-32 -right-4 md:-right-10 z-10">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-deep">
                <Image
                  src={img2}
                  alt="Детайл от кемпера"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  sizes="176px"
                  onError={() => setErr2(true)}
                />
              </div>
            </Parallax>

            {/* Decorative ring */}
          </div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-center md:text-left order-1 md:order-2"
          >
            <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">
              Добре дошли
            </p>
            <h2 className="serif-head text-4xl md:text-6xl text-cocoa leading-tight mb-6">
              Кемперванът – Лукс, уют и свобода в едно
            </h2>
            <div className="flex gap-2.5 justify-center md:justify-start mb-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
            <p className="text-cocoa text-lg md:text-xl leading-relaxed mb-4">
              Нашият <span className="serif-head text-2xl md:text-3xl text-coffee font-bold">Mercedes Sprinter 2020</span> е оборудван с най-висок клас системи
              за комфорт и автономност, така че да се чувстваш у дома, където и
              да си.
            </p>
            <p className="text-cocoa text-lg md:text-xl leading-relaxed mb-8">
              Интериорът е в модерен boho &amp; minimalistic стил – топли натурални
              цветове, качествени естествени материали, меки форми и внимание към
              светлината и атмосферата. Тук уютът среща функционалността, а
              простотата – щастието да се насладиш на пътя.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange border border-orange text-white text-base md:text-lg tracking-widest uppercase hover:bg-terracotta transition-colors group"
            >
              Разгледай отвътре
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </a>
          </motion.div>

        </div>
      </div>

      <WaveDivider fill="var(--beige-bg)" height={140} overlap={-2} />
    </section>
  );
}

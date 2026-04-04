'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';
import Image from 'next/image';

export function BohoTestimonial() {
  return (
    <section className="relative bg-terracotta overflow-hidden pt-[120px] pb-[120px]">
      {/* Top wave — merges from beige section above */}
      <WaveDivider
        fill="var(--beige-bg)"
        height={110}
        position="top"
        overlap={-1}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Giant quote marks */}
        <div className="absolute top-8 left-4 md:top-12 md:left-16 text-white/[0.06] text-[160px] md:text-[260px] leading-none serif-head select-none">
          &ldquo;
        </div>
        <div className="absolute bottom-20 right-4 md:bottom-24 md:right-16 text-white/[0.06] text-[160px] md:text-[260px] leading-none serif-head select-none rotate-180">
          &ldquo;
        </div>
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h2 className="sr-only">Отзив за Gypsy Vans</h2>
            <blockquote>
            <p className="script-head text-2xl md:text-3xl text-white leading-snug mb-8">
              Това е кемпер, създаден за хора, които ценят както свободата, така и комфорта.
            </p>
            </blockquote>

            <Image
              src="/logo-header.svg"
              alt="Gypsy Vans"
              width={180}
              height={28}
              className="mx-auto mb-3 h-6 md:h-7 w-auto brightness-0 invert opacity-80"
            />
            <p className="script-head text-xl md:text-2xl text-cream">
              дом, който те следва навсякъде
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave — merges to beige for pricing section */}
      <WaveDivider fill="var(--beige-bg)" height={120} overlap={-2} />
    </section>
  );
}

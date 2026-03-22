'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';

export function BohoTestimonial() {
  return (
    <section className="relative bg-terracotta overflow-hidden pt-[100px] pb-[160px]">
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

        {/* Floating concentric circles */}
        <Parallax translateY={[-20, 20]} className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-40">
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-3 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/5" />
          </div>
        </Parallax>

        <Parallax translateY={[15, -15]} className="absolute -right-10 bottom-[30%] opacity-30">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-2 rounded-full border border-white/10" />
          </div>
        </Parallax>
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="serif-head text-xl md:text-3xl text-white leading-relaxed mb-8 italic font-normal">
              Това е кемпер, създаден за хора, които ценят както свободата, така
              и комфорта.
            </p>

            <div className="w-12 h-px bg-cream/40 mx-auto mb-4" aria-hidden />

            <p className="text-cream text-lg md:text-xl serif-head font-medium">
              Gypsy Vans <span className="text-cream/60 font-normal">— дом, който те следва навсякъде.</span>
            </p>

            {/* Decorative color dots */}
            <div className="flex gap-2 justify-center mt-8" aria-hidden>
              <div className="w-3 h-3 rounded-full bg-cream/20" />
              <div className="w-3 h-3 rounded-full bg-cream/30" />
              <div className="w-3 h-3 rounded-full bg-cream/40" />
              <div className="w-3 h-3 rounded-full bg-cream/30" />
              <div className="w-3 h-3 rounded-full bg-cream/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave — merges to beige for pricing section */}
      <WaveDivider fill="var(--beige-bg)" height={120} overlap={-2} />
    </section>
  );
}

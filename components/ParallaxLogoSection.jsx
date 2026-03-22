'use client';

import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';

export function ParallaxLogoSection({
  heightVh = 130,
  rotateDeg = 720,
  toScale = 0.5,
  onCtaClick,
}) {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center gap-10"
      style={{ height: `${heightVh}vh` }}
    >
      {/* Background banner image */}
      <img
        src="/van/_DSC6486.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Tinted overlay to keep logo + CTA readable */}
      <div className="absolute inset-0 bg-tan/60" />

      {/* Top wave from about section */}
      <WaveDivider fill="var(--coffee)" height={140} position="top" overlap={-1} />

      {/* Logo */}
      <Parallax
        rotate={[0, rotateDeg]}
        scale={[1, toScale]}
        opacity={[1, 0.7]}
        className="pointer-events-none"
      >
        <img
          src="/Logo-04.svg"
          alt="Logo"
          className="w-[600px] h-auto will-t"
        />
      </Parallax>

      {/* CTA below logo */}
      <button
        type="button"
        onClick={onCtaClick}
        className="relative z-10 rounded-full bg-orange border border-orange px-14 py-5 text-white text-lg md:text-xl tracking-widest uppercase"
      >
        Резервирай Сега
      </button>
       {/* Wave transition to services */}
      <WaveDivider fill="var(--beige-bg)" height={140} overlap={-2} />
    </section>
  );
}

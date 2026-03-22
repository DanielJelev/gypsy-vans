'use client';

import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';

export function ParallaxLogoSection({
  heightVh = 100,
  rotateDeg = 720,
  toScale = 0.5,
  onCtaClick,
}) {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center gap-10 bg-tan"
      style={{ height: `${heightVh}vh` }}
    >
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

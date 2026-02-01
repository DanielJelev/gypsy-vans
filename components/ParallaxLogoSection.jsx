'use client';

import { Parallax } from 'react-scroll-parallax';

export function ParallaxLogoSection({
  heightVh = 100,
  rotateDeg = 720,
  toScale = 0.5,
  onCtaClick,
}) {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center bg-tan"
      style={{ height: `${heightVh}vh` }}
    >
      {/* Logo (keep it behind CTA) */}
      <Parallax
        rotate={[0, rotateDeg]}
        scale={[1, toScale]}
        opacity={[1, 0.7]}
        className="pointer-events-none z-0"
      >
        <img
          src="/logo-04.svg"
          alt="Logo"
          className="w-[600px] h-auto will-t"
        />
      </Parallax>

      {/* CTA (force on top) */}
      <div className="absolute bottom-[10%] left-0 right-0 flex justify-center px-6">
        <button
          type="button"
          onClick={onCtaClick}
          className="
            bg-coffee
            text-[var(--beige-bg)]
            px-14 py-5
            text-lg md:text-xl
            font-medium
            rounded-xl
            border border-white/10
            transition-transform ease-soft
            hover:-translate-y-0.5
            active:translate-y-0
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--beige-bg)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          "
        >
          Резервирай Сега
        </button>
      </div>
    </section>
  );
}

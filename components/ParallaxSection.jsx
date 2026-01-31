'use client';

import { Parallax } from 'react-scroll-parallax';
import { Reveal } from './Reveal';

export function ParallaxSection({
  image,
  eyebrow,
  title,
  sub,
  align = 'center',          // 'left' | 'center' | 'right'
  heightVh = 92,
  overlayYvh = 18,
  overlayAlign = 'center',   // 'top' | 'center' | 'bottom'
  overlayMaxW = 46,
  travelPx = 260,
  speed = 0.35,
  darken = 0.45,
  logo = '/logo-gypsy-white.svg',
  revealThreshold = 0.35,
}) {
  if (!image) return null;

  // horizontal alignment
  const justifyAlign =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';

  // vertical alignment
  const verticalAlign =
    overlayAlign === 'top'
      ? 'items-start'
      : overlayAlign === 'bottom'
      ? 'items-end'
      : 'items-center';

  const fromY = -travelPx * speed;
  const toY = travelPx * speed;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: `${heightVh}vh` }}
    >
      {/* Parallax background */}
      <Parallax
        translateY={[fromY, toY]}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(0,0,0,${darken + 0.15}),
                rgba(0,0,0,${darken})
              )`,
            }}
          />
        </div>
      </Parallax>

      {/* Content overlay */}
      <div
        className={`relative flex ${verticalAlign} ${justifyAlign} px-6 md:px-10 py-16 md:py-20 w-full h-full`}
      >
        <Reveal
          threshold={revealThreshold}
          className="text-white drop-shadow-lg w-full"
        >
          <div
            className="mx-auto"
            style={{
              marginTop: `${overlayYvh}vh`,
              maxWidth: `min(${overlayMaxW}ch, 60vw)`,
            }}
          >
            {logo && (
              <div className="flex justify-center mb-6">
                <img
                  src={logo}
                  alt="Gypsy Vans logo"
                  className="w-12 h-12 md:w-14 md:h-14 opacity-95"
                />
              </div>
            )}

            {eyebrow && (
              <p className="uppercase tracking-[0.25em] text-[11px] md:text-[12px] text-white/80 mb-2">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="font-head font-light leading-[0.95] text-[9vw] md:text-[6.4vw] lg:text-[4.6vw]">
                {title}
              </h2>
            )}

            {sub && (
              <p className="mt-4 text-[14px] md:text-[16px] text-white/92">
                {sub}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

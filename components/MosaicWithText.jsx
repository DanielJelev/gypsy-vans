'use client';

import { Parallax } from 'react-scroll-parallax';
import { Reveal } from './Reveal';
import { Stagger } from './Stagger';

/**
 * MosaicWithText
 * Uses react-scroll-parallax for subtle image motion.
 */
export function MosaicWithText({
  leftImg,
  rightTopImg,
  rightBottomImg,
  eyebrow,
  title,
  body,
  reverse = false,
}) {
  const gridDir = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className="relative pt-16 md:pt-24 pb-24 overflow-hidden">
      <div className={`mx-auto max-w-7xl px-6 flex flex-col ${gridDir} gap-10 md:gap-12 items-stretch`}>
        {/* Left tall image */}
        <div className="md:w-4/12">
          <Reveal yOffset={10}>
            <Parallax translateY={[-18, 12]} className="h-full">
              <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60 h-full">
                <div className="aspect-[3/4] md:aspect-[11/16] h-full">
                  <img src={leftImg} alt="" className="w-full h-full object-cover" />
                </div>
              </figure>
            </Parallax>
          </Reveal>
        </div>

        {/* Center text */}
        <div className="md:w-4/12 flex items-center">
          <div className="w-full text-center md:text-left">
            <Stagger step={90}>
              {eyebrow && (
                <Reveal yOffset={10}>
                  <p className="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70 mb-3">
                    {eyebrow}
                  </p>
                </Reveal>
              )}
              <Reveal yOffset={10}>
                <h2 className="accent-head text-3xl md:text-5xl text-ink/90 leading-tight">
                  {title}
                </h2>
              </Reveal>
              {body && (
                <Reveal yOffset={10}>
                  <p className="mt-4 text-cocoa/80 text-base md:text-lg">
                    {body}
                  </p>
                </Reveal>
              )}
            </Stagger>
          </div>
        </div>

        {/* Right stacked images */}
        <div className="md:w-4/12 grid gap-5 md:gap-6 -mt-8 md:-mt-10">
          <Reveal yOffset={10}>
            <Parallax translateY={[-10, 8]}>
              <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60">
                <div className="aspect-[16/10] md:aspect-[16/9]">
                  <img src={rightTopImg} alt="" className="w-full h-full object-cover" />
                </div>
              </figure>
            </Parallax>
          </Reveal>
          <Reveal yOffset={12}>
            <Parallax translateY={[-4, 12]}>
              <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60">
                <div className="aspect-[16/10] md:aspect-[16/9]">
                  <img src={rightBottomImg} alt="" className="w-full h-full object-cover" />
                </div>
              </figure>
            </Parallax>
          </Reveal>
        </div>
      </div>

      {/* soft glow */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-amber-100/18 via-amber-50/0 to-transparent" />
    </section>
  );
}

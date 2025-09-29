'use client';
import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Stagger } from './Stagger';

/**
 * MosaicWithText — separate images, center text, subtle micro-parallax
 * Props: leftImg, rightTopImg, rightBottomImg, eyebrow, title, body, reverse?
 */
export function MosaicWithText({ leftImg, rightTopImg, rightBottomImg, eyebrow, title, body, reverse = false }) {
  const ref = useRef(null);
  const tileRefs = useRef([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const center = rect.top + rect.height / 2;
        const progress = (center - vh/2) / vh; // -1..1
        // Slightly stronger & varied travel
        const speeds = [26, 36, 30]; // px
        tileRefs.current.forEach((node, idx) => {
          if (!node) return;
          const y = progress * -speeds[idx];
          node.style.transform = `translateY(${y}px)`;
        });
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="relative pt-16 md:pt-24 pb-24 overflow-hidden">
      <div className={"mx-auto max-w-7xl px-6 grid grid-cols-12 gap-5 md:gap-6 items-start " + (reverse ? "md:[&>div:nth-child(1)]:order-2 md:[&>div:nth-child(2)]:order-1 md:[&>div:nth-child(3)]:order-3" : "")}>
        {/* Left tall image */}
        <div ref={el => tileRefs.current[0] = el} className="col-span-12 md:col-span-4">
          <Reveal yOffset={10}>
            <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60">
              <div className="aspect-[3/4] md:aspect-[11/16]">
                <img src={leftImg} alt="" className="w-full h-full object-cover" />
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Center text */}
        <div className="col-span-12 md:col-span-4 flex items-center">
          <div className="w-full text-center md:text-left">
            <Stagger step={90}>
              <Reveal yOffset={10}>
                {eyebrow && <p className="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70 mb-3">{eyebrow}</p>}
              </Reveal>
              <Reveal yOffset={10}>
                <h2 className="accent-head text-3xl md:text-5xl text-ink/90 leading-tight">{title}</h2>
              </Reveal>
              {body && (
                <Reveal yOffset={10}>
                  <p className="mt-4 text-cocoa/80 text-base md:text-lg">{body}</p>
                </Reveal>
              )}
            </Stagger>
          </div>
        </div>

        {/* Right stack */}
        <div className="col-span-12 md:col-span-4 grid gap-5 md:gap-6 -mt-12 md:-mt-16">
          <div ref={el => tileRefs.current[1] = el}>
            <Reveal yOffset={12}>
              <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60">
                <div className="aspect-[16/10] md:aspect-[16/9]">
                  <img src={rightTopImg} alt="" className="w-full h-full object-cover" />
                </div>
              </figure>
            </Reveal>
          </div>
          <div ref={el => tileRefs.current[2] = el}>
            <Reveal yOffset={12}>
              <figure className="rounded-l overflow-hidden shadow-soft border border-pebble/60">
                <div className="aspect-[16/10] md:aspect-[16/9]">
                  <img src={rightBottomImg} alt="" className="w-full h-full object-cover" />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 right-0 bottom-[-2rem] h-56 bg-[radial-gradient(60%_80%_at_20%_100%,rgba(196,122,90,0.18),transparent_60%),radial-gradient(70%_90%_at_40%_100%,rgba(250,213,82,0.24),transparent_60%)]" />
    </section>
  );
}

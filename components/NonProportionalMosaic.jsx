'use client';
import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Stagger } from './Stagger';

/**
 * NonProportionalMosaic
 * Overlapping, non-uniform tiles with a centered text block.
 * Props:
 *  - leftImg, rightTopImg, rightBottomImg
 *  - eyebrow, title, body
 *  - flip?: mirror the layout horizontally on desktop for variety
 */
export function NonProportionalMosaic({ leftImg, rightTopImg, rightBottomImg, eyebrow, title, body, flip = false }) {
  const ref = useRef(null);
  const tiles = useRef([]);

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
        const travel = [28, 42, 34, 18]; // px for [left, rightTop, rightBottom, text]
        tiles.current.forEach((node, idx) => {
          if (!node) return;
          const y = progress * -travel[idx];
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
    <section ref={ref} className="relative py-16 md:py-24">
      {/* Mobile/tablet layout: stacked grid for reliability */}
      <div className="mx-auto max-w-7xl px-6 md:hidden">
        <div className="grid gap-5">
          <Reveal><img src={leftImg} alt="" className="w-full rounded-l border border-pebble/60 shadow-soft" /></Reveal>
          <Reveal><img src={rightTopImg} alt="" className="w-full rounded-l border border-pebble/60 shadow-soft" /></Reveal>
          <Reveal><img src={rightBottomImg} alt="" className="w-full rounded-l border border-pebble/60 shadow-soft" /></Reveal>
          <Stagger>
            {eyebrow && <Reveal><p className="uppercase tracking-[0.25em] text-[12px] text-ink/70">{eyebrow}</p></Reveal>}
            <Reveal><h2 className="accent-head text-3xl text-ink/90 leading-tight">{title}</h2></Reveal>
            {body && <Reveal><p className="text-cocoa/80 text-base">{body}</p></Reveal>}
          </Stagger>
        </div>
      </div>

      {/* Desktop composition: overlapping, non-proportional */}
      <div className={"hidden md:block mx-auto max-w-7xl px-6"}>
        <div className={"relative"} style={{ height: '78vh', minHeight: 560 }}>
          {/* Optional flip: mirror the container, then unflip children */}
          <div className={flip ? "absolute inset-0 scale-x-[-1]" : "absolute inset-0"}>
            {/* Left tall tile */}
            <div ref={el => tiles.current[0] = el}
                 className="absolute rounded-l overflow-hidden shadow-soft border border-pebble/60 will-t"
                 style={{ left: '0%', top: '8%', width: '28%', height: '68%' }}>
              <img src={leftImg} alt="" className={"w-full h-full object-cover " + (flip ? "scale-x-[-1]" : "")} />
            </div>

            {/* Right top wide tile */}
            <div ref={el => tiles.current[1] = el}
                 className="absolute rounded-l overflow-hidden shadow-soft border border-pebble/60 will-t"
                 style={{ left: '46%', top: '-4%', width: '44%', height: '40%' }}>
              <img src={rightTopImg} alt="" className={"w-full h-full object-cover " + (flip ? "scale-x-[-1]" : "")} />
            </div>

            {/* Right bottom medium tile */}
            <div ref={el => tiles.current[2] = el}
                 className="absolute rounded-l overflow-hidden shadow-soft border border-pebble/60 will-t"
                 style={{ left: '54%', top: '44%', width: '34%', height: '44%' }}>
              <img src={rightBottomImg} alt="" className={"w-full h-full object-cover " + (flip ? "scale-x-[-1]" : "")} />
            </div>

            {/* Center text block */}
            <div ref={el => tiles.current[3] = el}
                 className={"absolute flex items-center " + (flip ? "scale-x-[-1]" : "")}
                 style={{ left: '28%', top: '22%', width: '32%', height: '56%' }}>
              <div className="bg-white/80 backdrop-blur-[2px] rounded-l shadow-soft px-6 py-6 border border-pebble/50">
                <Stagger step={90}>
                  {eyebrow && <Reveal><p className="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70">{eyebrow}</p></Reveal>}
                  <Reveal><h2 className="accent-head text-4xl lg:text-5xl text-ink/90 leading-tight">{title}</h2></Reveal>
                  {body && <Reveal><p className="mt-3 text-cocoa/80 text-base lg:text-lg">{body}</p></Reveal>}
                </Stagger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

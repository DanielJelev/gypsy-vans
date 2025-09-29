'use client';
import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Stagger } from './Stagger';

/**
 * ReplicaSection — absolute-positioned layers with per-layer parallax + reveal.
 * props:
 *  - heightVh: number (section height in vh)
 *  - layers: Array<{
 *      type: 'image' | 'text' | 'logo',
 *      src?: string,
 *      html?: string,           // for text
 *      style: { left: string, top: string, width: string, height?: string },
 *      z?: number,
 *      parallax?: { travelPx?: number, speed?: number },
 *      reveal?: { threshold?: number, delay?: number, yOffset?: number },
 *      className?: string
 *    }>
 */
export function ReplicaSection({ heightVh = 78, layers = [] }) {
  const root = useRef(null);
  const nodes = useRef([]);

  // parallax
  useEffect(() => {
    const el = root.current;
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
        nodes.current.forEach((n) => {
          if (!n) return;
          const travel = n.dataset.travel ? parseFloat(n.dataset.travel) : 0;
          const speed = n.dataset.speed ? parseFloat(n.dataset.speed) : 1;
          if (travel !== 0) {
            const y = progress * -travel * speed;
            n.style.transform = `translateY(${y}px)`;
          }
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
    <section ref={root} className="relative w-full" style={{ height: `${heightVh}vh`, minHeight: 560 }}>
      <div className="absolute inset-0">
        {layers.map((L, i) => {
          const baseStyle = { position: 'absolute', ...L.style, zIndex: L.z ?? 1 };
          const travel = L?.parallax?.travelPx ?? 0;
          const speed = L?.parallax?.speed ?? 1;
          const commonProps = {
            ref: (el) => (nodes.current[i] = el),
            'data-travel': String(travel),
            'data-speed': String(speed),
            className: 'will-change-transform ' + (L.className || ''),
            style: baseStyle
          };
          if (L.type === 'image') {
            return (
              <div key={i} {...commonProps}>
                <img src={L.src} alt="" className="w-full h-full object-cover rounded-l border border-pebble/60 shadow-soft" />
              </div>
            );
          }
          if (L.type === 'logo') {
            return (
              <div key={i} {...commonProps}>
                <img src={L.src || '/logo-gypsy-white.png'} alt="" className="w-full h-full object-contain" />
              </div>
            );
          }
          // text
          const r = L.reveal || {};
          return (
            <div key={i} {...commonProps}>
              <Reveal threshold={r.threshold ?? 0.25} delay={r.delay ?? 0} yOffset={r.yOffset ?? 10}>
                <div className={"bg-white/80 backdrop-blur-[2px] rounded-l shadow-soft px-6 py-6 border border-pebble/50 text-ink/90 " + (L.className || '')}
                     dangerouslySetInnerHTML={{ __html: L.html || '' }} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

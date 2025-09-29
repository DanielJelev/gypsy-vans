'use client';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

/**
 * ParallaxSection
 * Props:
 *  - image: string (required)
 *  - eyebrow?: string
 *  - title: string
 *  - sub?: string
 *  - align?: 'left'|'center'|'right' (default 'center')
 *  - heightVh?: number (default 92)
 *  - overlayYvh?: number (vertical top offset in vh; default 18)
 *  - overlayAlign?: 'top'|'center'|'bottom' (default 'center')
 *  - overlayMaxW?: number (in ch; default 46)
 *  - travelPx?: number (bg travel in px; default 220)
 *  - speed?: number multiplier (default 0.35)
 *  - revealThreshold?: number (0..1; default 0.25)
 */
export function ParallaxSection({
  image, eyebrow, title, sub,
  align = 'center',
  heightVh = 92,
  overlayYvh = 18,
  overlayMaxW = 46,
  overlayAlign = 'center',
  travelPx = 220,
  speed = 0.35,
  revealThreshold = 0.25,
}) {
  const ref = useRef(null);
  const bgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => setInView(e.isIntersecting)),
      { rootMargin: '30% 0px 30% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const el = ref.current, bg = bgRef.current;
        if (!el || !bg) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const center = rect.top + rect.height / 2;
        const progress = (center - vh/2) / vh; // -1..1
        const y = progress * -travelPx * speed;
        bg.style.transform = `translateY(${y}px) scale(1.08)`;
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
  }, [inView, speed, travelPx]);

  const justify = align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center';

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ minHeight: `${heightVh}vh` }}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <img ref={bgRef} src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/40" />
      </div>

      {/* Overlay */}
      <div className={`relative mx-auto max-w-7xl px-6 h-full flex ${justify} justify-center`}>
        <Reveal threshold={revealThreshold} className="text-white drop-shadow" >
          <div className="mx-auto" style={{ marginTop: `${overlayYvh}vh`, marginBottom: `${overlayYvh}vh`, maxWidth: `min(${overlayMaxW}ch, 60vw)` }}>
            <div className="flex justify-center mb-6">
              <img src="/logo-gypsy-white.png" alt="Gypsy Vans logo" className="w-12 h-12 md:w-14 md:h-14 opacity-95" />
            </div>
            {eyebrow && <p className="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-white/80">{eyebrow}</p>}
            <h2 className="font-head font-light leading-[0.95] text-[10vw] md:text-[7vw] lg:text-[6.5vw]">{title}</h2>
            {sub && <p className="mt-4 text-[15px] md:text-[17px] text-white/90">{sub}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

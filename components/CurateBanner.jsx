'use client';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

/** Parallax Curate Banner — stronger background parallax; text reveals on enter */
export function CurateBanner() {
  const ref = useRef(null);
  const bgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => setInView(e.isIntersecting));
    }, { rootMargin: '30% 0px 30% 0px' });
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
        const y = progress * -180 * 0.5; // stronger parallax
        bg.style.transform = `translateY(${y}px) scale(1.1)`;
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
  }, [inView]);

  return (
    <section ref={ref} className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <img ref={bgRef} src="/eloura/center.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/40" />
      </div>

      {/* Text content; appears when in view */}
      <div className="relative mx-auto max-w-5xl px-6 h-full flex items-center justify-center text-center">
        <Reveal threshold={0.35} className="text-white drop-shadow">
          <h2 className="accent-head text-4xl md:text-6xl font-medium text-white">
            We Curate Unforgettable Luxury Escapes.
          </h2>
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            At Eloura Journeys, every trip is crafted with care, creativity, and a deep understanding of what luxury means to you.
            From the first conversation to your return home, we curate experiences that are as seamless as they are unforgettable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

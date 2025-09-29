'use client';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

export function Carousel({ items = ['/eloura/slide1.jpg','/eloura/slide2.jpg','/eloura/slide3.jpg'], interval = 5000 }) {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const startX = useRef(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [interval, items && items.length]);

  const goto = (n) => {
    const len = items ? items.length : 0;
    if (len === 0) return;
    setI(((n % len) + len) % len);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-l shadow-soft border border-pebble/60"
            onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - startX.current;
              if (dx > 40) goto(i - 1);
              if (dx < -40) goto(i + 1);
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {items.map((src, idx) => (
                <img key={idx} src={src} alt="" className="w-full h-[60vh] object-cover flex-shrink-0" />
              ))}
            </div>
            {/* Controls */}
            <button onClick={() => goto(i - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">‹</button>
            <button onClick={() => goto(i + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">›</button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {items.map((_, idx) => (
                <span
                  key={idx}
                  className={'h-2 w-2 rounded-full ' + (idx === i ? 'bg-white' : 'bg-white/50')}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

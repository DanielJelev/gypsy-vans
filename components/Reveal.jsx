'use client';
import { useEffect, useRef, useState } from 'react';

/** Intersection-based reveal with optional delay and y offset */
export function Reveal({ children, threshold = 0.22, delay = 0, yOffset = 8, className = '' }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setShow(true);
      });
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const style = {
    transition: `opacity 700ms var(--ease-smooth) ${delay}ms, transform 700ms var(--ease-smooth) ${delay}ms`,
    transform: show ? 'translateY(0)' : `translateY(${yOffset}px)`,
    opacity: show ? 1 : 0
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

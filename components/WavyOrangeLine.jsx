'use client';

import { useEffect, useRef, useState } from 'react';

export function WavyOrangeLine() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const main = ref.current?.parentElement;
      if (main) setHeight(main.scrollHeight);
    };
    update();
    window.addEventListener('resize', update);
    // Re-measure after images/fonts load
    window.addEventListener('load', update);
    // Also re-measure after a short delay for lazy content
    const timer = setTimeout(update, 2000);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('load', update);
      clearTimeout(timer);
    };
  }, []);

  if (!height) return <div ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden />;

  // Build a smooth continuous wavy path with only round curves, no sharp points.
  // Uses quadratic bezier (S command) for seamless rounded transitions.
  // Hugs the right side of the page.
  const segments = Math.ceil(height / 1000);
  const segH = height / segments;

  const points = [];
  for (let i = 0; i <= segments; i++) {
    // Alternate x in pixel coords (~1050–1320 range on a 1440 canvas = right edge)
    const x = i % 2 === 0 ? 1300 : 1060;
    points.push({ x, y: i * segH });
  }

  // Build path using smooth cubic beziers (S) so every joint is rounded
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    // Control points create round arcs — first control at prev.x, second at curr.x
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 40 }}
      aria-hidden
    >
      <svg
        className="absolute top-0 left-0"
        style={{ height, width: '100%' }}
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={d}
          stroke="var(--orange, #ef432a)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

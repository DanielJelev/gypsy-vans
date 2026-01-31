'use client';

import { useEffect, useMemo, useState } from 'react';

/* =======================
   PATH DEFINITIONS
   ======================= */

const PATHS = {
  // Desktop – more frequent
  freq6:
    'M0,60 C120,28 240,92 360,60 C480,28 600,92 720,60 C840,28 960,92 1080,60 C1200,28 1320,92 1440,60 L1440,120 L0,120 Z',

  // Mobile – calmer
  freq4Mobile:
    'M0,60 C180,28 360,92 540,60 C720,28 900,92 1080,60 C1260,28 1350,88 1440,60 L1440,120 L0,120 Z',

  // Backward compatibility
  smooth:
    'M0,60 C200,25 400,95 600,60 C800,25 1000,95 1200,60 C1320,35 1380,75 1440,60 L1440,120 L0,120 Z',

  default:
    'M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1350,90 1440,60 L1440,120 L0,120 Z',
};

/* =======================
   MOBILE DETECTION
   ======================= */

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, [breakpoint]);

  return isMobile;
}

/* =======================
   COMPONENT
   ======================= */

export function WaveDivider({
  fill = 'var(--beige-bg)',
  height = 110,
  heightMd = 150,

  position = 'bottom', // 'bottom' | 'top'
  flip = false,

  // Desktop variant
  variant = 'freq6',

  zIndex = 1,
  className = '',

  overlap = -1,
  overlapMd = -1,

  mode = 'absolute', // 'absolute' | 'fixed'
}) {
  const isMobile = useIsMobile(768);

  // ✅ Automatically calmer wave on mobile
  const effectiveVariant = useMemo(() => {
    return isMobile ? 'freq4Mobile' : variant;
  }, [isMobile, variant]);

  const d = PATHS[effectiveVariant] ?? PATHS.freq6;

  const isTop = position === 'top';
  const shouldFlip = flip || isTop;
  const posClass = mode === 'fixed' ? 'fixed' : 'absolute';

  return (
    <div
      className={`${posClass} left-0 w-full pointer-events-none ${className}`}
      style={{
        zIndex,
        ...(isTop ? { top: overlap } : { bottom: overlap }),
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full block"
        style={{
          height,
          transform: shouldFlip ? 'scaleY(-1)' : undefined,
          transformOrigin: 'center',
        }}
      >
        <path d={d} fill={fill} />
      </svg>

      <style jsx>{`
        @media (min-width: 768px) {
          div {
            ${isTop ? `top: ${overlapMd}px;` : `bottom: ${overlapMd}px;`}
          }
          svg {
            height: ${heightMd}px;
          }
        }
      `}</style>
    </div>
  );
}

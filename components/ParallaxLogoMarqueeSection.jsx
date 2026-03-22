'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WaveDivider } from './WaveDivider';

export function ParallaxLogoMarqueeSection({
  heightVh = 90,

  fromXvw = -55,
  toXvw = 55,

  rotateDeg = 540,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Logo motion
  const x = useTransform(scrollYProgress, [0, 1], [`${fromXvw}vw`, `${toXvw}vw`]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateDeg]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: `${heightVh}vh` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Logo */}
        <motion.img
          src="/Logo-04.svg"
          alt="Logo"
          style={{
            x,
            rotate,
            width: 'clamp(164px, 18vw, 320px)',
            willChange: 'transform',
            transform: 'translateZ(0)',
            pointerEvents: 'none',
          }}
        />
      </div>
       <WaveDivider
        fill="var(--coffee)"
        height={150}
        frequency={4}
        amplitude={35}
        baseline={65}
        overlap={-60}
      />
    </section>
  );
}

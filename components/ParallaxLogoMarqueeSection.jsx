'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WaveDivider } from './WaveDivider';

export function ParallaxLogoMarqueeSection({
  heightVh = 90,

  fromXvw = -55,
  toXvw = 55,

  rotateDeg = 540,

  revealStart = 0.03,
  revealEnd = 0.60,

  title = 'За Gypsy Vans - Нашата история',
  body = 'Crafted vans designed for freedom, comfort, and the long road ahead.',
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Logo motion
  const x = useTransform(scrollYProgress, [0, 1], [`${fromXvw}vw`, `${toXvw}vw`]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateDeg]);

  // Reveal progress
  const revealProgress = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);

  // Soft left->right reveal using a gradient mask.
  // We grow the mask width from 0% to 120% so it fully covers and leaves a soft edge.
  const maskSize = useTransform(revealProgress, [0, 1], ['0% 100%', '120% 100%']);

  // Optional: very subtle overall fade-in too (keeps it smooth)
  const textOpacity = useTransform(revealProgress, [0, 0.15, 1], [0, 1, 1]);
  const textX = useTransform(revealProgress, [0, 1], [-12, 0]);

  // A soft-edge mask: opaque on the left, fades to transparent near the right edge.
  // The "edge softness" is controlled by the stop positions (85% -> 100%).
  const softMask = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)';

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        height: `${heightVh}vh`,
        paddingTop: 'min(6vh, 56px)',
        paddingBottom: 'min(6vh, 56px)',
      }}
    >
      <div className="absolute inset-0 grid place-items-center">
        {/* Text (soft revealed) */}
        <div className="relative z-10 w-full px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* <motion.div
              style={{
                opacity: textOpacity,
                x: textX,

                // ✅ soft reveal instead of "knife cut"
                WebkitMaskImage: softMask,
                maskImage: softMask,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
                maskPosition: 'left center',
                WebkitMaskSize: maskSize,
                maskSize: maskSize,
              }}
            > */}
            <h2 className="accent-head text-4xl md:text-6xl font-medium text-coffee">
                {title}
              </h2>
            {/* </motion.div> */}
          </div>
        </div>

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

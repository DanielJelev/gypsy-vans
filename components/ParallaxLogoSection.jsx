'use client';

import { Parallax } from 'react-scroll-parallax';

export function ParallaxLogoSection({
  heightVh = 100,
  rotateDeg = 720,
  toScale = 0.5,
  caption,
}) {
  return (
    <section
      style={{
        height: `${heightVh}vh`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Parallax
        rotate={[0, rotateDeg]}
        scale={[1, toScale]}
        opacity={[1, 0.7]}
      >
        <img
          src="/logo-04.svg"
          alt="Logo"
          style={{
            width: '700px',
            height: 'auto',
            willChange: 'transform',
          }}
        />
      </Parallax>

      {caption && (
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            opacity: 0.6,
            fontSize: '0.9rem',
          }}
        >
          {caption}
        </div>
      )}
    </section>
  );
}

'use client';

import { Parallax } from 'react-scroll-parallax';
import { Reveal } from './Reveal';

/**
 * ReplicaSection
 * Absolute-positioned layers, each optionally wrapped in react-scroll-parallax.
 */
export function ReplicaSection({
  heightVh = 78,
  layers = [],
}) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: `${heightVh}vh`, minHeight: 560 }}
    >
      <div className="absolute inset-0">
        {layers.map((L, i) => {
          const baseStyle = {
            position: 'absolute',
            ...(L.style || {}),
            zIndex: L.z ?? 1,
          };
          const travel = L?.parallax?.travelPx ?? 0;
          const speed = L?.parallax?.speed ?? 1;
          const hasParallax = travel !== 0;

          const fromY = -travel * speed;
          const toY = travel * speed;

          const content = (() => {
            if (L.type === 'image') {
              return (
                <div className={L.className || ''} style={{ width: '100%', height: '100%' }}>
                  <img
                    src={L.src}
                    alt=""
                    className="w-full h-full object-cover rounded-l border border-pebble/60 shadow-soft"
                  />
                </div>
              );
            }

            if (L.type === 'logo') {
              return (
                <div className={L.className || ''} style={{ width: '100%', height: '100%' }}>
                  <img
                    src={L.src || '/logo-gypsy-white.png'}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            }

            // text layer
            const r = L.reveal || {};
            return (
              <Reveal
                threshold={r.threshold ?? 0.25}
                delay={r.delay ?? 0}
                yOffset={r.yOffset ?? 10}
              >
                <div
                  className={
                    'bg-white/80 backdrop-blur-[2px] rounded-l shadow-soft px-6 py-6 border border-pebble/50 text-ink/90 ' +
                    (L.className || '')
                  }
                  dangerouslySetInnerHTML={{ __html: L.html || '' }}
                />
              </Reveal>
            );
          })();

          if (hasParallax) {
            return (
              <Parallax
                key={i}
                translateY={[fromY, toY]}
                className="will-change-transform"
                style={baseStyle}
              >
                {content}
              </Parallax>
            );
          }

          return (
            <div
              key={i}
              className={L.className || ''}
              style={baseStyle}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

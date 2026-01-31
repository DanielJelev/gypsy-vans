'use client';

import { Parallax } from 'react-scroll-parallax';
import { Reveal } from './Reveal';
import { Stagger } from './Stagger';

/**
 * NonProportionalMosaic
 * Overlapping, non-uniform tiles driven by react-scroll-parallax.
 */
export function NonProportionalMosaic({
  leftImg,
  rightTopImg,
  rightBottomImg,
  eyebrow,
  title,
  body,
  flip = false,
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Mobile/tablet: simple stacked layout */}
      <div className="mx-auto max-w-7xl px-6 md:hidden">
        <div className="grid gap-5">
          <Reveal>
            <img
              src={leftImg}
              alt=""
              className="w-full rounded-l border border-pebble/60 shadow-soft"
            />
          </Reveal>
          <Reveal>
            <img
              src={rightTopImg}
              alt=""
              className="w-full rounded-l border border-pebble/60 shadow-soft"
            />
          </Reveal>
          <Reveal>
            <img
              src={rightBottomImg}
              alt=""
              className="w-full rounded-l border border-pebble/60 shadow-soft"
            />
          </Reveal>
          <Stagger>
            {eyebrow && (
              <Reveal>
                <p className="uppercase tracking-[0.25em] text-[12px] text-ink/70">
                  {eyebrow}
                </p>
              </Reveal>
            )}
            <Reveal>
              <h2 className="accent-head text-3xl text-ink/90 leading-tight">
                {title}
              </h2>
            </Reveal>
            {body && (
              <Reveal>
                <p className="text-cocoa/80 text-base">
                  {body}
                </p>
              </Reveal>
            )}
          </Stagger>
        </div>
      </div>

      {/* Desktop: overlapping composition with parallax */}
      <div className="hidden md:block mx-auto max-w-7xl px-6">
        <div
          className="relative"
          style={{ height: '78vh', minHeight: 560 }}
        >
          <div className={flip ? 'absolute inset-0 scale-x-[-1]' : 'absolute inset-0'}>
            {/* Left tall tile */}
            <Parallax translateY={[-28, 18]} className="absolute will-change-transform"
              style={{ left: '0%', top: '8%', width: '28%', height: '68%' }}>
              <div className="rounded-l overflow-hidden shadow-soft border border-pebble/60 w-full h-full">
                <img
                  src={leftImg}
                  alt=""
                  className={'w-full h-full object-cover ' + (flip ? 'scale-x-[-1]' : '')}
                />
              </div>
            </Parallax>

            {/* Right top wide tile */}
            <Parallax translateY={[-36, 22]} className="absolute will-change-transform"
              style={{ left: '46%', top: '-4%', width: '44%', height: '40%' }}>
              <div className="rounded-l overflow-hidden shadow-soft border border-pebble/60 w-full h-full">
                <img
                  src={rightTopImg}
                  alt=""
                  className={'w-full h-full object-cover ' + (flip ? 'scale-x-[-1]' : '')}
                />
              </div>
            </Parallax>

            {/* Right bottom tile */}
            <Parallax translateY={[-22, 18]} className="absolute will-change-transform"
              style={{ left: '56%', top: '50%', width: '32%', height: '38%' }}>
              <div className="rounded-l overflow-hidden shadow-soft border border-pebble/60 w-full h-full">
                <img
                  src={rightBottomImg}
                  alt=""
                  className={'w-full h-full object-cover ' + (flip ? 'scale-x-[-1]' : '')}
                />
              </div>
            </Parallax>

            {/* Text card */}
            <Parallax translateY={[-18, 14]} className="absolute will-change-transform"
              style={{ left: '18%', top: '26%', width: '30%' }}>
              <div className={'bg-white/80 backdrop-blur-[2px] rounded-l shadow-soft px-6 py-6 border border-pebble/50 text-ink/90 ' + (flip ? 'scale-x-[-1]' : '')}>
                <Stagger step={90}>
                  {eyebrow && (
                    <Reveal>
                      <p className="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70">
                        {eyebrow}
                      </p>
                    </Reveal>
                  )}
                  <Reveal>
                    <h2 className="accent-head text-4xl lg:text-5xl text-ink/90 leading-tight">
                      {title}
                    </h2>
                  </Reveal>
                  {body && (
                    <Reveal>
                      <p className="mt-3 text-cocoa/80 text-base lg:text-lg">
                        {body}
                      </p>
                    </Reveal>
                  )}
                </Stagger>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from '../components/WaveDivider';

// Example assets – adjust paths
import mainImg from '../public/gypsy/page-7.png';
import secondaryImg from '../public/gypsy/page-3.png';

export function CurateSplitBanner({
  variant = 'bg-orange',
  waveFill = 'var(--beige-bg)',
  title = '',
  text = '',
  align = 'left',

  imageMain = mainImg,
  imageSecondary = secondaryImg,
  imageAltMain = 'Gypsy Vans interior',
  imageAltSecondary = 'Gypsy Vans detail',

  // Container parallax tuning (subtle!)
  mainTranslate = [-20, 20],
  secondaryTranslate = [20, -20],

  minHeight = 'min-h-[70vh]',
}) {
  const isLeft = align === 'left';

  return (
    <section
      className={`
        relative
        ${variant}
        ${minHeight}
        flex
        items-center
        overflow-hidden
        pb-[150px]
        pt-[50px]
        md:pb-[150px]
      `}
    >
      <div className="w-full px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

          {/* TEXT */}
          <div
            className={`
              md:col-span-6
              ${isLeft ? 'md:order-1 text-left' : 'md:order-2 text-right'}
            `}
          >
            <h2 className="accent-head text-5xl md:text-7xl font-medium text-white leading-[0.95]">
              {title}
            </h2>

            <p
              className={`
                mt-6 text-white/90 text-base md:text-lg leading-relaxed
                ${isLeft ? 'md:pr-10' : 'md:pl-10'}
              `}
            >
              {text}
            </p>
          </div>

          {/* IMAGES */}
          <div
            className={`
              md:col-span-6
              ${isLeft ? 'md:order-2' : 'md:order-1'}
              flex
              ${isLeft ? 'justify-start' : 'justify-end'}
            `}
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3]">

              {/* MAIN IMAGE CONTAINER */}
              <Parallax translateY={mainTranslate} className="absolute inset-0">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10" />

                  <Image
                    src={imageMain}
                    alt={imageAltMain}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 z-10" />
                </div>
              </Parallax>

              {/* SECONDARY IMAGE CONTAINER */}
              <Parallax
                translateY={secondaryTranslate}
                className={`
                  absolute
                  bottom-[-12%]
                  ${isLeft ? 'right-[-6%]' : 'left-[-6%]'}
                  w-[42%]
                  aspect-[3/4]
                `}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <div className="absolute inset-0 border border-white/15 rounded-xl pointer-events-none z-10" />

                  <Image
                    src={imageSecondary}
                    alt={imageAltSecondary}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 240px"
                  />
                </div>
              </Parallax>

            </div>
          </div>
        </div>
      </div>

      <WaveDivider
        fill={waveFill}
        height={150}
        overlap={-2}
        animate
        duration={10}
      />
    </section>
  );
}

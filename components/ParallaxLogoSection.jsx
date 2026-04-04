'use client';

import { Parallax } from 'react-scroll-parallax';
import { WaveDivider } from './WaveDivider';
import Image from 'next/image';
import { useLandingAssets } from '../app/contexts/LandingAssetsContext';
import { useState, useEffect } from 'react';

export function ParallaxLogoSection({
  heightVh = 130,
  rotateDeg = 360,
  toScale = 0.5,
  onCtaClick,
}) {
  const { getAsset, loaded } = useLandingAssets();
  const [imgErr, setImgErr] = useState(false);

  // Reset error state when assets finish loading so Drive URL isn't
  // permanently blocked by an earlier fallback-image 404.
  useEffect(() => {
    if (loaded) setImgErr(false);
  }, [loaded]);

  const bgSrc = !imgErr && getAsset('van-image-interior') || '/van/van-image-interior.webp';

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center gap-10"
      style={{ height: `${heightVh}vh` }}
    >
      {/* Background banner image */}
      <Image
        src={bgSrc}
        alt="Интериор на кемперван Gypsy Vans"
        fill
        className="object-cover"
        priority={false}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZlZTVjZiIvPjwvc3ZnPg=="
        onError={() => setImgErr(true)}
      />
      {/* Tinted overlay to keep logo + CTA readable */}
      <div className="absolute inset-0 bg-tan/60" />

      {/* Top wave from about section */}
      <WaveDivider fill="var(--coffee)" height={140} position="top" overlap={-1} />

      {/* Logo */}
      <Parallax
        rotate={[0, rotateDeg]}
        scale={[1, toScale]}
        className="pointer-events-none"
      >
        <Image
          src="/gypsy-van-logo.svg"
          alt="Gypsy Vans лого"
          width={600}
          height={600}
          className="w-[600px] h-auto"
        />
      </Parallax>

      {/* CTA below logo */}
      <button
        type="button"
        onClick={onCtaClick}
        className="relative z-10 rounded-full bg-orange border border-orange px-14 py-5 text-white text-lg md:text-xl tracking-widest uppercase"
      >
        Резервирай Сега
      </button>
       {/* Wave transition to services */}
      <WaveDivider fill="var(--beige-bg)" height={140} overlap={-2} />
    </section>
  );
}

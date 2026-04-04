"use client";
import Image from "next/image";
import { SocialWidget } from "./SocialWidget";
import { useRef } from "react";

function dispatchHeroReady() {
  window.dispatchEvent(new CustomEvent('heroReady'));
}

export function Hero() {
  const readyFired = useRef(false);

  const fireReady = () => {
    if (!readyFired.current) {
      readyFired.current = true;
      dispatchHeroReady();
    }
  };

  return (
    <section
      id='home'
      className='relative isolate min-h-[100svh] h-[100dvh] w-full overflow-hidden'
    >


      {/* Social icons — left side on desktop, bottom on mobile */}
      <div className='absolute bottom-4 left-1/2 translate-x-[-50%] md:top-1/2 md:left-6 md:translate-y-[-50%] md:translate-x-0 flex md:flex-col justify-center gap-4 z-20'>
        <SocialWidget
          img='/logos/instagram-logo.png'
          alt='Instagram Page'
          href='https://www.instagram.com/gypsyvans.bg'
        />
        <SocialWidget
          img='/logos/facebook-logo.png'
          alt='Facebook Page'
          href='https://www.facebook.com/gypsyvans.bg'
        />
        <SocialWidget
          img='/logos/tiktok-logo.png'
          alt='TikTok Page'
          href='https://www.google.com'
        />
      </div>

      {/* Video background — local asset */}
      <video
        className='absolute inset-0 z-0 h-full w-full object-cover'
        src='/hero-banner-video.webm'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        aria-label='Background hero video'
        onCanPlay={fireReady}
        onError={fireReady}
      >
        <track kind="captions" />
      </video>

      {/* Right-side vignette overlay */}
      <div
        className='absolute inset-y-0 right-0 w-2/3 md:w-1/2 z-[1] pointer-events-none'
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
        }}
      />
      <div
        className='hidden md:block absolute inset-y-0 right-0 w-1/2 z-[1] bg-gradient-to-l from-black/70 via-black/40 to-transparent pointer-events-none'
      />

      {/* Right-aligned hero text */}
      <div className='relative z-10 h-full flex items-center justify-end px-6 md:px-20 lg:px-28'>
        <div className='animate-reveal text-right max-w-2xl'>
          <h1 className='accent-head text-white text-[13vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[0.88] tracking-tight drop-shadow-lg mb-5'>
            Пътят е дом
          </h1>

          <p className='text-white text-[4.2vw] md:text-[1.8vw] lg:text-[1.5vw] leading-[1.6] md:leading-[1.7] font-light drop-shadow-md max-w-xl ml-auto'>
            Луксозен кемперван Mercedes Sprinter, създаден за свободата да
            откриваш. От семейство влюбено в приключенията – за всички, които
            искат да пътуват с комфорт, стил и душа.
          </p>

          <a
            href='#contact'
            className='hidden md:inline-block mt-8 px-8 py-3 rounded-full bg-orange border border-orange text-white text-sm md:text-base tracking-widest uppercase'
          >
            Резервирай
          </a>
        </div>
      </div>

      {/* Spinning logo — bottom center */}
      <div className='absolute inset-x-0 bottom-20 md:bottom-10 flex flex-col items-center z-20 gap-4'>
        <Image
          src='/logo-gypsy-white.svg'
          alt='Gypsy Vans емблема'
          width={56}
          height={56}
          className='spin-slow drop-shadow-lg w-10 h-10 md:w-14 md:h-14'
        />
        <a
          href='#contact'
          className='md:hidden px-8 py-3 rounded-full bg-orange border border-orange text-white text-sm tracking-widest uppercase'
        >
          Резервирай
        </a>
      </div>
    </section>
  );
}

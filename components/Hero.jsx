"use client";
import { SocialWidget } from "./SocialWidget";

export function Hero() {
  return (
    <section
      id='home'
      className='relative isolate min-h-[100svh] h-[100dvh] w-full overflow-hidden'
    >
      <div className='absolute bottom-4 left-1/2 translate-x-[-50%] md:top-1/2 md:left-4 md:translate-y-[-50%] md:translate-x-0 flex md:flex-col justify-center gap-4 z-20'>
        <SocialWidget
          img='/logos/instagram-logo.png'
          alt='Instagram Page'
          href='https://www.google.com'
        />
        <SocialWidget
          img='/logos/facebook-logo.png'
          alt='Facebook Page'
          href='https://www.google.com'
        />
        <SocialWidget
          img='/logos/tiktok-logo.png'
          alt='TikTok Page'
          href='https://www.google.com'
        />
      </div>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/45 z-0' />

      {/* Video background */}
      <video
        className='absolute inset-0 -z-10 h-full w-full object-cover'
        src='/hero.mp4'
        autoPlay
        muted
        loop
        playsInline
        poster='/eloura/parallax2.jpg'
        aria-label='Background hero video'
      />

      {/* ✅ CENTERED TEXT (horizontal + vertical) */}
      <div className='relative z-10 h-full grid place-items-center px-6 md:px-16 text-center'>
        <div className='animate-reveal max-w-4xl mx-auto rounded-2xl border border-pebble/30 backdrop-blur-sm p-4 py-6'>
          <div className='max-w-4xl'>
            <h1 className='accent-head text-white text-[11vw] md:text-[4vw] leading-[0.92] md:leading-[0.95] drop-shadow mb-4'>
              Пътят е дом
            </h1>

            <h2 className='text-white text-[4.2vw] md:text-[1.5vw] leading-[1.18] md:leading-10 drop-shadow'>
              Луксозен кемперван Mercedes Sprinter, създаден за свободата да
              откриваш.
              <br className='hidden md:block' />
              От семейство влюбено в приключенията – за всички, които искат да
              пътуват с комфорт, стил и душа.
            </h2>
          </div>
        </div>
      </div>

      {/* ✅ SPINNING LOGO — bottom center, smaller */}
      <div className='absolute inset-x-0 bottom-20 md:bottom-10 flex justify-center z-20'>
        <img
          src='/logo-gypsy-white.svg'
          alt='Gypsy Vans rosette'
          className='
            spin-slow
            drop-shadow
            w-16 h-16
            md:w-20 md:h-20
          '
        />
      </div>
    </section>
  );
}

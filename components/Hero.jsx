'use client';

export function Hero() {
  return (
    <section id="home" className="relative isolate h-[100vh] min-h-[640px] w-full overflow-hidden mt">
      {/* Full-bleed video background */}
      <div className='absolute h-full w-full bg-black/45'></div>
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/hero.webm"
        autoPlay
        muted
        loop
        playsInline
        poster="/eloura/parallax2.jpg"
        aria-label="Background hero video"
      />

      {/* Headline */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex p-16 justify-between items-end w-full">
        <div className='flex flex-col w-[60%]'>
          <h1 className="accent-head text-white text-[6vw] md:text-[4vw] leading-[0.95] drop-shadow mb-8">
            Как изглежда твоят свят?
          </h1>
          <h2 className="text-white text-[2.5vw] md:text-[1.5vw] leading-10 drop-shadow w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquam soluta, fuga, odio cupiditate ad itaque assumenda nulla beatae quam molestiae porro ratione quas?
          </h2>
        </div>
        <div className="w-24 h-24 md:w-28 md:h-28 flex flex-col gap-2 items-center">
          <img src="/logo-gypsy-white.png" alt="Gypsy Vans rosette" className="w-full h-full spin-slow drop-shadow" />
        </div>
      </div>
    </section>
  );
}

'use client';

const LINKS = [
  { label: 'Начало', href: '#home' },
  { label: 'Резервирай бус', href: '#reserve-van' },
  { label: 'Цени', href: '#prices' },
  { label: 'Условия', href: '#terms' },
  { label: 'За нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate h-[100vh] min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed video background */}
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
      {/* Readability gradient from right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-black/45 via-black/20 to-transparent" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="font-head text-xl tracking-[0.02em] text-white drop-shadow">
              Gypsy<span className="text-coffee">Vans</span>
            </span>
            <img src="/logo-gypsy-white.png" alt="logo" className="w-6 h-6 opacity-95 drop-shadow" />
          </a>
          <nav className="hidden md:flex gap-6 lg:gap-10 text-[15px] text-white">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-90">{l.label}</a>
            ))}
          </nav>
          <a href="#reserve-van" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-semibold bg-sienna text-white shadow-soft hover:shadow-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sienna/30 focus:ring-offset-transparent">
            РЕЗЕРВИРАЙ
          </a>
        </div>
      </header>

      {/* Headline OVER the video, near top-right */}
      <div className="relative h-full w-full">
        <div className="mx-auto max-w-7xl h-full px-6">
          <div className="pt-[18vh] md:pt-[20vh] flex justify-end">
            <h1 className="accent-head text-white text-[12vw] md:text-[7vw] leading-[0.95] drop-shadow text-right">
              Как изглежда<br className="hidden md:block" /> твоят свят?
            </h1>

            {/* Spinning logo and arrow */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-28 md:h-28">
                <img src="/logo-gypsy-white.png" alt="Gypsy Vans rosette" className="w-full h-full spin-slow drop-shadow" />
              </div>
              <svg className="w-6 h-6 text-white/90 bounce-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

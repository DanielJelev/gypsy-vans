'use client';
import { Reveal } from './Reveal';

/** Asymmetric collage band — local images to avoid hotlink/CORS. */
export function CollageBand() {
  const left = '/eloura/left.jpg';
  const center = '/eloura/center.jpg';
  const topRight = '/eloura/topRight.jpg';
  const bottomRight = '/eloura/bottomRight.jpg';

  return (
    <section className="relative pt-10 md:pt-16 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-12 gap-6 items-start">
        {/* Left tall card */}
        <Reveal className="col-span-5 md:col-span-4 translate-y-6">
          <div className="relative rounded-l overflow-hidden shadow-soft">
            <div className="aspect-[3/4]">
              <img src={left} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>

        {/* Center hero wide */}
        <Reveal className="col-span-7 md:col-span-5 -mt-8 md:-mt-12">
          <div className="relative rounded-l overflow-hidden shadow-soft">
            <div className="aspect-[16/10] md:aspect-[16/9]">
              <img src={center} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>

        {/* Right stack */}
        <div className="col-span-12 md:col-span-3 grid gap-6 -mt-24">
          <Reveal>
            <div className="rounded-l overflow-hidden shadow-soft">
              <div className="aspect-[16/9]">
                <img src={topRight} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-l overflow-hidden shadow-soft">
              <div className="aspect-[16/9]">
                <img src={bottomRight} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Gold dust paint sweep */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-[-2rem] h-56 bg-[radial-gradient(60%_80%_at_20%_100%,rgba(196,122,90,0.20),transparent_60%),radial-gradient(70%_90%_at_40%_100%,rgba(250,213,82,0.28),transparent_60%)]" />
    </section>
  );
}

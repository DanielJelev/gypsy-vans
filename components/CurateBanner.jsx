'use client';
import { Reveal } from './Reveal';

export function CurateBanner() {

  return (
    <section className="relative bg-coffee py-32">

      {/* Text content; appears when in view */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className='h-full w-full animate-reveal'>
          <h2 className="accent-head text-4xl md:text-6xl font-medium text-white w-full">
            We Curate Unforgettable Luxury Escapes.
          </h2>
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            At Eloura Journeys, every trip is crafted with care, creativity, and a deep understanding of what luxury means to you.
            From the first conversation to your return home, we curate experiences that are as seamless as they are unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}

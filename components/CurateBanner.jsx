'use client';

import { WaveDivider } from '../components/WaveDivider';

export function CurateBanner({
  variant = 'bg-orange',        // 👈 background variant
  waveFill = 'var(--beige-bg)', // 👈 wave color (separate on purpose)
  title = '',
  text = '',
}) {
  return (
    <section
      className={`
        relative
        ${variant}
        min-h-[70vh]
        flex
        items-center
        justify-center
        overflow-hidden
        pb-[150px]
        md:pb-[150px]
      `}
    >
      {/* Text content */}
      <div className="w-full text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="accent-head text-4xl md:text-6xl mt-6 md:mt-10 font-medium text-white">
          {title}
          </h2>

          <p className="mt-6 text-white/90 text-lg md:text-xl">
            {text}
          </p>
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

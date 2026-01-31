'use client';

export function WavyStrokeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="
            M50 0
            C40 140, 60 280, 50 420
            C40 560, 60 700, 50 840
            C42 900, 58 960, 50 1000
          "
          fill="none"
          stroke="var(--wave-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

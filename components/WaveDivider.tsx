'use client';

const PATHS = {
  // ✅ EXACTLY your default
  default:
    'M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1350,90 1440,60 L1440,120 L0,120 Z',

  subtle:
    'M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,120 L0,120 Z',

  smooth:
    'M0,60 C200,25 400,95 600,60 C800,25 1000,95 1200,60 C1320,35 1380,75 1440,60 L1440,120 L0,120 Z',

  highFreq:
    'M0,60 C120,30 240,90 360,60 C480,30 600,90 720,60 C840,30 960,90 1080,60 C1200,30 1320,90 1440,60 L1440,120 L0,120 Z',
};

export function WaveDivider({
  // color
  fill = 'var(--beige-bg)',

  // sizing
  height = 110,   // px
  heightMd = 150, // px

  // placement
  position = 'bottom', // 'bottom' | 'top'
  flip = false,

  // curve selection
  variant = 'default',
  path,

  // styling
  zIndex = 1,
  className = '',

  // ✅ Seam killer: move the whole wrapper by a tiny amount
  // For bottom divider: negative pushes it DOWN into the next section (overlap)
  // For top divider: negative pushes it UP into the previous section (overlap)
  overlap = -1,     // px
  overlapMd = -1,   // px
}) {
  const d = path ?? PATHS[variant] ?? PATHS.default;
  const isTop = position === 'top';
  const shouldFlip = flip || isTop;

  return (
    <div
      className={`absolute left-0 w-full leading-none pointer-events-none ${className}`}
      style={{
        zIndex,
        ...(isTop
          ? { top: `${overlap}px` }       // top overlap
          : { bottom: `${overlap}px` }),  // bottom overlap
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full block"
        style={{
          height: `${height}px`,
          transform: shouldFlip ? 'scaleY(-1)' : undefined,
          transformOrigin: 'center',
        }}
      >
        <path d={d} fill={fill} />
      </svg>

      {/* md+ height + overlap */}
      <style jsx>{`
        @media (min-width: 768px) {
          div {
            ${isTop ? `top: ${overlapMd}px;` : `bottom: ${overlapMd}px;`}
          }
          svg {
            height: ${heightMd}px;
          }
        }
      `}</style>
    </div>
  );
}

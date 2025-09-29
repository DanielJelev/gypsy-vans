import { ReplicaSection } from './ReplicaSection'

/** ReplicaShow — section-by-section coordinates that mimic your reference.
 * Tweak the numbers below (percent-based) to fine tune exact placement.
 */
export function ReplicaShow() {
  const S1 = {
    heightVh: 78,
    layers: [
      // left tall
      { type: 'image', src: '/eloura/left.jpg',
        style: { left: '0%', top: '8%', width: '28%', height: '68%' },
        parallax: { travelPx: 28, speed: 1 } },
      // right top wide
      { type: 'image', src: '/eloura/topRight.jpg',
        style: { left: '46%', top: '-4%', width: '44%', height: '40%' },
        parallax: { travelPx: 42, speed: 1 } },
      // right bottom
      { type: 'image', src: '/eloura/bottomRight.jpg',
        style: { left: '54%', top: '44%', width: '34%', height: '44%' },
        parallax: { travelPx: 34, speed: 1 } },
      // centered text block
      { type: 'text',
        style: { left: '28%', top: '22%', width: '32%' },
        parallax: { travelPx: 18, speed: 1 },
        reveal: { threshold: 0.3, yOffset: 10 },
        html: `
          <p class="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70 mb-2">SIGNATURE MOMENTS</p>
          <h2 class="accent-head text-4xl lg:text-5xl leading-tight">We Curate Unforgettable Luxury Escapes.</h2>
          <p class="mt-3 text-cocoa/80 text-base lg:text-lg">Tailored experiences crafted with care, creativity, and an eye for detail.</p>
        `}
    ]
  };

  const S2 = {
    heightVh: 80,
    layers: [
      // mirror layout — we'll swap image roles and positions
      { type: 'image', src: '/eloura/parallax2.jpg',
        style: { left: '0%', top: '4%', width: '30%', height: '64%' },
        parallax: { travelPx: 30, speed: 1 } },
      { type: 'image', src: '/eloura/parallax3.jpg',
        style: { left: '50%', top: '-6%', width: '40%', height: '42%' },
        parallax: { travelPx: 44, speed: 1 } },
      { type: 'image', src: '/eloura/parallax1.jpg',
        style: { left: '58%', top: '46%', width: '32%', height: '46%' },
        parallax: { travelPx: 36, speed: 1 } },
      { type: 'text',
        style: { left: '30%', top: '24%', width: '30%' },
        parallax: { travelPx: 18, speed: 1 },
        reveal: { threshold: 0.3, yOffset: 10 },
        html: `
          <p class="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70 mb-2">DESTINATIONS</p>
          <h2 class="accent-head text-4xl lg:text-5xl leading-tight">From Atlas Peaks to Island Retreats.</h2>
          <p class="mt-3 text-cocoa/80 text-base lg:text-lg">A handpicked path through riads, terraces, and ocean horizons.</p>
        `}
    ]
  };

  const S3 = {
    heightVh: 78,
    layers: [
      { type: 'image', src: '/eloura/slide1.jpg',
        style: { left: '2%', top: '10%', width: '26%', height: '62%' },
        parallax: { travelPx: 28, speed: 1 } },
      { type: 'image', src: '/eloura/slide2.jpg',
        style: { left: '46%', top: '-2%', width: '44%', height: '38%' },
        parallax: { travelPx: 40, speed: 1 } },
      { type: 'image', src: '/eloura/slide3.jpg',
        style: { left: '56%', top: '48%', width: '34%', height: '42%' },
        parallax: { travelPx: 32, speed: 1 } },
      { type: 'text',
        style: { left: '28%', top: '24%', width: '30%' },
        parallax: { travelPx: 16, speed: 1 },
        reveal: { threshold: 0.3, yOffset: 10 },
        html: `
          <p class="uppercase tracking-[0.25em] text-[12px] md:text-[13px] text-ink/70 mb-2">EXPERIENCES</p>
          <h2 class="accent-head text-4xl lg:text-5xl leading-tight">Private Villas, Rooftop Views & Ocean Breezes.</h2>
          <p class="mt-3 text-cocoa/80 text-base lg:text-lg">We compose the setting — you make the memories.</p>
        `}
    ]
  };

  return (
    <div>
      <ReplicaSection {...S1} />
    </div>
  );
}

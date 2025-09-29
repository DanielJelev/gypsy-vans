import { MosaicWithText } from './MosaicWithText'

export function MosaicShowcase() {
  const sections = [
    {
      leftImg: '/eloura/left.jpg',
      rightTopImg: '/eloura/topRight.jpg',
      rightBottomImg: '/eloura/bottomRight.jpg',
      eyebrow: 'SIGNATURE MOMENTS',
      title: 'We Curate Unforgettable Luxury Escapes.',
      body: 'Tailored experiences crafted with care, creativity, and an eye for detail.',
      reverse: false
    },
    {
      leftImg: '/eloura/parallax2.jpg',
      rightTopImg: '/eloura/parallax3.jpg',
      rightBottomImg: '/eloura/parallax1.jpg',
      eyebrow: 'DESTINATIONS',
      title: 'From Atlas Peaks to Island Retreats.',
      body: 'A handpicked path through riads, terraces, and ocean horizons.',
      reverse: true
    },
    {
      leftImg: '/eloura/slide1.jpg',
      rightTopImg: '/eloura/slide2.jpg',
      rightBottomImg: '/eloura/slide3.jpg',
      eyebrow: 'EXPERIENCES',
      title: 'Private Villas, Rooftop Views & Ocean Breezes.',
      body: 'We compose the setting — you make the memories.',
      reverse: false
    }
  ];
  return <div>{sections.map((s, i) => <MosaicWithText key={i} {...s} />)}</div>;
}

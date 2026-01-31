import { ParallaxSection } from './ParallaxSection'

const SECTIONS = [
  { image: '/eloura/parallax1.jpg', eyebrow: 'Какво ще откриеш вътре:', title: 'Какво ще откриеш вътре:', sub: 'asd', align: 'center', heightVh: 94, overlayYvh: 18, overlayMaxW: 46, travelPx: 280, speed: 0.40 },
  { image: '/eloura/parallax2.jpg', eyebrow: 'BRITISH VIRGIN ISLANDS', title: 'Mosquito Island', sub: 'Залези и тюркоазени лагуни.', align: 'left', heightVh: 98, overlayYvh: 22, overlayMaxW: 44, travelPx: 320, speed: 0.45 },
  { image: '/eloura/parallax3.jpg', eyebrow: 'CARIBBEAN', title: 'Beach Estate Dining', sub: 'Вечеря на брега под фенери.', align: 'right', heightVh: 92, overlayYvh: 20, overlayMaxW: 44, travelPx: 260, speed: 0.40 },
  { image: '/eloura/parallax4.jpg', eyebrow: 'MOROCCO', title: 'Rooftop Terrace', sub: 'Уединение и гледки.', align: 'center', heightVh: 90, overlayYvh: 20, overlayMaxW: 46, travelPx: 240, speed: 0.38 },
];

export function ParallaxShowcase() {
  return <div id="eloura-parallax">{SECTIONS.map((s, i) => <ParallaxSection key={i} {...s} />)}</div>;
}

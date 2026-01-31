import { Hero } from '../components/Hero'
import { CurateBanner } from '../components/CurateBanner'
import { ParallaxLogoSection } from '../components/ParallaxLogoSection'
import { ParallaxLogoMarqueeSection } from '../components/ParallaxLogoMarqueeSection'
import { WavyStrokeBackground } from '../components/WavyStrokeBackground'
import { Carousel } from '../components/Carousel'
import { ParallaxShowcase } from '../components/ParallaxShowcase'
import { ShopFooter } from '../components/ShopFooter'
import { Header } from '../components/Header'

export default function Page() {
  return (
    <main className="relative z-20">
      <Header />
      <Hero />
      {/* <WavyStrokeBackground /> */}
      <CurateBanner />
      {/* <ReplicaShow /> */}
      <ParallaxLogoMarqueeSection/>
      {/* <ParallaxLogoSection rotateDeg={720} toScale={0.25} caption={'asdasd'}/> */}
      {/* <Carousel /> */}
      <section id="prices" className="container-page section">
        <h2 className="font-head text-3xl mb-2">Цени</h2>
        <div className="card p-6 text-cocoa/90">Ценови пакети и оферти — попълни формата за персонална оферта.</div>
      </section>
      <section id="terms" className="container-page section">
        <h2 className="font-head text-3xl mb-2">Условия</h2>
        <div className="card p-6 text-cocoa/90">Пълните условия за наем и ползване — на разположение при резервация.</div>
      </section>
      <section id="about" className="container-page section">
        <h2 className="font-head text-3xl mb-2">За нас</h2>
        <div className="card p-6 text-cocoa/90">Boho дух, свобода и уют — Gypsy Vans.</div>
      </section>
      <section id="contact" className="container-page section">
        <h2 className="font-head text-3xl mb-2">Контакти</h2>
        <div className="card p-6 text-cocoa/90">Пишете ни на hello@example.com</div>
      </section>
</main> )
}

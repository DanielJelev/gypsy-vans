import { Hero } from '../components/Hero'
import { CurateBanner } from '../components/CurateBanner'
import { ReplicaShow } from '../components/ReplicaShow'
import { Carousel } from '../components/Carousel'
import { ParallaxShowcase } from '../components/ParallaxShowcase'
import { ShopFooter } from '../components/ShopFooter'

export default function Page() {
  return (
    <main>
      <Hero />
            <CurateBanner />
      <ReplicaShow />
      <ParallaxShowcase />
      <Carousel />
      <section id="reserve-van" className="container-page section">
        <h2 className="font-head text-3xl mb-4">Резервирай бус</h2>
        <form className="grid gap-3 max-w-xl card p-6">
          <input placeholder="Име" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
          <input type="email" placeholder="Имейл" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
          <div className="grid grid-cols-2 gap-3">
            <input type="date" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
            <input type="date" className="rounded-s border border-pebble/60 px-4 py-3 bg-white/80" />
          </div>
          <button className="px-5 py-3 rounded-pill bg-coffee text-white shadow-soft">РЕЗЕРВИРАЙ</button>
        </form>
      </section>
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

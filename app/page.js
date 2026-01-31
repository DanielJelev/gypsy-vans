import { Hero } from '../components/Hero'
import { CurateBanner } from '../components/CurateBanner'
import { ParallaxLogoSection } from '../components/ParallaxLogoSection'
import { ParallaxLogoMarqueeSection } from '../components/ParallaxLogoMarqueeSection'
import { WavyStrokeBackground } from '../components/WavyStrokeBackground'
import { Carousel } from '../components/Carousel'
import { ParallaxShowcase } from '../components/ParallaxShowcase'
import { ShopFooter } from '../components/ShopFooter'
import { Header } from '../components/Header'
import { WaveDivider } from '../components/WaveDivider'

export default function Page() {
  return (
    <main className="relative z-20">
      <Header />
      <Hero />
      {/* <WavyStrokeBackground /> */}
      <CurateBanner title='Кемперванът - Лукс, уют и свобода в едно' text=' Нашият Mercedes Sprinter 2020 е оборудван с най-висок клас системи за комфорт и автономност, така че да се чувстваш у дома, където и да си.
            Интериорът е в модерен boho & minimalistic стил – топли натурални цветове, качествени естествени материали, меки форми и внимание към светлината и атмосферата.
            Тук уютът среща функционалността, а простотата – щастието да се насладиш на пътя.'/>
      {/* <ReplicaShow /> */}
      
      <ParallaxLogoMarqueeSection/>
      <CurateBanner variant="bg-coffee" title="Ние сме Дари, Мето и малката Кая" text=" - семейство приключенци, които вярват, че най-красивите истории се раждат по пътя. След хиляди изминати километри, стотици върхове, безброй минути под вода и под звездите, решихме да създадем нещо наше: Gypsy Vans.
Нашият Mercedes Sprinter е конвертиран изцяло по наш проект - с внимание към всеки детайл, с любов към природата и с желание да дадем на другите свободата, която ние самите търсим.
Gypsy Vans са не просто кемперванове под наем. Това е покана да излезеш извън рамките, да се свържеш със себе си и с пътя, и да създадеш спомени, които топлят цял живот."/>

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

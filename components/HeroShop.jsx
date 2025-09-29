import { Button } from './Button'
export function HeroShop() {
  return (
    <section className="relative section h-gradient">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-head text-5xl md:text-6xl leading-tight">Effortless boho for everyday</h1>
          <p className="mt-4 text-lg text-cocoa/90 max-w-xl">
            Sun-washed tones, natural textures, and easy silhouettes. Curated pieces for a cozy, free-spirited life.
          </p>
          <div className="mt-8 flex gap-4">
            <Button>Shop new</Button>
            <Button variant="outline">Explore collections</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-l overflow-hidden bg-gradient-to-br from-page to-card border-soft shadow-soft" />
          <div className="aspect-[3/4] rounded-l overflow-hidden bg-gradient-to-br from-card to-fawn/60 border-soft shadow-soft translate-y-6" />
        </div>
      </div>
    </section>
  );
}

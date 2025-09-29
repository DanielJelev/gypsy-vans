export function GypsyLanding() {
  const pages = Array.from({length: 11}, (_, i) => `/gypsy/page-${i+1}.png`);
  return (
    <section id="gypsy" className="bg-page">
      <div className="container-page py-16">
        <h2 className="font-head text-4xl md:text-5xl">Gypsy Vans</h2>
        <p className="mt-3 text-cocoa/90 max-w-3xl">
          Home is where you are free — водеща линия, която преминава през марката и страницата.
        </p>
      </div>
    </section>
  );
}
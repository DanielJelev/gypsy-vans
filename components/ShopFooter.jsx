export function ShopFooter() {
  return (
    <footer className="border-t border-pebble/50 bg-page">
      <div className="container-page py-12 grid md:grid-cols-3 gap-8 text-sm text-cocoa/80">
        <div>
          <div className="font-head text-xl">Gypsy<span className="text-sienna">Vans</span></div>
          <p className="mt-3">Свобода да пътуваш. Уют навсякъде.</p>
        </div>
        <nav className="grid gap-2">
          <a href="#prices">Цени</a>
          <a href="#terms">Условия</a>
          <a href="#contact">Контакти</a>
        </nav>
        <div className="justify-self-end">
          <p>© {new Date().getFullYear()} GypsyVans</p>
        </div>
      </div>
    </footer>
  );
}
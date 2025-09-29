'use client';
export function ShopNavbar() {
  const links = ['New', 'Dresses', 'Tops', 'Home', 'Sale'];
  return (
    <header className="sticky top-0 z-40 bg-page/90 backdrop-blur-md border-b border-pebble/50">
      <div className="container-page h-16 flex items-center justify-between">
        <a className="font-head text-2xl tracking-[0.02em]">BOHO<span className="text-sienna">WAVE</span></a>
        <nav className="hidden md:flex gap-8 text-[15px] text-cocoa/90">
          {links.map((l) => <a key={l} className="hover:text-ink link-underline">{l}</a>)}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-ink">Search</a>
          <a className="hover:text-ink">Cart (0)</a>
        </div>
      </div>
    </header>
  );
}

export function CategoryGrid() {
  const cats = [
    { name: 'Дизайн', img: '/gypsy/page-2.png' },
    { name: 'Интериор', img: '/gypsy/page-3.png' },
    { name: 'Оборудване', img: '/gypsy/page-4.png' },
    { name: 'Аксесоари', img: '/gypsy/page-5.png' },
  ];
  return (
    <section className="section container-page">
      <h2 className="font-head text-3xl mb-6">Категории</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cats.map((c) => (
          <a key={c.name} className="group block rounded-l overflow-hidden border border-pebble/60 bg-white/60 shadow-soft">
            <div className="aspect-square overflow-hidden">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
            </div>
            <div className="p-3 text-center text-cocoa/90">{c.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
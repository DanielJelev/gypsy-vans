import { ProductCard } from './ProductCard'
export function FeaturedGrid() {
  const items = [
    { title: 'Floral midi dress', price: 89, image: '/gypsy/page-6.png' },
    { title: 'Textured knit top', price: 49, image: '/gypsy/page-7.png' },
    { title: 'Woven tote', price: 69, image: '/gypsy/page-8.png' },
    { title: 'Stoneware mug set', price: 39, image: '/gypsy/page-9.png' },
  ];
  return (
    <section className="section container-page">
      <h2 className="font-head text-3xl mb-6">Акценти</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </section>
  );
}
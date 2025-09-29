export function ProductCard({ product }) {
  return (
    <a className="group block">
      <div className="aspect-[3/4] rounded-l overflow-hidden border border-pebble/60 bg-white/60 shadow-soft">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="mt-3 text-sm text-cocoa/90">{product.title}</div>
      <div className="text-sm"> ${product.price}</div>
    </a>
  );
}
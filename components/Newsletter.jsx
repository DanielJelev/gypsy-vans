export function Newsletter() {
  return (
    <section className="section">
      <div className="container-page card p-8 md:p-12">
        <h3 className="font-head text-2xl">Абонирай се</h3>
        <p className="mt-2 text-cocoa/80">Вземи новини за нови бусове, цени и идеи за пътуване.</p>
        <form className="mt-6 flex gap-3 max-w-md">
          <input className="flex-1 rounded-s border border-pebble/60 px-4 py-3 bg-white/80" placeholder="you@example.com" />
          <button className="px-5 py-3 rounded-pill bg-sienna text-white shadow-soft">Изпрати</button>
        </form>
      </div>
    </section>
  );
}
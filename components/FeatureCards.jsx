export function FeatureCards() {
  const items = [
    { title: 'Комфортни бусове', text: 'Функционални интериори, удобни легла и всичко необходимо за пътуване без компромис.', icon: '🚐' },
    { title: 'Гъвкави резервации', text: 'Лесно онлайн резервиране и ясни условия. Избираш дати, ние съдействаме с всичко останало.', icon: '📅' },
    { title: 'Подкрепа по пътя', text: 'Приятелска поддръжка и съдействие при въпроси преди и по време на пътуването.', icon: '🤝' },
  ];
  return (
    <section className="bg-page" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <h2 id="features-heading" className="sr-only">Предимства</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((c, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm border border-pebble/60 rounded-l shadow-soft p-6">
              <div className="text-3xl" aria-hidden>{c.icon}</div>
              <h3 className="mt-3 font-head text-xl">{c.title}</h3>
              <p className="mt-2 text-cocoa/90 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
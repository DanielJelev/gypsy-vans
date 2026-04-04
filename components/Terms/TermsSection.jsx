export function TermsSection({ children, title, boxClassName, titleClassName }) {
  return (
    <div className={`bg-white/60 backdrop-blur-sm rounded-2xl border border-sand/50 p-6 md:p-8 shadow-soft ${boxClassName || ''}`}>
      <h3 className={`serif-head text-xl md:text-2xl text-earth mb-5 flex items-center gap-3 ${titleClassName || ''}`}>
        <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
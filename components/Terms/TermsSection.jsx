export function TermsSection({ children, title, boxClassName, titleClassName }) {
  return (
    <div className={`w-full flex flex-col gap-4 ${boxClassName}`}>
      <p className={`text-2xl font-semibold ${titleClassName}`}>{title}</p>
      {children}
    </div>
  )
}
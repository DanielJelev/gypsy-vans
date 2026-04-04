export function TermsText({ children, className }) {
  return <div className={`text-cocoa text-base md:text-lg leading-relaxed ${className || ''}`}>{children}</div>
}
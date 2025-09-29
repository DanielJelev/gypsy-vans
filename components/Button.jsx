export function Button({ children, className = '', ...props }) {
  return (
    <button className={`px-5 py-3 rounded-pill bg-sienna text-white shadow-soft hover:shadow-deep ${className}`} {...props}>
      {children}
    </button>
  );
}
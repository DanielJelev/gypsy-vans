export function SocialWidget({ img, alt, href }) {
  return (
    <div className='p-1 bg-[#fff7ec]/30 backdrop-blur-sm border border-white/20 rounded-md hover:opacity-70 hover:scale-95 transition-all duration-300'>
      <a href={href}>
        <img
          src={img}
          alt={alt}
          className="w-9 h-9"
        />
      </a>
    </div>
  )
}
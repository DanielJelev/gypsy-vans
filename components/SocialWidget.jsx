import Image from 'next/image';

export function SocialWidget({ img, alt, href }) {
  return (
    <div className='p-1 bg-[#fff7ec]/10 backdrop-blur-sm border border-white/20 rounded-md hover:opacity-70 hover:scale-95 transition-all duration-300'>
      <a href={href}>
        <Image
          src={img}
          alt={alt}
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>
    </div>
  )
}
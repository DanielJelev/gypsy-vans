import Image from 'next/image';

export function SocialWidget({ img, alt, href, disabled = false }) {
  return (
    <div
      className='p-1 bg-[#fff7ec]/10 backdrop-blur-sm border border-white/20 rounded-md transition-all duration-300 hover:opacity-70 hover:scale-95'
    >
      {disabled ? (
        <span aria-disabled='true'>
          <Image
            src={img}
            alt={alt}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </span>
      ) : (
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <Image
            src={img}
            alt={alt}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </a>
      )}
    </div>
  )
}
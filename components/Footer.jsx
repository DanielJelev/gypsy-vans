'use client';

import { SocialWidget } from './SocialWidget';
import { LINKS } from './Header';

export function Footer() { 
  return (
    <footer className='h-50 p-8 border-t border-pebble bg-coffee flex lg:flex-row flex-col justify-around lg:px-32 px-8 gap-12'>
      <div className='flex gap-8 text-white justify-center'>
        <img
          src="/Logo-04.svg"
          alt="Logo"
          className="w-[130px] h-auto logo-rotate"
        />
        <p className='leading-9 text-[20px] font-bold'>
          Създаден с любов. <br />
          Изживян с дух. <br />
          Споделен с теб.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <nav className="flex lg:gap-12 lg:w-auto text-lg text-white underline justify-center w-full gap-2">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-all duration-300">{l.label}</a>
          ))}
        </nav>
        <div className='flex lg:gap-12 w-full lg:justify-end justify-center items-center gap-6'>
          <SocialWidget img='/logos/instagram-logo.png' alt='Instagram Page' href='https://www.google.com' />
          <SocialWidget img='/logos/facebook-logo.png' alt='Facebook Page' href='https://www.google.com' />
          <SocialWidget img='/logos/tiktok-logo.png' alt='TikTok Page' href='https://www.google.com' />
        </div>
      </div>
    </footer>
  ) 
}
"use client";

import { useState, useEffect } from "react";
import { Terms } from "./Terms/Terms";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const LINKS = [
  { label: "Начало", href: "/#home" },
  { label: "Галерия", href: "/gallery" },
  { label: "Цени", href: "/#prices" },
  { label: "Условия", href: "#", action: true },
  { label: "За нас", href: "/#about" },
  { label: "Контакти", href: "/#contact" },
];

export function Header({ termsOpen, setTermsOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openTerms = () => {
    document.body.style.overflow = "hidden";
    setTermsOpen(true);
  };

  const closeTerms = () => {
    document.body.style.overflow = "auto";
    setTermsOpen(false);
  };

  // console.log(termsOpen)

  return (
    <header className='fixed top-0 left-0 z-[100] w-full bg-[#fff7ec]/40 backdrop-blur-sm border-b border-b-white/70'>
      <div className='mx-auto max-w-7xl px-6 h-16 flex items-center justify-between z-50 relative'>
        <a
          href='/#home'
          onClick={closeTerms}
          className='flex items-center gap-3'
        >
          <img
            src='/logo-header.svg'
            alt='logo'
            className='w-40 md:w-55 h-8 opacity-95 drop-shadow'
          />
        </a>
        <nav className='hidden md:flex gap-6 lg:gap-12 text-md text-black'>
          {LINKS.map((l) => (
            <div key={l.href} className='hover:opacity-70 z-30'>
              {l.action ? (
                <button onClick={termsOpen ? closeTerms : openTerms}>
                  {l.label}
                </button>
              ) : (
                <a href={l.href} onClick={closeTerms}>
                  {l.label}
                </a>
              )}
            </div>
          ))}
        </nav>
        <div className='flex gap-2 md:gap-4 items-center z-10'>
          <a
            href='/#contact'
            className={`rounded-full px-3 py-1.5 text-[10px] md:px-6 md:py-2 md:text-sm tracking-widest uppercase transition-colors duration-300 ${
              scrolled
                ? 'bg-orange border border-orange text-white'
                : 'border border-black text-black'
            }`}
          >
            РЕЗЕРВИРАЙ
          </a>
          <MobileMenu termsOpen={termsOpen} setTermsOpen={setTermsOpen}/>
        </div>
      </div>
      <Terms open={termsOpen} close={closeTerms} />
    </header>
  );
}

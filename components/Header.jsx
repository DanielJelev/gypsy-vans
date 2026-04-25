"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Terms } from "./Terms/Terms";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const LINKS = [
  { label: "Начало", href: "/#home" },
  { label: "За нас", href: "/#about" },
  { label: "Цени", href: "/#prices" },
  { label: "Условия", href: "#", action: true },
  { label: "Контакти", href: "/#contact" },
  { label: "Галерия", href: "/gallery" },
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


  return (
    <header className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
      termsOpen
        ? 'bg-beige shadow-soft border-b border-b-white/70'
        : scrolled
          ? 'bg-[#fff7ec]/90 backdrop-blur-md shadow-soft border-b border-b-white/70'
          : 'bg-[#fff7ec]/40 backdrop-blur-sm border-b border-b-white/70'
    }`}>
      <div className='mx-auto max-w-7xl px-3 sm:px-6 h-16 flex items-center justify-between z-50 relative'>
        <a
          href='/#home'
          onClick={closeTerms}
          className='flex items-center gap-2 shrink-0'
        >
          <Image
            src='/logo-header.svg'
            alt='Gypsy Vans - Начало'
            width={220}
            height={32}
            className='w-24 sm:w-32 md:w-55 h-auto opacity-95 drop-shadow'
            priority
          />
        </a>
        <nav aria-label='Главна навигация' className='hidden md:flex gap-6 lg:gap-12 text-md text-black'>
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
        <div className='flex gap-1.5 sm:gap-2 md:gap-4 items-center z-10 shrink-0'>
          <a
            href='/#contact'
            aria-label='Резервирай кемперван'
            className={`rounded-full px-3 sm:px-6 py-1.5 text-xs sm:text-sm md:py-2 tracking-[0.22em] sm:tracking-widest uppercase transition-colors duration-300 ${
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

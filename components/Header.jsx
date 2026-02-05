'use client';

import { useState } from 'react';
import { ReserveForm } from './ReserveForm';
import { Terms } from './Terms/Terms';

export const LINKS = [
  { label: 'Начало', href: '#home' },
  { label: 'Цени', href: '#prices' },
  { label: 'Условия', href: '#', action: true },
  { label: 'За нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export function Header() {
  const [reserveOpen, setReserveOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  const openTerms = () => {
    document.body.style.overflow = 'hidden'
    setTermsOpen(true)
  }

  const closeTerms = () => {
    document.body.style.overflow = 'auto'
    setTermsOpen(false)
  }

  // console.log(termsOpen)

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-[#fff7ec]/40 backdrop-blur-sm border-b border-b-white/70" >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between z-50 relative">
        <a href="#home" onClick={closeTerms} className="flex items-center gap-3">
          <img src="/logo-header.svg" alt="logo" className="w-55 h-8 opacity-95 drop-shadow" />
        </a>
        <nav className="hidden md:flex gap-6 lg:gap-12 text-md text-black">
          {LINKS.map((l) => (
            <div key={l.href} className="hover:opacity-70 z-30">
              {l.action
                ? <button onClick={termsOpen ? closeTerms : openTerms}>{l.label}</button>
                : <a href={l.href} onClick={closeTerms}>{l.label}</a>
              }
            </div>
          ))}
        </nav>
        <button onClick={() => setReserveOpen(true)} className="border border-black rounded-pill p-2 px-4 text-black text-sm font-bold">
          РЕЗЕРВИРАЙ
        </button>
      </div>
      <ReserveForm open={reserveOpen} setOpen={setReserveOpen} />
      <Terms open={termsOpen} close={closeTerms} />
    </header>
  )
}
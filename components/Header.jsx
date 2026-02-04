'use client';

import { useState } from 'react';
import { ReserveForm } from './ReserveForm';

export const LINKS = [
  { label: 'Начало', href: '#home' },
  { label: 'Цени', href: '#prices' },
  { label: 'Условия', href: '#terms' },
  { label: 'За нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-[#fff7ec]/40 backdrop-blur-sm border-b border-b-white/70" >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo-header.svg" alt="logo" className="w-55 h-8 opacity-95 drop-shadow" />
        </a>
        <nav className="hidden md:flex gap-6 lg:gap-6 text-md text-black">
          {LINKS.map((l) => (
            <div key={l.href} className="hover:opacity-70 px-4 rounded-2xl backdrop-blur-[1px] z-30 border border-white/15 transition-all duration-300">
              <a href={l.href}>{l.label}</a>
            </div>
          ))}
        </nav>
        <button onClick={() => setOpen(true)} className="border border-black rounded-pill p-2 px-4 text-black text-sm font-bold">
          РЕЗЕРВИРАЙ
        </button>
        <ReserveForm open={open} setOpen={setOpen} />
      </div>
    </header>
  )
}
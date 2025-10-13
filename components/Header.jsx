'use client';

import { useState } from 'react';
import { ReserveForm } from './ReserveForm';

const LINKS = [
  { label: 'Начало', href: '#home' },
  { label: 'Цени', href: '#prices' },
  { label: 'Условия', href: '#terms' },
  { label: 'За нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-white/50 backdrop-blur-sm border-b border-b-white/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo-gypsy-white.png" alt="logo" className="w-6 h-6 opacity-95 drop-shadow" />
          <span className="font-head text-xl tracking-[0.02em] text-black drop-shadow">
            Gypsy<span className="text-sienna">Vans</span>
          </span>
        </a>
        <nav className="hidden md:flex gap-6 lg:gap-10 text-[15px] text-black">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-90">{l.label}</a>
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
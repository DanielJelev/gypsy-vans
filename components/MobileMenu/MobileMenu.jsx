"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { LINKS } from "../Header";

export function MobileMenu({ termsOpen, setTermsOpen }) {
  const [open, setOpen] = useState(false);

  const openTerms = () => {
    document.body.style.overflow = "hidden";
    setOpen(false);
    setTermsOpen(true);
  };

  const closeTerms = () => {
    document.body.style.overflow = "auto";
    setTermsOpen(false);
    setOpen(false);
  };

  return (
    <>
      <div className='md:hidden flex items-center relative z-20'>
        <button
          className='text-4xl transition-all duration-300'
          style={{
            opacity: open ? 0 : 1,
            transform: open ? "translateX(20px)" : "translateX(0px)",
          }}
          onClick={() => setOpen(true)}
        >
          <IoMdMenu />
        </button>
        <button
          className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl z-1 transition-all duration-300'
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
          }}
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp />
        </button>
      </div>
      <div
        className='fixed inset-0 w-dvw h-dvh flex justify-center items-center pt-20 gap-8 bg-beige transition-all duration-300 delay-100 z-10'
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      >
        <nav className='flex flex-col gap-12 text-4xl text-black justify-center items-center w-full pb-20'>
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
        <div className='absolute bottom-8 left-0 w-full flex justify-center'>
          <img
            src='/logo-header.svg'
            alt='logo'
            className='w-55 h-8 opacity-95 drop-shadow'
          />
        </div>
      </div>
    </>
  );
}

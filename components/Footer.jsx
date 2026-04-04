'use client';

import Image from 'next/image';
import { SocialWidget } from './SocialWidget';
import { WaveDivider } from './WaveDivider';
import { LINKS } from './Header';

export function Footer({ termsOpen, setTermsOpen }) {

  const openTerms = () => {
    document.body.style.overflow = "hidden";
    setTermsOpen(true);
  };

  const closeTerms = () => {
    document.body.style.overflow = "auto";
    setTermsOpen(false);
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Wave from FAQ → Footer */}
      <WaveDivider position="top" fill="#453336" height={120} overlap={-2} />

      <div className="relative bg-coffee pt-16 pb-10 md:pt-24 md:pb-14">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-terracotta/8 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute bottom-10 -right-32 w-64 h-64 rounded-full bg-sand/8 blur-3xl pointer-events-none" aria-hidden />

        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* ── Main row: Logo+tagline left, Nav+socials right ── */}
          <div className="flex lg:flex-row flex-col justify-between gap-12 mb-14">

            {/* Left: Logo + Tagline */}
            <div className="flex gap-6 text-white items-center lg:items-start">
              <Image
                src="/gypsy-van-logo.svg"
                alt="Gypsy Vans лого"
                width={112}
                height={112}
                className="w-24 md:w-28 h-auto opacity-90 flex-shrink-0"
              />
              <p className="text-lg md:text-xl text-white/90 leading-9 font-bold">
                Създаден с любов.
                <br />
                Изживян с дух.
                <br />
                Споделен с теб.
              </p>
            </div>

            {/* Right: Nav + Socials */}
            <div className="flex flex-col gap-8 lg:items-end items-center">
              <nav aria-label='Навигация в долната част' className="flex flex-wrap lg:justify-end justify-center gap-x-8 gap-y-3">
                {LINKS.map((l) => (
                  <div key={l.href} className="group">
                    {l.action ? (
                      <button
                        onClick={termsOpen ? closeTerms : openTerms}
                        className="text-white/70 text-base md:text-lg tracking-wide hover:text-terracotta transition-colors duration-300 relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-terracotta after:transition-all after:duration-300 group-hover:after:w-full"
                      >
                        {l.label}
                      </button>
                    ) : (
                      <a
                        href={l.href}
                        onClick={closeTerms}
                        className="text-white/70 text-base md:text-lg tracking-wide hover:text-terracotta transition-colors duration-300 relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-terracotta after:transition-all after:duration-300 group-hover:after:w-full"
                      >
                        {l.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
              <div className="flex gap-5">
                <SocialWidget img="/logos/instagram-logo.png" alt="Instagram Page" href="https://www.google.com" />
                <SocialWidget img="/logos/facebook-logo.png" alt="Facebook Page" href="https://www.google.com" />
                <SocialWidget img="/logos/tiktok-logo.png" alt="TikTok Page" href="https://www.google.com" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
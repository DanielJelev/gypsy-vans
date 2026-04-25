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

        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* ── Main row: Logo+tagline left, Nav+socials right ── */}
          <div className="flex lg:flex-row flex-col justify-between gap-12 mb-14">

            {/* Left: Logo + Tagline */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 lg:gap-6 text-white">
              <Image
                src="/gypsy-van-logo.svg"
                alt="Gypsy Vans лого"
                width={112}
                height={112}
                className="w-24 md:w-28 h-auto opacity-90 flex-shrink-0"
              />
              <p className="text-lg md:text-xl text-white/90 leading-9 font-bold text-center lg:text-left">
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
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center gap-3 md:gap-4 text-white/85 text-sm md:text-base">
                  <a
                    href="tel:+359887979934"
                    className="hover:text-terracotta transition-colors duration-300"
                  >
                    +359 887 979 934
                  </a>
                  <span className="text-white/40" aria-hidden="true">/</span>
                  <a
                    href="tel:+359886837085"
                    className="hover:text-terracotta transition-colors duration-300"
                  >
                    +359 886 837 085
                  </a>
                </div>

                <div className="hidden sm:block h-6 w-px bg-white/25" aria-hidden="true" />

                <div className="flex gap-5">
                  <SocialWidget img="/logos/instagram-logo.png" alt="Instagram Page" href="https://www.instagram.com/gypsyvans.bg" />
                  <SocialWidget img="/logos/facebook-logo.png" alt="Facebook Page" href="https://www.facebook.com/gypsyvans.bg" />
                  <SocialWidget img="/logos/tiktok-logo.png" alt="TikTok Page" disabled />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
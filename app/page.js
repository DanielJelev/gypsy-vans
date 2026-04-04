'use client'

import { Hero } from '../components/Hero'
import { BohoIntroSection } from '../components/BohoIntroSection'
import { ParallaxLogoMarqueeSection } from '../components/ParallaxLogoMarqueeSection'
import { BohoAboutSection } from '../components/BohoAboutSection'
import { ParallaxLogoSection } from '../components/ParallaxLogoSection'
import { BohoServicesGrid } from '../components/BohoServicesGrid'
import { BohoTestimonial } from '../components/BohoTestimonial'
import { GalleryCarouselSection } from '../components/GalleryCarouselSection'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import PricePlans from '../components/Plans'
import { ContactForm, ContactSection } from '../components/ContactForm'
import { Faq } from '../components/Faq/Faq'
import { WaveDivider } from '../components/WaveDivider'
import { WavyOrangeLine } from '../components/WavyOrangeLine'
import { LandingAssetsProvider } from './contexts/LandingAssetsContext'
import { jsonLd } from './metadata/jsonLd'
import { useState } from 'react'

export default function Page() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <LandingAssetsProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
      <main className="relative">
      {/* <WavyOrangeLine /> */}

      {/* ── Hero (unchanged) ── */}
      <Hero />

      {/* ── Intro: arch image + van description on terracotta ── */}
      <BohoIntroSection />

      {/* ── Scrolling logo marquee with rolling logo ── */}
      <ParallaxLogoMarqueeSection />

      {/* ── About the family: overlapping images on coffee bg ── */}
      <BohoAboutSection />

      {/* ── Spinning logo parallax + CTA ── */}
      <ParallaxLogoSection
        rotateDeg={360}
        toScale={0.25}
        onCtaClick={() =>
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }
      />

      {/* ── What's inside: arch-topped feature cards ── */}
      <BohoServicesGrid />

      {/* ── Gallery carousel ── */}
      <GalleryCarouselSection />

      {/* ── Testimonial quote on terracotta ── */}
      <BohoTestimonial />

      {/* ── Pricing ── */}
      <section id="prices">
        <PricePlans />
      </section>

      {/* ── FAQ ── */}
      <Faq />

      {/* ── Contact ── */}
      <ContactSection />

      {/* ── Footer ── */}
      <Footer termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
    </main>
    </LandingAssetsProvider>
  );
}

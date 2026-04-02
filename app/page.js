'use client'

import { Hero } from '../components/Hero'
import { BohoIntroSection } from '../components/BohoIntroSection'
import { ParallaxLogoMarqueeSection } from '../components/ParallaxLogoMarqueeSection'
import { BohoAboutSection } from '../components/BohoAboutSection'
import { ParallaxLogoSection } from '../components/ParallaxLogoSection'
import { BohoServicesGrid } from '../components/BohoServicesGrid'
import { BohoTestimonial } from '../components/BohoTestimonial'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import PricePlans from '../components/Plans'
import { ContactForm } from '../components/ContactForm'
import { Faq } from '../components/Faq/Faq'
import { WaveDivider } from '../components/WaveDivider'
import { WavyOrangeLine } from '../components/WavyOrangeLine'
import { LandingAssetsProvider } from './contexts/LandingAssetsContext'
import { useState } from 'react'

export default function Page() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <LandingAssetsProvider>
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

      {/* ── Testimonial quote on terracotta ── */}
      <BohoTestimonial />

      {/* ── Pricing ── */}
      <section id="prices">
        <PricePlans />
      </section>

      {/* ── FAQ ── */}
      <Faq />

      {/* ── Contact ── */}
      <section id="contact" className="relative pt-[100px] pb-[160px] overflow-hidden" style={{ background: 'var(--beige-bg)' }}>
        {/* Decorative blobs */}
        <div className="absolute top-10 -right-32 w-72 h-72 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute bottom-20 -left-24 w-64 h-64 rounded-full bg-sand/20 blur-3xl pointer-events-none" aria-hidden />

        <div className="container-page">
          <div className="max-w-2xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">
                Свържете се
              </p>
              <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
                с нас
              </h2>
              <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-terracotta" />
                <div className="w-3 h-3 rounded-full bg-desert-rose" />
                <div className="w-3 h-3 rounded-full bg-sand" />
                <div className="w-3 h-3 rounded-full bg-sage" />
                <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
              </div>
              <p className="text-cocoa/60 max-w-lg mx-auto mt-6 text-base md:text-lg">
                Имате въпроси или искате да резервирате? Пишете ни!
              </p>
            </div>

            {/* Form card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-sand/60 shadow-boho p-8 md:p-10">
              <ContactForm />
            </div>

          </div>
        </div>

        {/* Bottom wave → Footer */}
        <WaveDivider position="bottom" fill="var(--coffee)" height={120} overlap={-2} />
      </section>

      {/* ── Footer ── */}
      <Footer termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
    </main>
    </LandingAssetsProvider>
  );
}

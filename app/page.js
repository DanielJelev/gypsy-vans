import { Hero } from '../components/Hero'
import { BohoIntroSection } from '../components/BohoIntroSection'
import { ParallaxLogoMarqueeSection } from '../components/ParallaxLogoMarqueeSection'
import { BohoAboutSection } from '../components/BohoAboutSection'
import { ParallaxLogoSection } from '../components/ParallaxLogoSection'
import { BohoServicesGrid } from '../components/BohoServicesGrid'
import { BohoTestimonial } from '../components/BohoTestimonial'
import { GalleryCarouselSection } from '../components/GalleryCarouselSection'
import { TermsShell } from '../components/TermsShell'
import PricePlans from '../components/Plans'
import { ContactSection } from '../components/ContactForm'
import { Faq } from '../components/Faq/Faq'
import { LandingAssetsProvider } from './contexts/LandingAssetsContext'
import { jsonLd } from './metadata/jsonLd'

export default function Page() {
  return (
    <LandingAssetsProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TermsShell>
        <main className="relative">
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
    </main>
      </TermsShell>
    </LandingAssetsProvider>
  );
}

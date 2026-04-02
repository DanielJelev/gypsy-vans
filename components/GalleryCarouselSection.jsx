'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function GalleryCarouselSection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1, containScroll: false, speed: 5 },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true })]
  );

  // Fetch gallery images
  useEffect(() => {
    fetch('/api/gallery?page=1&limit=50')
      .then((r) => r.json())
      .then((data) => {
        if (data.images?.length) setImages(data.images);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Lightbox controls
  const openLightbox = useCallback((idx) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i > 0 ? i - 1 : images.length - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i < images.length - 1 ? i + 1 : 0)),
    [images.length]
  );

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, prev, next]);

  if (loading || !images.length) return null;

  // Slight alternating rotations for a scattered polaroid feel
  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0', '-rotate-3'];

  // Random captions cycling across polaroids
  const captions = [
    'За свободни души & диви сърца',
    'Луксозен бохо кемпер ван за 4-ма',
    'Заспивай, където те отведе пътя',
    'Събуждай се свободен',
    'Готов ли си за приключение?',
  ];

  return (
    <>
      <section className="relative bg-beige overflow-hidden py-12 md:py-20">
        {/* Embla Carousel */}
        <div className="overflow-hidden px-4 md:px-8" ref={emblaRef}>
          <div className="flex items-center -ml-4 md:-ml-6">
            {images.map((img, i) => {
              const rotation = rotations[i % rotations.length];

              return (
                <button
                  key={img.id}
                  onClick={() => openLightbox(i)}
                  className="flex-[0_0_85%] md:flex-[0_0_calc(100%/3)] min-w-0 group cursor-pointer pl-4 md:pl-6"
                >
                  <div className="flex items-center justify-center py-4">
                    {/* Polaroid frame */}
                    <div
                      className={`bg-white p-3 md:p-4 pb-3 md:pb-4 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.03] group-hover:rotate-0 ${rotation}`}
                      style={{ maxWidth: '380px', width: '100%' }}
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={img.thumbnail}
                          alt={img.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/10 transition-colors duration-300" />
                      </div>
                      {/* Polaroid bottom caption */}
                      <div className="mt-3 md:mt-4 flex flex-col items-center gap-1.5">
                        <p className="serif-head text-sm md:text-base text-cocoa/70 select-none text-center font-semibold italic whitespace-nowrap">
                          {captions[i % captions.length]}
                        </p>
                        <img src="/Logo-04.svg" alt="" className="h-6 md:h-8 w-auto opacity-60 select-none pointer-events-none" aria-hidden />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox — identical to gallery page */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-6 text-white/80 hover:text-white text-4xl z-10 transition-colors"
              aria-label="Затвори"
            >
              ✕
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
              aria-label="Предишна"
            >
              ‹
            </button>

            <motion.img
              key={lightbox}
              src={images[lightbox].full}
              alt={images[lightbox].name}
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => { e.target.src = images[lightbox].thumbnail; }}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
              aria-label="Следваща"
            >
              ›
            </button>

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

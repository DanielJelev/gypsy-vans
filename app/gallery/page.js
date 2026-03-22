'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../../components/Header'

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const [termsOpen, setTermsOpen] = useState(false)

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setImages(data.images || [])
        }
      })
      .catch(() => setError('Неуспешно зареждане на галерията'))
      .finally(() => setLoading(false))
  }, [])

  const openLightbox = useCallback((idx) => setLightbox(idx), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length])
  const next = useCallback(() => setLightbox((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length])

  return (
    <main className="relative z-20 min-h-screen bg-beige">
      <Header termsOpen={termsOpen} setTermsOpen={setTermsOpen} />

      {/* Title */}
      <section className="pt-28 pb-8 text-center container-page">
        <h1 className="font-head text-4xl md:text-5xl text-coffee mb-3">Галерия</h1>
        <p className="text-cocoa/70 max-w-xl mx-auto">
          Моменти от пътя — разгледайте снимките от нашите приключения с Gypsy Vans.
        </p>
      </section>

      {/* Content */}
      <section className="container-page pb-20">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-3 border-cocoa/30 border-t-cocoa rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-cocoa/60">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && images.length === 0 && (
          <p className="text-center py-20 text-cocoa/60">Няма намерени снимки.</p>
        )}

        {!loading && !error && images.length > 0 && (
          <div className="gallery-grid">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="gallery-frame"
                >
                  <img
                    src={img.thumbnail}
                    alt={img.name}
                    loading="lazy"
                    className="gallery-img"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-6 text-white/80 hover:text-white text-4xl z-10 transition-colors"
              aria-label="Затвори"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
              aria-label="Предишна"
            >
              ‹
            </button>

            {/* Full-size image */}
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
              onError={(e) => { e.target.src = images[lightbox].thumbnail }}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
              aria-label="Следваща"
            >
              ›
            </button>

            {/* Counter */}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

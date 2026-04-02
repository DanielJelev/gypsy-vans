'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const PAGE_SIZE = 12

const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0', '-rotate-3']
const captions = [
  'За свободни души & диви сърца',
  'Луксозен бохо кемпер ван за 4-ма',
  'Заспивай, където те отведе пътя',
  'Събуждай се свободен',
  'Готов ли си за приключение?',
]
// Cycling scale + span patterns for masonry-like variety
const sizes = [
  { span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 'scale-[0.88]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 'scale-100' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 'scale-[0.92]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 'scale-[0.82]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 'scale-100' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 'scale-[0.85]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 'scale-[0.95]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 'scale-[0.78]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 'scale-100' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 'scale-[0.9]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 'scale-[1.02]' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 'scale-[0.86]' },
]

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(false)
  const [page, setPage] = useState(1)
  const [lightbox, setLightbox] = useState(null)
  const [termsOpen, setTermsOpen] = useState(false)
  const sentinelRef = useRef(null)

  const fetchPage = useCallback(async (pageNum) => {
    const res = await fetch(`/api/gallery?page=${pageNum}&limit=${PAGE_SIZE}`)
    const data = await res.json()
    if (data.error) throw new Error(data.error)
    return data
  }, [])

  // Initial load
  useEffect(() => {
    fetchPage(1)
      .then((data) => {
        setImages(data.images || [])
        setHasMore(data.hasMore)
        setPage(1)
      })
      .catch(() => setError('Неуспешно зареждане на галерията'))
      .finally(() => setLoading(false))
  }, [fetchPage])

  // Infinite scroll observer
  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          setLoadingMore(true)
          const nextPage = page + 1
          fetchPage(nextPage)
            .then((data) => {
              setImages((prev) => [...prev, ...(data.images || [])])
              setHasMore(data.hasMore)
              setPage(nextPage)
            })
            .catch(() => {})
            .finally(() => setLoadingMore(false))
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [hasMore, loadingMore, page, fetchPage])

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
          <>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {images.map((img, i) => {
              const rotation = rotations[i % rotations.length]
              const caption = captions[i % captions.length]
              const size = sizes[i % sizes.length]

              return (
                <motion.div
                  key={img.id}
                  className={size.span}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                >
                  <button
                    onClick={() => openLightbox(i)}
                    className="w-full group cursor-pointer"
                  >
                    <div className={`flex items-center justify-center py-2 ${size.scale}`}>
                      <div
                        className={`relative bg-white p-3 md:p-4 pb-3 md:pb-4 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.03] group-hover:rotate-0 w-full ${rotation}`}
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
                        <div className="mt-3 md:mt-4 flex justify-center">
                          <img src="/Logo-04.svg" alt="" className="h-6 md:h-8 w-auto opacity-60 select-none pointer-events-none" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* Sentinel for infinite scroll */}
          <div ref={sentinelRef} className="h-1" />

          {loadingMore && (
            <div className="flex justify-center py-10">
              <div className="w-10 h-10 border-3 border-cocoa/30 border-t-cocoa rounded-full animate-spin" />
            </div>
          )}
          </>
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

      <Footer termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
    </main>
  )
}

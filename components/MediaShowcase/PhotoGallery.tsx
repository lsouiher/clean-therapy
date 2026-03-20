"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Placeholder Unsplash photos — replace with real photos later
const photos = [
  {
    id: "1",
    alt: "Clean kitchen — Cleveland Heights",
    src: "https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?w=800&q=80&fit=crop",
  },
  {
    id: "2",
    alt: "Spotless bathroom — Westlake",
    src: "https://images.unsplash.com/photo-1613849925362-38fb4c16ff36?w=800&q=80&fit=crop",
  },
  {
    id: "3",
    alt: "Living room deep clean — Rocky River",
    src: "https://images.unsplash.com/photo-1768609239321-1cfe14893e80?w=800&q=80&fit=crop",
  },
  {
    id: "4",
    alt: "Sparkling countertops — Lakewood",
    src: "https://images.unsplash.com/photo-1613545564235-db7af30081bf?w=800&q=80&fit=crop",
  },
  {
    id: "5",
    alt: "Organized bedroom — Shaker Heights",
    src: "https://images.unsplash.com/photo-1741559935512-3b018321e35f?w=800&q=80&fit=crop",
  },
  {
    id: "6",
    alt: "Fresh floors — Strongsville",
    src: "https://images.unsplash.com/photo-1722604828977-395d52c3cd23?w=800&q=80&fit=crop",
  },
  {
    id: "7",
    alt: "Kitchen detail — Cleveland",
    src: "https://images.unsplash.com/photo-1582667407868-07060cb5e61f?w=800&q=80&fit=crop",
  },
  {
    id: "8",
    alt: "Bathroom tile work — Parma",
    src: "https://images.unsplash.com/photo-1754574741164-a41418029cfb?w=800&q=80&fit=crop",
  },
];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setLightbox(i)}
          >
            <div
              className={`rounded-xl overflow-hidden bg-sage-100 group-hover:shadow-lg transition-shadow relative ${
                i % 3 === 0 ? "h-64" : i % 3 === 1 ? "h-48" : "h-56"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] relative bg-sage-100">
                <Image
                  src={photos[lightbox].src.replace("w=800", "w=1200")}
                  alt={photos[lightbox].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <p className="text-sm text-charcoal-700">{photos[lightbox].alt}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightbox(lightbox > 0 ? lightbox - 1 : photos.length - 1)}
                    className="p-2 rounded-full hover:bg-sage-50 transition-colors"
                    aria-label="Previous"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setLightbox(lightbox < photos.length - 1 ? lightbox + 1 : 0)}
                    className="p-2 rounded-full hover:bg-sage-50 transition-colors"
                    aria-label="Next"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-1 bg-white/90 rounded-full hover:bg-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

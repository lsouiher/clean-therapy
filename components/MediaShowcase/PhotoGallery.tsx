"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with real photo paths in /public/images/
const photos = [
  { id: "1", alt: "Clean kitchen — Cleveland Heights" },
  { id: "2", alt: "Spotless bathroom — Westlake" },
  { id: "3", alt: "Living room deep clean — Rocky River" },
  { id: "4", alt: "Sparkling countertops — Lakewood" },
  { id: "5", alt: "Organized bedroom — Shaker Heights" },
  { id: "6", alt: "Fresh floors — Strongsville" },
  { id: "7", alt: "Kitchen detail — Cleveland" },
  { id: "8", alt: "Bathroom tile work — Parma" },
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
              className={`rounded-xl overflow-hidden bg-gradient-to-br from-sage-100 to-cream-200 flex items-center justify-center group-hover:shadow-lg transition-shadow ${
                i % 3 === 0 ? "h-64" : i % 3 === 1 ? "h-48" : "h-56"
              }`}
            >
              {/* Replace with: <Image src={`/images/gallery-${photo.id}.jpg`} ... /> */}
              <div className="text-center p-4">
                <svg className="w-8 h-8 mx-auto text-sage-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-sage-500">{photo.alt}</p>
              </div>
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
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 to-cream-200 flex items-center justify-center">
                {/* Replace with actual image */}
                <p className="text-sage-500 font-medium">
                  {photos[lightbox].alt}
                </p>
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

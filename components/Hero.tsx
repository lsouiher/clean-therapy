"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Unsplash placeholder of a bright clean home interior */}
      <Image
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&fit=crop"
        alt="Clean, bright home interior"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal-900/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/90 text-sage-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✨ Clean Home, Clear Mind.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
        >
          Cleveland&apos;s Home Cleaning You Can Actually Trust.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Professional residential cleaning by Lauren — where every detail
          matters and your home feels like new.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="#contact"
            className="bg-sage-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-600 transition-colors shadow-lg"
          >
            Book a Cleaning
          </a>
          <a
            href="#our-work"
            className="bg-white/20 backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors"
          >
            See My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80"
        >
          <span>⭐ 5-Star Rated</span>
          <span>·</span>
          <span>Cleveland-Based</span>
          <span>·</span>
          <span>Fully Insured</span>
          <span>·</span>
          <span>Referral-Trusted</span>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "Cleveland Local",
    desc: "Born and raised in the area. She's cleaning homes in your neighborhood.",
  },
  {
    title: "Attention to Detail",
    desc: "Every corner, every surface, every single time.",
  },
  {
    title: "Referral-Built Business",
    desc: "Almost every client came through a personal recommendation.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Mornings, afternoons, and weekends available.",
  },
  {
    title: "Insured & Professional",
    desc: "Your home and belongings are always protected.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center shadow-lg">
              {/* Replace with real headshot: <Image src="/images/lauren.jpg" ... /> */}
              <div className="text-center text-sage-600">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm font-medium">Lauren&apos;s Photo</p>
              </div>
            </div>
          </motion.div>

          {/* Trust content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-8">
              Why Choose Lauren
            </h2>

            <div className="space-y-5">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <span className="text-sage-500 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-charcoal-800">
                      {point.title}
                    </h3>
                    <p className="text-charcoal-700 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-8 border-l-4 border-gold-400 pl-4 italic text-charcoal-700">
              &ldquo;I believe a clean home creates mental clarity. My goal is
              for you to walk through the door and immediately feel the
              difference.&rdquo;
              <span className="block mt-2 not-italic font-semibold text-charcoal-800">
                — Lauren
              </span>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

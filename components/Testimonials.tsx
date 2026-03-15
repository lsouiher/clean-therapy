"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Lauren transformed my home before a family gathering. She was thorough, punctual, and my kitchen had never looked so good.",
    name: "Sarah M.",
    city: "Westlake, OH",
  },
  {
    quote:
      "I've tried other cleaning services in Cleveland but Clean Therapy is on another level. She pays attention to details no one else does.",
    name: "Jessica T.",
    city: "Rocky River, OH",
  },
  {
    quote:
      "Booked Lauren for a move-out clean and got my full deposit back. Worth every single penny!",
    name: "Mike R.",
    city: "Cleveland Heights, OH",
  },
  {
    quote:
      "Lauren comes every two weeks and our home consistently looks like we just moved in. Reliable, kind, and incredibly thorough.",
    name: "Amanda K.",
    city: "Lakewood, OH",
  },
  {
    quote:
      "I was hesitant to let someone into my home but Lauren made me feel completely comfortable. The results speak for themselves.",
    name: "Diane F.",
    city: "Shaker Heights, OH",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-3">
            What Clients Are Saying
          </h2>
        </div>

        {/* Scrolling row on desktop, stacked on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-80 md:w-auto snap-center bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="text-gold-400 text-4xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-charcoal-700 leading-relaxed mb-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-charcoal-800 text-sm">
                    {t.name}
                  </p>
                  <p className="text-charcoal-700/60 text-xs">{t.city}</p>
                </div>
                <div className="text-gold-400 text-sm tracking-wider">
                  ★★★★★
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

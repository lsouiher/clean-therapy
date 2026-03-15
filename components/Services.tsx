"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🏠",
    title: "Standard Cleaning",
    description:
      "Regular maintenance cleans for a consistently tidy home. Dusting, vacuuming, mopping, bathrooms, and kitchen surfaces.",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description:
      "Top-to-bottom, every corner scrubbed. Perfect for first-time cleans or seasonal refreshes.",
  },
  {
    icon: "📦",
    title: "Move In / Move Out",
    description:
      "Leave or arrive to a spotless space. Inside cabinets, appliances, and baseboards included.",
  },
  {
    icon: "🎉",
    title: "Post-Event Cleaning",
    description:
      "After parties or gatherings — quick turnaround to restore your home.",
  },
  {
    icon: "🌿",
    title: "Add-On Services",
    description:
      "Inside fridge, inside oven, interior windows, laundry folding.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-3">
            What We Offer
          </h2>
          <p className="text-charcoal-700 text-lg">
            Serving Cleveland homeowners with care and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-cream-50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-800 mb-2">
                {service.title}
              </h3>
              <p className="text-charcoal-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

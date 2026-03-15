"use client";

import { motion } from "framer-motion";

const areas = [
  "Cleveland",
  "Cleveland Heights",
  "Shaker Heights",
  "Lakewood",
  "Rocky River",
  "Westlake",
  "Bay Village",
  "Strongsville",
  "Parma",
  "Lyndhurst",
  "Beachwood",
  "Solon",
  "Brecksville",
  "North Olmsted",
  "Fairview Park",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-3">
            Proudly Serving Greater Cleveland
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Cities list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-charcoal-700"
                >
                  <svg
                    className="w-4 h-4 text-sage-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-charcoal-700/70">
              Don&apos;t see your area? Give Lauren a call at{" "}
              <a
                href="tel:2169065283"
                className="font-semibold text-sage-600 hover:underline"
              >
                216-906-5283
              </a>{" "}
              — she may still be able to help!
            </p>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33702865076!2d-81.83992584130483!3d41.47871847594096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0, filter: "grayscale(40%) contrast(95%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map — Greater Cleveland, Ohio"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

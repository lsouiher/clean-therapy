"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Standard Cleaning",
  "Deep Clean",
  "Move In / Move Out",
  "Post-Event Cleaning",
  "Other",
];

const homeSizeOptions = ["Studio / 1 BR", "2 BR", "3 BR", "4 BR+"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      // Dev fallback — log to console and redirect
      console.log("Form data:", Object.fromEntries(data));
      window.location.href = "/thank-you";
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again or call Lauren directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call Lauren directly.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-3">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-charcoal-700 text-lg">
            Get in touch with Lauren today. She responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal-800 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-800 mb-1">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-800 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-charcoal-800 mb-1">
                  City / Neighborhood <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal-800 mb-1">
                  Service Interested In <span className="text-red-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow bg-white"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="homeSize" className="block text-sm font-medium text-charcoal-800 mb-1">
                  Home Size
                </label>
                <select
                  id="homeSize"
                  name="homeSize"
                  className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow bg-white"
                >
                  <option value="">Select size (optional)</option>
                  {homeSizeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-charcoal-800 mb-1">
                Preferred Day / Time
              </label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                placeholder="e.g., Weekday mornings, Saturday afternoon"
                className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-800 mb-1">
                Message / Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-shadow resize-none"
              />
            </div>

            {errorMsg && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-sage-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-sage-600 transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Call card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              {/* Headshot placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage-200 to-sage-300 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-sage-500 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-serif font-semibold text-charcoal-800 mb-1">
                Lauren
              </p>
              <a
                href="tel:2169065283"
                className="inline-block text-sage-600 font-bold text-xl hover:underline"
              >
                216-906-5283
              </a>
              <p className="text-xs text-charcoal-700/60 mt-1">
                Tap to call
              </p>
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sage-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-charcoal-700">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-400">★</span>
                <span className="text-sm text-charcoal-700">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sage-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-charcoal-700">Cleveland Local</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

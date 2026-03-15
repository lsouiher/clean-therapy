"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Service Area", href: "#service-area" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <SprayBottleIcon />
          <span className="font-serif text-lg md:text-xl font-bold text-charcoal-800">
            Clean Therapy <span className="text-sage-500">by Lauren</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-700 hover:text-sage-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sage-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-600 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-charcoal-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-serif text-charcoal-800 hover:text-sage-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-sage-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-sage-600 transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SprayBottleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-sage-500">
      <path
        d="M11 8h4v2h-4V8zm-1 2h6v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3zm1 5h4l1 14H10l1-14z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M15 6h2l1-2h-4l1 2z"
        fill="currentColor"
      />
      <path
        d="M20 10c2-1 4-3 3-5"
        stroke="#b8935f"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 12c1.5 0 3.5-1 4-3"
        stroke="#b8935f"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="6" r="1" fill="#95a384" />
      <circle cx="27" cy="9" r="0.8" fill="#95a384" />
      <path
        d="M8 22c-2-1-3 1-2 3s3 2 2 0"
        stroke="#95a384"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

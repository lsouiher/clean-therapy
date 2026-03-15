"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfter from "./BeforeAfter";
import PhotoGallery from "./PhotoGallery";
import VideoShowcase from "./VideoShowcase";

const tabs = ["Before & After", "Photo Gallery", "Videos"] as const;

export default function MediaShowcase() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Before & After");

  return (
    <section id="our-work" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-800 mb-3">
            See the Clean Therapy Difference
          </h2>
          <p className="text-charcoal-700 text-lg">
            Real homes. Real results. Right here in Cleveland.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-sage-500 text-white shadow-sm"
                  : "bg-sage-50 text-charcoal-700 hover:bg-sage-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "Before & After" && <BeforeAfter />}
          {activeTab === "Photo Gallery" && <PhotoGallery />}
          {activeTab === "Videos" && <VideoShowcase />}
        </motion.div>
      </div>
    </section>
  );
}

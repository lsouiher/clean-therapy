"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface CompareItem {
  id: string;
  label: string;
  location: string;
  before: string;
  after: string;
}

// Placeholder Unsplash photos — replace with real before/after photos later
const compareItems: CompareItem[] = [
  {
    id: "1",
    label: "Kitchen Deep Clean",
    location: "Rocky River, OH",
    before: "https://images.unsplash.com/photo-1631396327584-5efaf434500a?w=800&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1560185127-1902ccdc5094?w=800&q=80&fit=crop",
  },
  {
    id: "2",
    label: "Bathroom Refresh",
    location: "Cleveland Heights, OH",
    before: "https://images.unsplash.com/photo-1595579987159-32ca7b85e0e2?w=800&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1753605788101-04d1e653e74a?w=800&q=80&fit=crop",
  },
  {
    id: "3",
    label: "Living Room",
    location: "Lakewood, OH",
    before: "https://images.unsplash.com/photo-1706042555112-4ae1b484a742?w=800&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1751945965597-71171ec7a458?w=800&q=80&fit=crop",
  },
];

function CompareSlider({ item }: { item: CompareItem }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = () => {
    dragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none bg-sage-100"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* "After" side (full background) */}
        <div className="absolute inset-0">
          <Image
            src={item.after}
            alt={`${item.label} — After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute bottom-3 right-3 bg-sage-500/80 text-white text-xs font-semibold px-2 py-1 rounded">
            After
          </span>
        </div>

        {/* "Before" side (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.label} — Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute bottom-3 left-3 bg-charcoal-700/80 text-white text-xs font-semibold px-2 py-1 rounded">
            Before
          </span>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <svg className="w-4 h-4 text-charcoal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-charcoal-700">
        <span className="font-medium">{item.label}</span> — {item.location}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {compareItems.map((item) => (
        <CompareSlider key={item.id} item={item} />
      ))}
      <p className="col-span-full text-center text-sm text-charcoal-700/60 mt-4">
        Drag the slider to compare before and after results.
      </p>
    </div>
  );
}

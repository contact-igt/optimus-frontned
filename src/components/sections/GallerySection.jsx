"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/constants";

/* Grid layout config — controls col/row span per card index */
const GRID_CONFIG = [
  { colSpan: "sm:col-span-2", rowSpan: "sm:row-span-2", height: "h-56 sm:h-full" }, // 0 — featured large
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 1
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 2
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 3
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 4
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 5
  { colSpan: "",              rowSpan: "",               height: "h-48 sm:h-48"   }, // 6
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Inside Our Clinic
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Gallery
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
          <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
            A glimpse into our world-class facilities, operation theatres, and patient care environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:grid-rows-[220px_220px]">
          {GALLERY_IMAGES.map((img, index) => {
            const cfg = GRID_CONFIG[index] ?? GRID_CONFIG[GRID_CONFIG.length - 1];
            return (
              <button
                key={img.id}
                onClick={() => setLightbox(index)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${cfg.colSpan} ${cfg.rowSpan} ${cfg.height}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                {/* Caption on first image */}
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-4 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">{img.alt}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold px-7 py-2.5 rounded-xl transition-all duration-200 text-sm"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {GALLERY_IMAGES[lightbox].alt} &nbsp;·&nbsp; {lightbox + 1} / {GALLERY_IMAGES.length}
          </p>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % GALLERY_IMAGES.length); }}
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === lightbox ? "bg-white w-5" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

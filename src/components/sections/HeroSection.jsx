"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_SLIDES, SITE } from "@/constants";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setCurrent((p) => (p + 1) % HERO_SLIDES.length);

  const slide = HERO_SLIDES[current];

  return (
    <section id="home" className="relative overflow-hidden bg-cyan-600 min-h-[520px] flex items-center">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/80 via-cyan-600/60 to-cyan-500/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full flex flex-col lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-white text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200 mb-3">
            Welcome to {SITE.name}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            {slide.title}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-100 mb-5">
            {slide.subtitle}
          </h2>
          <p className="text-cyan-100 text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button href="#contact" variant="white" size="lg">
              Contact Us
            </Button>
            <Button href="#services" variant="ghost" size="lg">
              Our Services
            </Button>
          </div>
        </div>

        {/* Hero image panel */}
        <div className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 relative">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-cyan-600 hover:bg-cyan-50 transition-all duration-200 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-cyan-600 hover:bg-cyan-50 transition-all duration-200 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

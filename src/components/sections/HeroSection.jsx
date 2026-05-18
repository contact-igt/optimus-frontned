"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_SLIDES, SITE } from "@/constants";
import { Check, Phone, Calendar, ChevronRight, ChevronLeft } from "lucide-react";



export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = useCallback(() => goTo((current + 1) % HERO_SLIDES.length), [current, goTo]);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center"
      style={{
        background: "linear-gradient(135deg, #0e7490 0%, #0891b2 40%, #06b6d4 80%, #22d3ee 100%)",
      }}
    >
      {/* ── Decorative background blobs ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-2xl" />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 w-full">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
        >
          {/* ── LEFT: Text content ─────────────────────────────────────── */}
          <div className="flex-1 text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4.5 py-2 mb-6 shadow-lg shadow-black/5 group/badge transition-all duration-300 hover:bg-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">
                {slide.badge}
              </span>
            </div>

            {/* Master promise */}
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200 mb-2">
              Welcome to {SITE.name} {SITE.tagline}
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-[1.15] mb-4 text-white">
              Advanced Eye &amp; Dental Care{" "}
              <span className="text-cyan-200">in Lucknow</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg font-medium text-cyan-100 mb-3 leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-cyan-200/90 mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {slide.description}
            </p>

            {/* Trust bullets */}
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4 mb-8 justify-center lg:justify-start">
              {slide.trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-sm font-bold text-white group/bullet">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-400 text-white group-hover/bullet:scale-110 transition-transform duration-200">
                    <Check size={14} strokeWidth={3.5} />
                  </div>
                  <span className="drop-shadow-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              {/* Primary: Book Appointment */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-3xl bg-white text-cyan-700 font-bold text-sm uppercase tracking-wide shadow-xl hover:bg-cyan-50 active:scale-95 transition-all duration-200"
              >
                <Calendar size={18} strokeWidth={2.2} />
                Book Appointment
              </Link>

              {/* Secondary: Call Now */}
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-4xl bg-transparent text-white border-2 border-white/60 font-bold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-200"
              >
                <Phone size={18} strokeWidth={2.2} />
                Call Now
              </a>
            </div>

            {/* Explore link */}
            <div className="mt-5">
              <Link
                href="#services"
                className="inline-flex items-center gap-1.5 text-cyan-200 hover:text-white text-sm font-medium transition-colors group"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Visual panel ────────────────────────────────────── */}
          <div className="relative shrink-0 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />

            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-[60%_50%]"
                priority
              />
              {/* Subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge — top-right: Specialists */}
            <div className={`absolute -top-4 -right-2 sm:-right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-[1.5rem] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/60 group/specialist hover:-translate-y-1 transition-all duration-500 z-20 scale-90 sm:scale-100 ring-2 ring-white/30`}>
              {/* Animated glow background */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-[1.5rem] opacity-0 group-hover/specialist:opacity-100 transition-opacity duration-500 blur-xl -z-10 ${slide.id === 1 ? "bg-cyan-400/20" : "bg-teal-400/20"}`} />
              
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] ${slide.id === 1 ? "bg-cyan-50 text-cyan-600" : "bg-teal-50 text-teal-600"}`}>
                {slide.id === 1 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <span className={`inline-flex w-fit px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 ${slide.id === 1 ? "bg-cyan-100 text-cyan-700" : "bg-teal-100 text-teal-700"}`}>
                  {slide.id === 1 ? "Eye Care" : "Dental Care"}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-gray-900 leading-none tracking-tight whitespace-nowrap">
                  Expert Specialists
                </span>
              </div>
            </div>

            {/* Floating badge — bottom-left: NABH Accredited */}
            <div className={`absolute -bottom-6 -left-2 sm:-left-12 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-[1.5rem] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/60 group/nabh hover:-translate-y-1 transition-all duration-500 z-20 scale-90 sm:scale-100 ring-2 ring-white/30`}>
              {/* Animated glow background */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-[1.5rem] opacity-0 group-hover/nabh:opacity-100 transition-opacity duration-500 blur-xl -z-10 ${slide.id === 1 ? "bg-cyan-400/20" : "bg-teal-400/20"}`} />

              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] ${slide.id === 1 ? "bg-cyan-50" : "bg-teal-50"}`}>
                <Image 
                  src="/assets/NABH_logo.png" 
                  alt="NABH Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain drop-shadow-sm w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`inline-flex w-fit px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 ${slide.id === 1 ? "bg-cyan-100 text-cyan-700" : "bg-teal-100 text-teal-700"}`}>
                  Certified
                </span>
                <span className="text-xs sm:text-[13px] font-black text-gray-900 leading-none tracking-tight whitespace-nowrap">
                  NABH Accredited
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Left arrow ───────────────────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* ── Right arrow ──────────────────────────────────────────────────── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* ── Slide indicator dots ─────────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current
                ? "w-7 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

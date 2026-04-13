"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt={`${SITE.name} logo`}
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-bold text-gray-800 leading-tight text-sm uppercase tracking-wide">
              {SITE.name}
            </p>
            <p className="text-xs text-cyan-600 font-medium">{SITE.tagline}</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-cyan-600 uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Appointment button + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="hidden sm:inline-flex uppercase tracking-wide text-xs"
          >
            Appointment
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 mt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded uppercase tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" size="md" className="mt-2 w-full uppercase tracking-wide text-xs">
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

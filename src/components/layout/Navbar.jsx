"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();
  const dropdownTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const openDropdown = (label) => {
    clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isServiceActive = (link) =>
    pathname === link.href ||
    (link.dropdown && link.dropdown.some((d) => pathname === d.href));

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo_removed_bg.png"
            alt={`${SITE.name} logo`}
            width={180}
            height={180}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = isServiceActive(link);

            if (link.dropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? "text-cyan-600 border-b-2 border-cyan-600 pb-0.5"
                        : "text-gray-700 hover:text-cyan-600"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={closeDropdown}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0 ${
                            pathname === item.href
                              ? "text-cyan-600 bg-cyan-50"
                              : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                          }`}
                        >
                          <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-cyan-600 border-b-2 border-cyan-600 pb-0.5"
                    : "text-gray-700 hover:text-cyan-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Appointment + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center font-semibold rounded transition-all duration-200 bg-cyan-600 text-white hover:bg-cyan-700 border border-cyan-600 px-6 py-2.5 text-xs uppercase tracking-wide"
          >
            Appointment
          </Link>
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
            {NAV_LINKS.map((link) => {
              const isActive = isServiceActive(link);

              if (link.dropdown) {
                const expanded = mobileExpanded === link.label;
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : link.label)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold rounded uppercase tracking-wide transition-colors ${
                        isActive
                          ? "text-cyan-600 bg-cyan-50"
                          : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expanded && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-cyan-100 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`py-2 px-2 text-sm font-medium rounded transition-colors ${
                              pathname === item.href
                                ? "text-cyan-600"
                                : "text-gray-600 hover:text-cyan-600"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 px-3 text-sm font-semibold rounded uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 w-full inline-flex items-center justify-center font-semibold rounded transition-all duration-200 bg-cyan-600 text-white hover:bg-cyan-700 border border-cyan-600 px-6 py-2.5 text-xs uppercase tracking-wide"
            >

              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
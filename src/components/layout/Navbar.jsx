"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/constants";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();
  const dropdownTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openDropdown = (label) => {
    clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isLinkActive = (link) =>
    pathname === link.href ||
    (link.dropdown && link.dropdown.some((d) => pathname === d.href));

  const handleScrollLink = (e, href) => {
    const [path, hash] = href.split("#");
    // If the path matches current pathname (or both are home), and there's a hash, scroll smoothly
    const isCurrentPage = pathname === path || (path === "/" && pathname === "/");
    
    if (hash && isCurrentPage) {
      const element = document.getElementById(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 transition-all duration-300 ${menuOpen ? "z-30" : "z-50"} ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.10)]"
            : "bg-white shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-2">
          <div className="flex items-center justify-between h-[92px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/assets/logo_removed_bg.png"
                alt={`${SITE.name} logo`}
                width={240}
                height={120}
                className="object-contain h-24 md:h-26 w-auto"
                priority
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(link);

                if (link.dropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        className={`flex items-center gap-1 px-5 py-3 rounded-full text-[13px] font-semibold uppercase tracking-wide transition-colors ${isActive
                          ? "text-cyan-600 bg-cyan-50 hover:bg-cyan-100/50"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          strokeWidth={2.5}
                          className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Dropdown panel */}
                      {activeDropdown === link.label && (
                        <div
                          className="absolute top-full left-1/2 translate-x-1/2 pt-2 w-64 z-50 animate-fadeInDown"
                          onMouseEnter={() => openDropdown(link.label)}
                          onMouseLeave={closeDropdown}
                        >
                          {/* Dropdown arrow - positioned outside overflow-hidden container */}
                          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 z-10" />
                          
                          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="relative z-20 p-1.5">
                              {link.dropdown.map((item, idx) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={(e) => handleScrollLink(e, item.href)}
                                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${pathname === item.href
                                      ? "text-cyan-600 bg-cyan-50"
                                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    } ${idx === 0 ? "rounded-t-xl" : ""} ${idx === link.dropdown.length - 1 ? "rounded-b-xl" : ""
                                    }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${pathname === item.href ? "bg-cyan-600 scale-125" : "bg-cyan-400"
                                    }`} />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollLink(e, link.href)}
                    className={`px-5 py-3 rounded-full text-[13px] font-semibold uppercase tracking-wide transition-colors ${isActive
                      ? "text-cyan-600 bg-cyan-50 hover:bg-cyan-100/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA Buttons + Hamburger ── */}
            <div className="flex items-center gap-2.5">

              {/* Primary CTA: Book Appointment */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-4 rounded-3xl bg-cyan-600 text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap hover:bg-cyan-700 active:scale-95 transition-all duration-150"
              >
                <Calendar size={14} strokeWidth={2.5} className="shrink-0" />
                Book Appointment
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen
                  ? <X size={20} strokeWidth={2} />
                  : <Menu size={20} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo_removed_bg.png"
              alt={`${SITE.name} logo`}
              width={120}
              height={120}
              className="object-contain h-20 w-auto"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="overflow-y-auto px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link);

            if (link.dropdown) {
              const expanded = mobileExpanded === link.label;
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileExpanded(expanded ? null : link.label)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${isActive
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 border-cyan-100 pl-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            handleScrollLink(e, item.href);
                            if (!item.href.includes("#")) setMenuOpen(false);
                          }}
                          className={`flex items-center gap-2 py-2 px-2 text-sm font-medium rounded-lg transition-colors ${pathname === item.href
                            ? "text-cyan-600"
                            : "text-gray-600 hover:text-cyan-600"
                            }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0" />
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
                onClick={(e) => {
                  handleScrollLink(e, link.href);
                  if (!link.href.startsWith("/#")) setMenuOpen(false);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${isActive
                  ? "text-cyan-600 bg-cyan-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTAs */}
        <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-3xl bg-cyan-600 text-white text-sm font-bold uppercase tracking-wide hover:bg-cyan-700 transition-colors"
          >
            <Calendar size={16} strokeWidth={2.5} className="shrink-0" />
            Book Appointment
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.18s ease-out both;
        }
      `}</style>
    </>
  );
}
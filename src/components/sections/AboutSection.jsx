import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  User,
  Search,
  Clipboard,
  Heart,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    Icon: Shield,
    label: "NABH-Accredited Quality Standards",
    desc: "Nationally certified care you can trust for safety and outcomes",
  },
  {
    Icon: User,
    label: "Specialist-Led Treatment",
    desc: "Expert ophthalmologists and dental surgeons lead every case",
  },
  {
    Icon: Search,
    label: "Modern OT & Diagnostics",
    desc: "State-of-the-art operation theatres and diagnostic equipment",
  },
  {
    Icon: Clipboard,
    label: "Personalised Treatment Planning",
    desc: "Every care plan is tailored to your individual health needs",
  },
  {
    Icon: Heart,
    label: "Compassionate Patient Care",
    desc: "Safe, ethical, patient-friendly approach at every step",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Image with overlays ── */}
          <div className="w-full lg:w-5/12 shrink-0 relative">
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/assets/clinicpic.png"
                alt="Optimus Eye Hospital & Dental Clinic — Arjunganj, Lucknow"
                width={620}
                height={550}
                className="object-cover w-full h-[320px] sm:h-[450px] lg:h-[500px] transition-transform duration-700 hover:scale-105"
              />
              {/* Dark gradient overlay at bottom for badge contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* NABH badge — bottom left */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 sm:gap-4 border border-white/60 z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-[0.85rem] flex items-center justify-center shrink-0 shadow-sm border border-gray-100 p-1.5 sm:p-2">
                <img 
                  src="/assets/NABH_logo.png" 
                  alt="NABH Logo" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <div className="pr-1 sm:pr-2">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-cyan-50 text-[9px] sm:text-[10px] text-cyan-700 font-bold uppercase tracking-wider mb-1">Certified</span>
                <p className="text-[13px] sm:text-[15px] font-extrabold text-gray-900 leading-tight">NABH Accredited</p>
              </div>
            </div>

            {/* Experience badge — top right */}
            <div className="absolute top-4 right-4 sm:-top-6 sm:-right-6 bg-cyan-600 rounded-3xl px-5 py-4 sm:px-6 sm:py-5 text-white text-center shadow-xl border-[4px] border-white z-10">
              <p className="text-3xl sm:text-4xl font-extrabold leading-none">15+</p>
              <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest leading-tight mt-1.5 text-cyan-100">Years of<br />Excellence</p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="w-full lg:w-7/12">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Why Families in Lucknow{" "}
              <span className="text-cyan-600">Choose Optimus</span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Optimus Eye Hospital &amp; Dental Clinic combines specialised eye care and
              modern dental treatment under one roof, backed by NABH-accredited standards,
              advanced technology, and a team focused on safe, ethical, patient-friendly care.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {HIGHLIGHTS.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm overflow-hidden p-1.5">
                    {i === 0 ? (
                      <img src="/assets/NABH_logo.png" alt="NABH" className="w-full h-full object-contain drop-shadow-sm" />
                    ) : (
                      <h.Icon size={20} strokeWidth={2} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 leading-snug">{h.label}</p>
                    <p className="text-xs text-gray-400 font-medium leading-snug mt-0.5">{h.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-7 py-3 rounded-xl transition-colors duration-200 text-sm"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Stats strip ── */}
        {/* <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-cyan-600 rounded-2xl py-6 px-4 text-center"
            >
              <p className="text-3xl font-extrabold text-white leading-none">{stat.value}</p>
              <p className="text-sm text-cyan-100 font-medium mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}

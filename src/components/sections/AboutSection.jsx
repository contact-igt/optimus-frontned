import Image from "next/image";
import Link from "next/link";
import { STATS } from "@/constants";
import StatsBar from "@/components/sections/StatsBar";

const HIGHLIGHTS = [
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    text: "NABH Certified Eye Hospital",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    text: "Advanced Surgical & Diagnostic Equipment",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-5.197-3.763M17 20H7m10 0v-1c0-.653-.1-1.28-.284-1.872M7 20H2v-1a4 4 0 015.197-3.763M7 20v-1c0-.653.1-1.28.284-1.872M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM5 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    text: "Expert Ophthalmologists & Dental Surgeons",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: "Patient-Centred, Compassionate Care",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ── Two-column content ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">

          {/* Left — Image */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/clinicpic.png"
                alt="Optimus Eye Hospital & Dental Clinic"
                width={620}
                height={480}
                className="object-cover w-full h-72 sm:h-96"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium leading-none mb-0.5">Certified</p>
                  <p className="text-sm font-bold text-gray-800 leading-none">NABH Accredited</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="w-full lg:w-7/12">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Welcome to Optimus Eye Hospital &amp; Dental Clinic
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-5">
              Find the Best Doctor for{" "}
              <span className="text-cyan-600">Eye</span> &amp;{" "}
              <span className="text-cyan-600">Dental</span> Care
            </h2>
            <div className="w-16 h-1 bg-cyan-600 rounded mb-6" />

            <p className="text-gray-500 leading-relaxed text-sm sm:text-base mb-8">
              Optimus Eye Hospital &amp; Dental Clinic is a NABH certified eye hospital
              and a trusted healthcare centre in Arjunganj, Lucknow, dedicated to
              delivering world-class eye care and advanced dental treatments under one
              roof. Our facility combines cutting-edge medical technology with highly
              experienced specialists to ensure precise diagnosis, effective treatment,
              and a safe, patient-centred experience for every patient.
            </p>

            {/* Highlights grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-snug pt-1.5">
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 text-sm"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <StatsBar stats={STATS} />

      </div>
    </section>
  );
}

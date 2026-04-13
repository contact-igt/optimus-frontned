import Link from "next/link";
import Image from "next/image";

const DENTAL_SERVICES = [
  {
    id: 1,
    title: "Painless Root Canal Treatment",
    description:
      "We provide painless RCT using advanced rotary instruments to remove infection preserving your natural tooth.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Full Mouth Rehabilitation",
    description:
      "A complete reconstruction of worn or damaged teeth using crowns, implants, and advanced restorative dentistry.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Tooth-Coloured Fillings",
    description:
      "Composite fillings that match natural teeth in color and appearance, offering strength and aesthetics.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Gum Surgery & Laser Treatment",
    description:
      "Laser-assisted gum treatments for bleeding gums and infections with faster healing and minimal discomfort.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Orthodontic Treatment",
    description:
      "Braces and aligners for correcting misalignment, gaps, and bite issues for children and adults.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Scaling & Polishing",
    description:
      "Professional dental cleaning to remove plaque, tartar, and stains for healthy gums and fresh breath.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Complete Dentures",
    description:
      "Custom-made dentures that look natural, fit comfortably, and restore chewing ability.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Cosmetic Dentistry",
    description:
      "Smile designing, veneers, whitening, and aesthetic enhancements for a beautiful confident smile.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Pediatric Dentistry",
    description:
      "Gentle and child-friendly dental care including prevention, fillings, and early orthodontics.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Surgical Dentistry",
    description:
      "Tooth extractions, wisdom tooth removal, cyst surgeries, and minor oral surgical procedures.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "Crowns & Bridges",
    description:
      "Durable, aesthetic dental crowns and bridges designed for perfect fit and natural function.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l3 6h8l3-6H5zM3 9h18v2H3V9zm2 4h14v8H5v-8z" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Implant Dentistry",
    description:
      "Permanent tooth replacements that look and function like natural teeth using modern implant technology.",
    icon: (
      <svg className="w-9 h-9 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function DentalServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <div className="relative h-52 sm:h-64 bg-gray-900 overflow-hidden">
        <Image
          src="/assets/herobanner1.png"
          alt="Dental Services"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase mb-4">
            Our Services
          </h1>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-cyan-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/dental-oral-care" className="text-cyan-400 hover:text-white transition-colors">
              Services/Dental
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Intro section ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-700">
              Optimus Eye Hospital &amp; Dental Clinic, Arjunganj, Lucknow,
            </span>{" "}
            we offer advanced and comprehensive dental care delivered by highly
            experienced specialists. From painless root canals to implants and
            cosmetic dentistry, we provide safe, precise, and patient-friendly
            treatments for all ages, making us a trusted choice for best dental
            care in Lucknow.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DENTAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-300 group flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-cyan-50 border-2 border-cyan-100 flex items-center justify-center mb-5 group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-all duration-300">
                  <div className="[&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 bg-cyan-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready for a Healthier, Brighter Smile?
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base mb-8 leading-relaxed">
            Book a dental consultation with our expert team today — painless
            treatment, modern technology, and a smile you&apos;ll love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 font-bold px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Book an Appointment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

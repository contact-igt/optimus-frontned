import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  LayoutGrid,
  ClipboardCheck,
  Flame,
  AlignCenter,
  Brush,
  Smile,
  Pencil,
  Baby,
  Scissors,
  Crown,
  Settings,
  ArrowRight,
} from "lucide-react";

const DENTAL_SERVICES = [
  {
    id: 1,
    Icon: ShieldCheck,
    title: "Painless Root Canal Treatment",
    description:
      "We provide painless RCT using advanced rotary instruments to remove infection preserving your natural tooth.",
  },
  {
    id: 2,
    Icon: LayoutGrid,
    title: "Full Mouth Rehabilitation",
    description:
      "A complete reconstruction of worn or damaged teeth using crowns, implants, and advanced restorative dentistry.",
  },
  {
    id: 3,
    Icon: ClipboardCheck,
    title: "Tooth-Coloured Fillings",
    description:
      "Composite fillings that match natural teeth in color and appearance, offering strength and aesthetics.",
  },
  {
    id: 4,
    Icon: Flame,
    title: "Gum Surgery & Laser Treatment",
    description:
      "Laser-assisted gum treatments for bleeding gums and infections with faster healing and minimal discomfort.",
  },
  {
    id: 5,
    Icon: AlignCenter,
    title: "Orthodontic Treatment",
    description:
      "Braces and aligners for correcting misalignment, gaps, and bite issues for children and adults.",
  },
  {
    id: 6,
    Icon: Brush,
    title: "Scaling & Polishing",
    description:
      "Professional dental cleaning to remove plaque, tartar, and stains for healthy gums and fresh breath.",
  },
  {
    id: 7,
    Icon: Smile,
    title: "Complete Dentures",
    description:
      "Custom-made dentures that look natural, fit comfortably, and restore chewing ability.",
  },
  {
    id: 8,
    Icon: Pencil,
    title: "Cosmetic Dentistry",
    description:
      "Smile designing, veneers, whitening, and aesthetic enhancements for a beautiful confident smile.",
  },
  {
    id: 9,
    Icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle and child-friendly dental care including prevention, fillings, and early orthodontics.",
  },
  {
    id: 10,
    Icon: Scissors,
    title: "Surgical Dentistry",
    description:
      "Tooth extractions, wisdom tooth removal, cyst surgeries, and minor oral surgical procedures.",
  },
  {
    id: 11,
    Icon: Crown,
    title: "Crowns & Bridges",
    description:
      "Durable, aesthetic dental crowns and bridges designed for perfect fit and natural function.",
  },
  {
    id: 12,
    Icon: Settings,
    title: "Implant Dentistry",
    description:
      "Permanent tooth replacements that look and function like natural teeth using modern implant technology.",
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
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300 text-teal-600 group-hover:text-white">
                  <service.Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
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
      <section className="py-14 bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready for a Healthier, Brighter Smile?
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mb-8 leading-relaxed">
            Book a dental consultation with our expert team today — painless
            treatment, modern technology, and a smile you&apos;ll love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4.5 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Book an Appointment
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
}

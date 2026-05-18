import Link from "next/link";
import {
  Activity,
  Smile,
  ShieldCheck,
  Stethoscope,
  Baby,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const DENTAL_SERVICES = [
  {
    id: 1,
    slug: "root-canal",
    Icon: Activity,
    title: "Root Canal Treatment (RCT)",
    description:
      "Advanced, painless rotary RCT to save your natural teeth from infection and decay with high precision and comfort.",
  },
  {
    id: 2,
    slug: "implants",
    Icon: ShieldCheck,
    title: "Dental Implants",
    description:
      "Permanent & aesthetic solution for missing teeth using world-class titanium implants that function like natural roots.",
  },
  {
    id: 3,
    slug: "braces",
    Icon: Smile,
    title: "Orthodontics & Braces",
    description:
      "Align your smile with traditional braces or modern clear aligners for improved dental health and a confident look.",
  },
  {
    id: 4,
    slug: "smile",
    Icon: Sparkles,
    title: "Smile Makeover",
    description:
      "Transform your appearance with veneers, teeth whitening, and cosmetic contouring for a bright, healthy, and stunning smile.",
  },
  {
    id: 5,
    slug: "kids",
    Icon: Baby,
    title: "Kids Dentistry",
    description:
      "Specialized, gentle dental care for children, focusing on prevention, habit correction, and positive dental experiences.",
  },
  {
    id: 6,
    slug: "surgery",
    Icon: Stethoscope,
    title: "Oral Surgery & Extractions",
    description:
      "Expert management of wisdom teeth extractions, jaw surgeries, and oral pathologies with advanced safety protocols.",
  },
];

export default function DentalCareServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <div className="relative h-48 sm:h-60 bg-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "linear-gradient(135deg,#0d9488,#0f766e)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase mb-3">
            Dental Care Services
          </h1>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-teal-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/services" className="text-teal-300 hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-teal-400">Dental Care</span>
          </nav>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div className="bg-teal-600 py-5 px-4">
        <p className="max-w-3xl mx-auto text-center text-white text-sm sm:text-base leading-relaxed">
          At Optimus Dental Clinic, we provide advanced dental solutions under one roof. From painless root canals
          to specialized kids dentistry, our team ensures a comfortable and healthy dental journey for you.
        </p>
      </div>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Advanced Dentistry
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Dental Specialities
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-teal-600 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DENTAL_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl p-7 shadow-sm transition-all duration-300 group flex flex-col scroll-mt-28 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 text-teal-600 ">
                  <service.Icon size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
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
            Book Your Dental Checkup Today
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mb-8 leading-relaxed">
            Pain-free treatments and a healthy smile are just an appointment away. Contact our specialists now.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4.5 rounded-4xl transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Book an Appointment
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
}

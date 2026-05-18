import Link from "next/link";
import {
  Eye,
  Settings,
  ContactRound,
  Layers,
  User,
  Baby,
  Droplets,
  Heart,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const EYE_SERVICES = [
  {
    id: 1,
    slug: "cornea",
    Icon: Eye,
    title: "Cornea Services",
    description:
      "Diagnosis & treatment of corneal diseases, including infections, keratoconus, injuries & dystrophies with advanced imaging systems.",
  },
  {
    id: 2,
    slug: "glaucoma",
    Icon: Settings,
    title: "Glaucoma Services",
    description:
      "Comprehensive screening & management of glaucoma with medical, laser & surgical options ensuring long-term vision safety.",
  },
  {
    id: 3,
    slug: "contact-lens",
    Icon: ContactRound,
    title: "Contact Lens Clinic",
    description:
      "Customized lens fitting for myopia, hyperopia, astigmatism & keratoconus with a variety of soft, rigid & specialty lenses.",
  },
  {
    id: 4,
    slug: "cataract",
    Icon: Layers,
    title: "Cataract Services",
    description:
      "Advanced cataract diagnosis & laser-assisted surgery with premium IOLs for fast recovery & crystal-clear vision.",
  },
  {
    id: 5,
    slug: "oculoplastic",
    Icon: User,
    title: "Oculoplastic Services",
    description:
      "Treatment for eyelid disorders, tear duct issues, orbital diseases & cosmetic enhancement with expert surgical care.",
  },
  {
    id: 6,
    slug: "paediatric",
    Icon: Baby,
    title: "Paediatric & Squint Clinic",
    description:
      "Specialized care for children's eye issues including squint, lazy eye & congenital abnormalities for healthy vision development.",
  },
  {
    id: 7,
    slug: "lasik",
    Icon: Zap,
    title: "LASIK & Refractive Surgery",
    description:
      "Precision vision correction surgery using advanced laser technology to help you live a life free from spectacles and contact lenses.",
  },
  {
    id: 8,
    slug: "surface",
    Icon: Droplets,
    title: "Ocular Surface Management",
    description:
      "Complete treatment for dry eyes, allergies, conjunctival problems & tear-film disorders with personalized care plans.",
  },
  {
    id: 9,
    slug: "retina",
    Icon: Heart,
    title: "Vitreo-Retina & ROP Care",
    description:
      "Expert care for diabetic retinopathy, retinal detachment, ARMD & ROP screening & treatment for premature newborns.",
  },
];

export default function EyeCareServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <div className="relative h-48 sm:h-60 bg-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "linear-gradient(135deg,#0e7490,#164e63)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase mb-3">
            Eye Care Services
          </h1>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-cyan-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/services" className="text-cyan-300 hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-cyan-400">Eye Care</span>
          </nav>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div className="bg-cyan-600 py-5 px-4">
        <p className="max-w-3xl mx-auto text-center text-white text-sm sm:text-base leading-relaxed">
          At Optimus Eye Hospital, we offer comprehensive eye care services using the latest technology
          and a team of highly experienced ophthalmologists — dedicated to preserving and enhancing your vision.
        </p>
      </div>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
              What We Treat
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Eye Care Specialities
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EYE_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl p-7 shadow-sm transition-all duration-300 group flex flex-col scroll-mt-28 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 text-cyan-600 ">
                  <service.Icon size={28} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
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
            Book Your Eye Consultation Today
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base mb-8 leading-relaxed">
            Our expert ophthalmologists are here to help. Early detection saves vision — don&apos;t wait.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 font-bold px-8 py-5.5 rounded-4xl transition-colors duration-200 text-sm uppercase tracking-wide"
          >
            Book an Appointment
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
}

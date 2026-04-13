import Link from "next/link";

const EYE_SERVICES = [
  {
    id: 1,
    title: "Cornea Services",
    description:
      "Diagnosis & treatment of corneal diseases, including infections, keratoconus, injuries & dystrophies with advanced imaging systems.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Glaucoma Services",
    description:
      "Comprehensive screening & management of glaucoma with medical, laser & surgical options ensuring long-term vision safety.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Contact Lens Clinic",
    description:
      "Customized lens fitting for myopia, hyperopia, astigmatism & keratoconus with a variety of soft, rigid & specialty lenses.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 0112 0M4 12h1m14 0h1M6 16a6 6 0 0012 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Cataract Services",
    description:
      "Advanced cataract diagnosis & laser-assisted surgery with premium IOLs for fast recovery & crystal-clear vision.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Oculoplastic Services",
    description:
      "Treatment for eyelid disorders, tear duct issues, orbital diseases & cosmetic enhancement with expert surgical care.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Paediatric & Squint Clinic",
    description:
      "Specialized care for children's eye issues including squint, lazy eye & congenital abnormalities for healthy vision development.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Ocular Surface Management",
    description:
      "Complete treatment for dry eyes, allergies, conjunctival problems & tear-film disorders with personalized care plans.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Vitreo-Retina & ROP Care",
    description:
      "Expert care for diabetic retinopathy, retinal detachment, ARMD & ROP screening & treatment for premature newborns.",
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
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
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="text-cyan-300 hover:text-white transition-colors">Services</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 group flex flex-col"
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-cyan-50 border-2 border-cyan-100 flex items-center justify-center mb-5 group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-all duration-300">
                  <div className="group-hover:[&>svg]:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
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

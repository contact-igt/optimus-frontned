import Link from "next/link";
import {
  ScanEye,
  Activity,
  Scan,
  Zap,
  Baby,
  SmilePlus,
} from "lucide-react";

const CORE_SERVICES = [
  {
    id: 1,
    Icon: ScanEye,
    type: "eye",
    title: "Cataract Surgery",
    tagline: "Restore crystal-clear vision with advanced lens replacement.",
    proof: "Painless phaco surgery with premium IOL options — same-day procedure.",
    href: "/services/eye-care#cataract",
    cta: "Learn About Cataract Surgery",
  },
  {
    id: 2,
    Icon: Activity,
    type: "eye",
    title: "Glaucoma Care",
    tagline: "Early detection and treatment to preserve your optic nerve.",
    proof: "Advanced pressure monitoring and laser therapy to prevent permanent vision loss.",
    href: "/services/eye-care#glaucoma",
    cta: "Learn About Glaucoma Care",
  },
  {
    id: 3,
    Icon: Scan,
    type: "eye",
    title: "Retina Care",
    tagline: "Expert management of retinal diseases and vitreoretinal surgery.",
    proof: "Specialised ROP care, retinal detachment surgery, and macular treatments.",
    href: "/services/eye-care#retina",
    cta: "Learn About Retina Care",
  },
  {
    id: 4,
    Icon: Zap,
    type: "eye",
    title: "LASIK & Vision Correction",
    tagline: "Live life without spectacles — safe, precise, permanent.",
    proof: "Bladeless LASIK with advanced wavefront technology for accurate results.",
    href: "/services/eye-care#lasik",
    cta: "Learn About LASIK",
  },
  {
    id: 5,
    Icon: Baby,
    type: "eye",
    title: "Pediatric Eye Care",
    tagline: "Protecting your child's vision from an early age.",
    proof: "Squint correction, lazy eye (amblyopia), and childhood vision screening.",
    href: "/services/eye-care#paediatric",
    cta: "Learn About Pediatric Eye Care",
  },
  {
    id: 6,
    Icon: SmilePlus,
    type: "dental",
    title: "Dental Implants & Root Canal",
    tagline: "Save natural teeth or replace missing ones — painlessly.",
    proof: "Rotary RCT for painless treatment + titanium implants that last a lifetime.",
    href: "/services/dental-care#implants",
    cta: "Learn About Dental Services",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-linear-to-br from-cyan-700 via-cyan-700 to-cyan-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3">
            Core Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            High-Impact Treatments{" "}
            <span className="text-cyan-300">We Specialise In</span>
          </h2>
          <p className="text-cyan-200 text-base max-w-2xl mx-auto leading-relaxed">
            From life-changing cataract surgery to painless dental implants — these are the most
            sought-after procedures at Optimus, handled by experienced specialists.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const isEye = service.type === "eye";
            const accent = isEye ? "bg-cyan-600" : "bg-teal-600";

            const lightBg = isEye ? "bg-cyan-50" : "bg-teal-50";
            const lightText = isEye ? "text-cyan-700" : "text-teal-700";
            const lightBorder = isEye ? "border-cyan-100" : "border-teal-100";
            const proofBg = isEye ? "bg-cyan-50 text-cyan-900" : "bg-teal-50 text-teal-900";
            const ctaBg = isEye ? "bg-cyan-50 text-cyan-700 hover:bg-cyan-600 hover:text-white" : "bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white";
            const borderHover = isEye ? "hover:border-cyan-200" : "hover:border-teal-200";

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 ${borderHover}`}
              >

                {/* Header: Icon + Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <service.Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${lightBg} ${lightText} ${lightBorder}`}>
                    {isEye ? "Eye Care" : "Dental"}
                  </span>
                </div>

                {/* Title + Tagline */}
                <div className="flex-1 mb-4">
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                {/* Proof block */}
                <div className={`flex items-start gap-2.5 p-3 rounded-xl mb-5 text-xs font-medium leading-relaxed ${proofBg}`}>
                  <span className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${accent}`}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {service.proof}
                </div>

                {/* CTA button */}
                <Link
                  href={service.href}
                  className={`flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide px-4 py-3.5 rounded-xl transition-all duration-200 ${ctaBg}`}
                >
                  {service.cta}
                  <svg className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services/eye-care"
            className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 font-bold px-7 py-4 rounded-3xl transition-all duration-200 text-sm shadow"
          >
            All Eye Treatments
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/services/dental-care"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-cyan-700 font-bold px-7 py-4 rounded-4xl transition-all duration-200 text-sm"
          >
            All Dental Treatments
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import {
  Search,
  Activity,
  Scan,
  Zap,
  Baby,
  Smile,
  Stethoscope,
  Shield,
  Microscope,
  User,
  Eye,
  ArrowRight,
} from "lucide-react";

const EYE_SERVICES = [
  { Icon: Microscope, label: "Cataract Surgery", href: "/services/eye-care#cataract" },
  { Icon: Activity, label: "Glaucoma Treatment", href: "/services/eye-care#glaucoma" },
  { Icon: Scan, label: "Retina & Vitreo Care", href: "/services/eye-care#retina" },
  { Icon: Eye, label: "Cornea Services", href: "/services/eye-care#cornea" },
  { Icon: Zap, label: "LASIK & Refractive", href: "/services/eye-care#lasik" },
  { Icon: Baby, label: "Pediatric Eye Care", href: "/services/eye-care#paediatric" },
];

const DENTAL_SERVICES = [
  { Icon: Stethoscope, label: "Root Canal Treatment", href: "/services/dental-care#root-canal" },
  { Icon: Shield, label: "Dental Implants", href: "/services/dental-care#implants" },
  { Icon: Smile, label: "Orthodontics & Braces", href: "/services/dental-care#braces" },
  { Icon: Search, label: "Smile Makeover", href: "/services/dental-care#smile" },
  { Icon: Baby, label: "Pediatric Dentistry", href: "/services/dental-care#kids" },
  { Icon: Shield, label: "Preventive Dentistry", href: "/services/dental-care#preventive" },
];

function ServiceTag({ Icon, label, href }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/60 hover:bg-white border border-white/80 hover:border-current hover:shadow-sm transition-all duration-200"
    >
      <Icon size={15} strokeWidth={2} className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-current leading-tight whitespace-nowrap">
        {label}
      </span>
      <svg
        className="w-3.5 h-3.5 ml-auto shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

function DepartmentCard({
  type,
  DeptIcon,
  badge,
  title,
  description,
  services,
  ctaLabel,
  ctaHref,
  doctorName,
  doctorTitle,
  doctorHref,
}) {
  const isEye = type === "eye";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden flex flex-col h-full ${isEye
        ? "bg-gradient-to-br from-cyan-50 via-sky-50 to-cyan-100"
        : "bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100"
        }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1.5 w-full ${isEye ? "bg-gradient-to-r from-cyan-500 to-sky-500" : "bg-gradient-to-r from-teal-500 to-emerald-500"}`}
      />

      {/* Decorative blobs */}
      <div
        className={`absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 ${isEye ? "bg-cyan-400" : "bg-teal-400"
          } blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15 ${isEye ? "bg-sky-300" : "bg-emerald-300"
          } blur-2xl pointer-events-none`}
      />

      <div className="relative z-10 p-8 flex flex-col gap-6 flex-1">

        {/* Header */}
        <div>
          {/* Badge with Lucide icon */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${isEye
              ? "bg-cyan-100 text-cyan-700"
              : "bg-teal-100 text-teal-700"
              }`}
          >
            <DeptIcon size={14} strokeWidth={2.2} />
            {badge}
          </div>

          <h2 className={`text-2xl xl:text-3xl font-extrabold leading-tight mb-3 ${isEye ? "text-cyan-900" : "text-teal-900"}`}>
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          style={{ "--tag-color": isEye ? "#0891b2" : "#0d9488" }}
        >
          {services.map((s) => (
            <ServiceTag key={s.label} {...s} />
          ))}
        </div>

        {/* Doctor anchor */}
        <Link
          href={doctorHref}
          className={`flex items-center gap-3 p-3 rounded-2xl border ${isEye
            ? "border-cyan-200 bg-cyan-50/80 hover:bg-cyan-100/80"
            : "border-teal-200 bg-teal-50/80 hover:bg-teal-100/80"
            } transition-colors group`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${isEye ? "bg-cyan-100 text-cyan-600" : "bg-teal-100 text-teal-600"
              } shrink-0`}
          >
            <User size={18} strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide leading-none mb-0.5">
              Our Specialist
            </p>
            <p className={`text-sm font-bold truncate ${isEye ? "text-cyan-800" : "text-teal-800"}`}>
              {doctorName}
            </p>
            <p className="text-xs text-gray-500 truncate">{doctorTitle}</p>
          </div>
          <svg
            className={`w-4 h-4 shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${isEye ? "text-cyan-600" : "text-teal-600"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            href={ctaHref}
            className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-3xl font-bold text-sm uppercase tracking-wide transition-all duration-200 active:scale-95 ${isEye
              ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-[0_10px_20px_-10px_rgba(8,145,178,0.4)]"
              : "bg-teal-600 text-white hover:bg-teal-700 shadow-[0_10px_20px_-10px_rgba(13,148,136,0.4)]"
              }`}
          >
            {ctaLabel}
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DepartmentSection() {
  return (
    <section id="departments" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3">
            Our Specialities
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            World-Class Eye Care &amp;{" "}
            <span className="text-cyan-600">Dental Care</span>
            <br className="hidden sm:block" /> Under One Roof
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Dedicated departments with specialist doctors, advanced technology, and
            personalised treatment plans — whether you need eye care or dental care.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <DepartmentCard
            type="eye"
            DeptIcon={Eye}
            badge="Eye Care Department"
            title="Advanced Ophthalmology & Eye Surgery"
            description="Our ophthalmology wing is equipped with state-of-the-art surgical suites and diagnostic tools. From routine eye checks to complex retina surgeries, our expert eye surgeons deliver precise, painless, and personalised care."
            services={EYE_SERVICES}
            ctaLabel="Explore Eye Treatments"
            ctaHref="/services/eye-care"
            doctorName="Dr. Arvind Verma"
            doctorTitle="Senior Cataract & Refractive Surgeon"
            doctorHref="/doctors#arvind"
          />
          <DepartmentCard
            type="dental"
            DeptIcon={Smile}
            badge="Dental Care Department"
            title="Modern Dentistry & Oral Health Care"
            description="Our dental wing offers painless, technology-driven dental procedures handled by experienced dental specialists. From preventive care to cosmetic smile makeovers, we ensure every visit is comfortable and effective."
            services={DENTAL_SERVICES}
            ctaLabel="Explore Dental Treatments"
            ctaHref="/services/dental-care"
            doctorName="Dr. Neha Singh"
            doctorTitle="BDS, MDS — Dental Specialist"
            doctorHref="/doctors#neha"
          />
        </div>

        {/* Bottom reassurance strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          
          {/* NABH Tag */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-1.5 pr-5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-white/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-cyan-50 p-1.5 transition-transform">
              <img src="/assets/NABH_logo.png" alt="NABH" className="w-full h-full object-contain" />
            </div>
            <span className="font-extrabold text-gray-800 text-[12px] sm:text-[13px] tracking-wide">
              NABH <span className="text-cyan-600">Accredited</span>
            </span>
          </div>

          {/* Expert Surgeons Tag */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-1.5 pr-5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-white/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center shrink-0 text-white transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-extrabold text-gray-800 text-[12px] sm:text-[13px] tracking-wide">
              Expert Surgeons <span className="text-gray-400 font-bold ml-1 text-[11px] sm:text-[12px]">(15+ Yrs Exp)</span>
            </span>
          </div>

          {/* Advanced Tech Tag */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-1.5 pr-5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-white/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center shrink-0 text-white transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-extrabold text-gray-800 text-[12px] sm:text-[13px] tracking-wide">
              Advanced <span className="text-cyan-600">Surgical Tech</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

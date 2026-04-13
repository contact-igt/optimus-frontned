import Image from "next/image";
import Link from "next/link";

/* ─── Page Hero Banner ─────────────────────────────────────────────────────── */
function PageHero() {
  return (
    <div className="relative h-64 sm:h-80 bg-gray-900 overflow-hidden">
      <Image
        src="/assets/herobanner2.png"
        alt="About Optimus Eye Hospital"
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
          Optimus Eye Hospital &amp; Dental Clinic
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide uppercase mb-4 drop-shadow-lg">
          About Us
        </h1>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-cyan-300 hover:text-white transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-cyan-400">About</span>
        </nav>
      </div>
    </div>
  );
}

/* ─── Hospital Overview ────────────────────────────────────────────────────── */
function HospitalOverview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/clinicpic.png"
                alt="Optimus Eye Hospital & Dental Clinic"
                width={620}
                height={480}
                className="object-cover w-full h-80 sm:h-96"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-7/12">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Our Hospital
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-2">
              Welcome to the Optimus Eye Hospital &amp; Dental Clinic
            </h2>
            <h3 className="text-lg font-semibold text-cyan-700 mb-4">
              NABH Certified Eye Hospital in Lucknow
            </h3>
            <div className="w-16 h-1 bg-cyan-600 rounded mb-6" />

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
              Optimus Eye Hospital &amp; Dental Clinic is a NABH certified eye hospital and
              a trusted healthcare center in Arjunganj, Lucknow, dedicated to delivering
              world-class eye care and advanced dental treatments under one roof. Our
              facility combines cutting-edge medical technology with highly experienced
              specialists to ensure precise diagnosis, effective treatment, and a safe,
              patient-centered healthcare experience for every patient.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              With services ranging from{" "}
              <span className="font-semibold text-gray-700">
                Cataract surgery with premium IOL, Retina surgeries, LASIK, PRK, Squint Surgery, Glaucoma management
              </span>{" "}
              with{" "}
              <span className="font-semibold text-gray-700">advanced dental treatments</span>,
              we provide comprehensive eye and oral health solutions for patients of all ages.
              Our commitment to quality, innovation, and compassionate care has made us one
              of the most preferred eye and dental hospitals in Lucknow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Vision & Mission ─────────────────────────────────────────────────────── */
function VisionMission() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To become the{" "}
              <span className="font-semibold text-gray-700">
                most trusted and advanced Eye &amp; Dental Care Hospital in Lucknow
              </span>
              , recognized for excellence in clinical expertise, modern technology,
              personalized patient care, and ethical medical practices. We aim to make
              high-quality healthcare accessible, reliable, and affordable for all.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To provide{" "}
              <span className="font-semibold text-gray-700">
                affordable, advanced, and ethical eye &amp; dental care
              </span>{" "}
              using the latest technologies while maintaining exceptional standards of
              safety and compassion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Advanced Care & Expert Team ──────────────────────────────────────────── */
const TECH_POINTS = [
  {
    title: "Advanced Diagnostic Equipment",
    desc: "for early detection and accurate assessment",
  },
  {
    title: "Robotic Surgical Systems",
    desc: "that enhance precision and reduce recovery time",
  },
  {
    title: "3D Imaging & 3D Printing Technology",
    desc: "for custom prosthetics, implants, and surgical planning",
  },
];

const EXPERT_POINTS = [
  {
    title: "Board-Certified Ophthalmologists",
    desc: "specialising in cataract, LASIK, retinal care, glaucoma, and pediatric eye care",
  },
  {
    title: "Skilled Oral & Maxillofacial Surgeons",
    desc: "with expertise in dental implants, facial reconstruction, trauma care, and aesthetic dentistry",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AdvancedCare() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Technology &amp; Expert Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Advanced Care &amp; Expert Professionals
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Technology card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Advanced Technology for Accurate &amp; Safer Treatment
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              We use globally approved, high-end technology to ensure precision
              and the best outcomes:
            </p>
            <ul className="space-y-4 mb-5">
              {TECH_POINTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-sm text-gray-600 leading-snug">
                    <span className="font-semibold text-gray-800">{p.title}</span>{" "}
                    {p.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-4">
              Our technology-driven approach helps us deliver{" "}
              <span className="font-semibold text-gray-700">
                faster, safer, and more predictable results
              </span>{" "}
              for every patient.
            </p>
          </div>

          {/* Expert Team card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-5.197-3.763M17 20H7m10 0v-1c0-.653-.1-1.28-.284-1.872M7 20H2v-1a4 4 0 015.197-3.763M7 20v-1c0-.653.1-1.28.284-1.872M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM5 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our Expert Team
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Optimus Eye Hospital &amp; Dental Clinic is led by a team of{" "}
              <span className="font-semibold text-gray-700">
                highly qualified and experienced doctors
              </span>
              , including:
            </p>
            <ul className="space-y-4 mb-5">
              {EXPERT_POINTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-sm text-gray-600 leading-snug">
                    <span className="font-semibold text-gray-800">{p.title}:</span>{" "}
                    {p.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-4">
              Every member of our team is dedicated to offering{" "}
              <span className="font-semibold text-gray-700">
                compassionate care
              </span>{" "}
              that matches international healthcare standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Root export ───────────────────────────────────────────────────────────── */
export default function AboutPageContent() {
  return (
    <>
      <PageHero />
      <HospitalOverview />
      <VisionMission />
      <AdvancedCare />
    </>
  );
}

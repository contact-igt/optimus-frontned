import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/constants";
import { Calendar, ArrowRight } from "lucide-react";

const DEPT_COLORS = {
  "Eye Care": { bg: "bg-cyan-600", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
  "Dental Care": { bg: "bg-teal-600", text: "text-teal-600", light: "bg-teal-50", border: "border-teal-200" },
};

const DEPT_TAGS = {
  1: "Eye Care",
  2: "Dental Care",
  3: "Eye Care",
  4: "Eye Care",
};

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-3">
            World-Class Care
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Meet Our <span className="text-cyan-600">Specialists</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A team of highly qualified experts dedicated to delivering
            precision healthcare with a human touch.
          </p>
        </div>

        {/* ── Doctor cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => {
            const dept = DEPT_TAGS[doctor.id] || "Eye Care";
            const color = DEPT_COLORS[dept];

            return (
              <div
                key={doctor.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Photo area */}
                <div
                  className="relative px-5 pt-5 pb-0"
                  style={{ background: `linear-gradient(180deg, ${dept === "Dental Care" ? "#f0fdfa" : "#ecfeff"} 0%, #ffffff 100%)` }}
                >
                  {/* Dept badge — top-right of image, above it */}
                  <span className={`absolute top-2.5 right-3 z-20 text-[9px] font-bold text-white px-2.5 py-1.5 rounded-full uppercase tracking-widest ${color.bg}`}>
                    {dept}
                  </span>

                  {/* rounded-xl + overflow-hidden on the container keeps corners intact during hover scale */}
                  <div className="relative w-full h-64 md:h-60 rounded-xl overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Focus Area Pill */}
                  {doctor?.focusArea && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm border border-gray-100 px-4 py-1.5 rounded-full shadow-sm z-10">
                      <p className={`text-[10px] font-bold uppercase tracking-wider text-cyan-600`}>
                        Focus: {doctor.focusArea}
                      </p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="px-6 pt-5 pb-7 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight group-hover:text-cyan-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {doctor.qualification}
                    </p>
                  </div>

                  <p className={`font-bold text-sm leading-snug mb-3 text-cyan-600`}>
                    {doctor.specialty}
                  </p>

                  {/* flex-1 spacer always present so button is always at bottom */}
                  <div className="flex-1">
                    {doctor.trustStatement && (
                      <p className="text-gray-500 text-sm italic leading-relaxed">
                        &ldquo;{doctor.trustStatement}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* CTA button — always pinned to bottom */}
                  <Link
                    href="/contact"
                    className={`mt-0 w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-4 rounded-3xl text-white transition-all duration-300 bg-cyan-600 hover:shadow-lg hover:brightness-110`}
                  >
                    <Calendar size={14} strokeWidth={2.5} />
                    Book Consultation
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── View all CTA ── */}
        <div className="text-center mt-16">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-3 bg-cyan-600 text-white font-bold px-10 py-4 rounded-4xl transition-all duration-300 text-sm hover:bg-cyan-700 hover:-translate-y-1 active:scale-95"
          >
            Meet Our Doctors
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

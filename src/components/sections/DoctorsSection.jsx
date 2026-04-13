import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/constants";

const DEPT_TAGS = {
  1: "Eye Care",
  2: "Dental Care",
  3: "Eye Care",
  4: "Eye Care",
};

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Expert Doctors
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
          <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Highly qualified specialists dedicated to providing world-class eye
            and dental care with compassion and precision.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Photo area with cyan gradient bg */}
              <div
                className="relative flex justify-center items-end pt-8 pb-0 px-6"
                style={{
                  background:
                    "linear-gradient(180deg,#e0f7fa 0%,#ffffff 100%)",
                }}
              >
                {/* Dept badge — top-right corner */}
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold text-white px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm"
                  style={{ backgroundColor: "#0891b2" }}
                >
                  {DEPT_TAGS[doctor.id]}
                </span>

                {/* Doctor photo */}
                <div className="relative w-36 h-40 rounded-t-2xl overflow-hidden shadow-lg border-2 border-white">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="px-5 pt-5 pb-6 text-center flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-0.5">
                  {doctor.name}
                </h3>
                <p className="text-cyan-600 font-semibold text-xs leading-snug mb-1">
                  {doctor.specialty}
                </p>
                <p className="text-gray-400 text-xs leading-snug">
                  {doctor.qualification}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-dashed border-gray-200" />

                {/* Book Appointment button — full width, prominent */}
                <Link
                  href="/contact"
                  className="doctor-book-btn w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl text-white transition-all duration-200 group-hover:shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            View All Doctors
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

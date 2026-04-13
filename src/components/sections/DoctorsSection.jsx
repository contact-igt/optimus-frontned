import Image from "next/image";
import { DOCTORS } from "@/constants";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Doctors
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-cyan-50">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base">{doctor.name}</h3>
                <p className="text-cyan-600 font-semibold text-sm mt-0.5">
                  {doctor.specialty}
                </p>
                <p className="text-gray-400 text-xs mt-1">{doctor.qualification}</p>
                <span className="inline-block mt-3 bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full">
                  {doctor.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

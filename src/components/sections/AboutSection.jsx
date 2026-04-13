import Image from "next/image";
import { STATS } from "@/constants";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About Optimus
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-[45%] relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/clinicpic.png"
              alt="Our Clinic"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted Eye & Dental Care in Lucknow
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Optimus Eye Hospital &amp; Dental Clinic is a state-of-the-art
              multi-specialty clinic located in Arjunganj, Lucknow. We are
              committed to providing the highest standard of healthcare in
              ophthalmology and dentistry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of experienced specialists uses the latest technology and
              evidence-based treatments to deliver outstanding results. From
              routine check-ups to complex surgeries, we treat every patient
              with care and precision.
            </p>

            {/* Checkpoints */}
            <ul className="space-y-2 mb-8">
              {[
                "Advanced diagnostic & surgical equipment",
                "Experienced & qualified specialists",
                "Hygienic and patient-friendly environment",
                "Affordable treatment with EMI options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-cyan-600 mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button href="#contact" variant="primary" size="lg">
              Book an Appointment
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-cyan-50 rounded-xl py-6 px-4 border border-cyan-100"
            >
              <p className="text-3xl font-extrabold text-cyan-600">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

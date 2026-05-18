import {
  Shield,
  Users,
  Monitor,
  Activity,
  Clipboard,
  Heart,
} from "lucide-react";

const WHY_ITEMS = [
  {
    id: 1,
    Icon: Shield,
    title: "NABH Accredited Standards",
    description:
      "Our facility meets the highest national standards for patient safety, hygiene, and clinical quality — certified by NABH.",
  },
  {
    id: 2,
    Icon: Users,
    title: "Experienced Specialists",
    description:
      "Every procedure is led by a qualified ophthalmologist or dental surgeon with 15+ years of hands-on experience.",
  },
  {
    id: 3,
    Icon: Monitor,
    title: "Advanced OT & Diagnostics",
    description:
      "State-of-the-art operation theatres and precision diagnostic equipment ensure accurate treatment and safe outcomes.",
  },
  {
    id: 4,
    Icon: Activity,
    title: "Robotic & 3D Technology",
    description:
      "We leverage cutting-edge robotic systems and 3D imaging technology to deliver precise, minimally invasive procedures.",
  },
  {
    id: 5,
    Icon: Clipboard,
    title: "Personalized Care Plans",
    description:
      "No one-size-fits-all solutions. Each care plan is designed around the patient's individual condition and lifestyle.",
  },
  {
    id: 6,
    Icon: Heart,
    title: "Ethical & Transparent Treatment",
    description:
      "Transparent pricing, honest diagnosis, and zero upselling — we prioritise what's truly best for your health.",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Patients Trust{" "}
            <span className="text-cyan-600">Optimus</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            From accreditation to advanced technology and compassionate care —
            here&apos;s what makes us the preferred choice for eye and dental health in Lucknow.
          </p>
        </div>

        {/* Grid — items-stretch ensures equal height per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="relative group flex flex-col items-center text-center p-6 py-8 rounded-2xl border border-cyan-600 bg-cyan-600 cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Watermark number */}
              <span className="absolute top-4 right-5 text-5xl font-black text-white/10 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                <item.Icon size={22} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cyan-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

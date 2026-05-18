import { Calendar, User, Clipboard, Activity } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Book an Appointment",
    description: "Choose your preferred date and time online or via call for a quick and hassle-free scheduling.",
    Icon: Calendar,
  },
  {
    id: 2,
    title: "Meet the Specialist",
    description: "Consult with our highly experienced ophthalmologists or dental surgeons for a thorough examination.",
    Icon: User,
  },
  {
    id: 3,
    title: "Get Diagnosis & Plan",
    description: "Receive a precise diagnosis and a personalized treatment strategy tailored to your specific needs.",
    Icon: Clipboard,
  },
  {
    id: 4,
    title: "Begin with Confidence",
    description: "Start your journey towards better vision or a healthier smile with expert care and advanced technology.",
    Icon: Activity,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-3">
            Your Journey
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Simple, guided care from <span className="text-cyan-600">consultation to treatment</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            We make your healthcare journey seamless and transparent at every step, ensuring you stay informed and comfortable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-dashed border-t-2 border-dashed border-cyan-200 -z-0" />

          {STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Circle — relative so badge anchors to it */}
              <div className="relative w-24 h-24 rounded-full bg-white border-4 border-cyan-50 shadow-lg flex items-center justify-center mb-6 group transition-all duration-300 hover:border-cyan-600">
                <div className="w-16 h-16 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <step.Icon size={30} strokeWidth={1.5} />
                </div>

                {/* Step Number Badge — top-right of icon circle */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cyan-900 text-white text-xs font-black flex items-center justify-center border-2 border-white shadow">
                  {index + 1}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

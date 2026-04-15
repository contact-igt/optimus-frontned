import { SERVICES } from "@/constants";

const SERVICE_ICONS = {
  1: ( // Cornea Services
    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  2: ( // Glaucoma Services
    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  3: ( // Cataract Services
    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      <line x1="9" y1="9" x2="15" y2="15" strokeLinecap="round" />
    </svg>
  ),
  4: ( // Vitreo-Retina & ROP Care
    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4C7 4 2.458 8.477 2.458 12S7 20 12 20s9.542-4.477 9.542-8S17 4 12 4z" />
      <circle cx="12" cy="12" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5V7M12 17v-2.5M9.5 12H7M17 12h-2.5" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 group flex gap-5 items-start"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 transition-colors duration-300">
                <div className="[&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white">
                  {SERVICE_ICONS[service.id]}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-800 mb-1.5 group-hover:text-cyan-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

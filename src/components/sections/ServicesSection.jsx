import { SERVICES } from "@/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                <span className="group-hover:grayscale-0 transition-all">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

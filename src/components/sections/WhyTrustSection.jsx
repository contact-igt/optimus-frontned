import { WHY_TRUST } from "@/constants";

const ICONS = {
  infrastructure: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 19H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z" />
    </svg>
  ),
  specialists: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 6c0 2.21-1.79 4-4 4S6 8.21 6 6s1.79-4 4-4 4 1.79 4 4zm-4 5c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
      <path d="M18 10h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
    </svg>
  ),
  robotic: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
    </svg>
  ),
  treatment: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.99 15.65l-1.02-3.07a2 2 0 0 0-1.89-1.37h-3V7.93c0-1.29-1.2-2.22-2.42-1.96L8.85 7c-1.05.22-1.85 1.06-2.07 2.11l-1.36 6.34a2 2 0 0 0 1.55 2.37l4.06.87 2.89 2.89a2.031 2.031 0 0 0 2.86-.03l4.63-4.73a1.99 1.99 0 0 0 .58-1.2l-.01-.01zM14 17.5l-2.4-2.4-.64-.64-3.35-.72L8.7 8.87l3.63-.76 5.86 1.4c.36.09.61.41.61.78v4.52l-4.8 4.69z" />
      <path d="M2 10h4v12H2z" />
    </svg>
  ),
  environment: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  ),
  ethical: (
    <svg className="w-12 h-12 text-cyan-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
};

export default function WhyTrustSection() {
  return (
    <section className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Patients Trust Optimus Eye Hospital &amp; Dental Clinic
          </h2>
          <p className="text-cyan-600 font-semibold text-sm sm:text-base tracking-widest uppercase">
            Trusted for Excellence in Eye &amp; Dental Care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_TRUST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-6">
                {ICONS[item.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

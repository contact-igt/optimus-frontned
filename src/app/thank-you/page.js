import Link from "next/link";

export const metadata = {
  title: "Thank You | Optimus Eye Hospital & Dental Clinic",
  description: "Your message has been received. We will get back to you shortly.",
};

const NEXT_STEPS = [
  {
    step: "01",
    title: "Team Review",
    description:
      "Our front-desk team will carefully review your enquiry and identify the right specialist for you.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "We Call You Back",
    description:
      "A member of our team will reach out to you within 24 hours to confirm your appointment slot.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Your Appointment",
    description:
      "Visit our clinic at your confirmed time and experience world-class eye and dental care.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { label: "Eye Care Services", href: "/services/eye-care", desc: "Cataract, LASIK & more" },
  { label: "Dental & Oral Care", href: "/services/dental-oral-care", desc: "Braces, implants & more" },
  { label: "Meet Our Doctors", href: "/doctors", desc: "Expert specialists" },
  { label: "Our Gallery", href: "/gallery", desc: "Clinic tour & photos" },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ── Hero / Confirmation Banner ── */}
      <div className="bg-linear-to-br from-cyan-700 to-cyan-900 py-20 px-4 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -right-10 w-72 h-72 bg-white/5 rounded-full" />

        <div className="relative max-w-xl mx-auto">
          {/* Checkmark icon */}
          <div className="w-24 h-24 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <p className="text-cyan-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Message Received
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Thank You!
          </h1>
          <p className="text-cyan-100 text-base leading-relaxed">
            Your enquiry has been submitted successfully. Our team will review
            your message and get back to you within&nbsp;
            <span className="font-semibold text-white">24 hours</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cyan-50 text-cyan-700 font-semibold px-7 py-3 rounded-xl text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            <a
              href="tel:+919999965200"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* ── What Happens Next ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
              What Happens Next
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Your Journey with Us
            </h2>
            <div className="mt-3 mx-auto w-14 h-1 bg-cyan-600 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {NEXT_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  Step {item.step}
                </span>
                <h3 className="text-base font-bold text-gray-800 mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info Strip ── */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 bg-cyan-50 rounded-full border border-cyan-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
              <a href="tel:+919999965200" className="text-gray-700 text-sm font-semibold hover:text-cyan-600 transition-colors">
                +91 9999965200
              </a>
              <a href="tel:+917518588355" className="text-gray-500 text-xs hover:text-cyan-600 transition-colors">
                +91 7518588355
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 bg-cyan-50 rounded-full border border-cyan-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Working Hours</p>
              <p className="text-gray-700 text-sm font-semibold">Mon – Sat</p>
              <p className="text-gray-500 text-xs">10:00 AM – 7:30 PM</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 bg-cyan-50 rounded-full border border-cyan-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
              <p className="text-gray-700 text-sm font-semibold">Arjunganj, Lucknow</p>
              <a
                href="https://www.google.com/maps/place/Optimus+Eye+Hospital+%26+Dental+Clinic/@26.8064217,80.9915087,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 text-xs hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Our Services ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
              While You Wait
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Explore Our Services
            </h2>
            <div className="mt-3 mx-auto w-14 h-1 bg-cyan-600 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 bg-white border border-gray-100 hover:border-cyan-300 hover:shadow-md rounded-2xl px-6 py-5 transition-all duration-200"
              >
                <div>
                  <p className="font-bold text-gray-800 text-sm group-hover:text-cyan-700 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{link.desc}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { SITE } from "@/constants";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production wire up to your backend / email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Visit Our Clinic
            </h3>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: SITE.address,
                  link: SITE.mapLink,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: SITE.phone,
                  link: `tel:${SITE.phone}`,
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: SITE.email,
                  link: `mailto:${SITE.email}`,
                },
                {
                  icon: "🕐",
                  label: "Working Hours",
                  value: SITE.hours,
                  link: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-700 text-sm hover:text-cyan-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden h-52 bg-cyan-50 border border-cyan-100 flex items-center justify-center">
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-cyan-600 hover:text-cyan-700"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-sm">View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Book an Appointment
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-3xl">
                  ✅
                </div>
                <p className="text-gray-800 font-semibold text-lg">
                  Thank you, {form.name}!
                </p>
                <p className="text-gray-500 text-sm">
                  We&apos;ll contact you shortly on {form.phone} to confirm your appointment.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
                  Book Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="dental">Dental Treatment</option>
                    <option value="eye">Eye Treatment</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="braces">Braces & Aligners</option>
                    <option value="eye-checkup">Eye Checkup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your concern..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Appointment Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

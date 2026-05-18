"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { Loader, CheckCircle, User, Mail, Phone, MessageSquare, Stethoscope, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/constants";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxhjnndmklj8tAlzqZS7lajH3Dz_F8VsfZc3JnzHsW_v167RuX1-BTRzmUu5xkyCCL2/exec";

const SERVICES = [
  "Eye Examination",
  "Cataract Surgery",
  "LASIK / Refractive Surgery",
  "Glaucoma Treatment",
  "Cornea Services",
  "Vitreo-Retina & ROP Care",
  "Dental Check-up",
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Root Canal Treatment",
  "Tooth Extraction",
  "Other",
];

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  service: z.string().min(1, "Please select a service"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  message: z.string().min(1, "Message is required"),
});

function validateWithZod(values) {
  const result = schema.safeParse(values);
  if (result.success) return {};
  const errors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}

const INFO_CARDS = [
  {
    Icon: MapPin,
    label: "Address",
    value: SITE.address,
    href: SITE.mapLink,
    external: true,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 9919965200, 7518588355",
    href: "tel:+919919965200",
    external: false,
  },
  {
    Icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
];

function Field({ icon: Icon, label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400 pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const formik = useFormik({
    initialValues: { name: "", service: "", email: "", mobile: "", message: "" },
    validate: validateWithZod,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, { resetForm, setStatus }) => {
      try {
        let ipAddress = "";
        try {
          const ipRes = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipRes.json();
          ipAddress = ipData.ip || "";
        } catch {
          // IP fetch is optional — continue without it
        }

        const utmSource =
          (typeof window !== "undefined" && localStorage.getItem("utm_source")) || "";

        const params = new URLSearchParams({
          name: values.name,
          service: values.service,
          email: values.email,
          mobile: values.mobile,
          message: values.message,
          ip: ipAddress,
          utm_source: utmSource,
          submitted_at: new Date().toISOString(),
        });

        await fetch(SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        });

        resetForm();
        window.location.href = "/thank-you";
      } catch {
        setStatus({ serverError: "Something went wrong. Please try again." });
      }
    },
  });

  return (
    <>
      {/* ── Page Hero ── */}
      <div className="relative h-64 sm:h-80 bg-gray-900 overflow-hidden">
        <img
          src="/assets/herobanner1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Optimus Eye Hospital &amp; Dental Clinic
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-widest uppercase mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-cyan-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-cyan-400">Contact</span>
          </nav>
        </div>
      </div>

      {/* ── Info Cards Strip ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cyan-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-full border-2 border-cyan-100 flex items-center justify-center text-cyan-600">
                  <card.Icon size={26} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm font-medium hover:text-cyan-600 transition-colors leading-relaxed"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get In Touch + Form ── */}
      <section className="py-16 sm:py-20 bg-[#e8f4f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-md">

            {/* Left — Info panel */}
            <div className="lg:w-5/12 bg-cyan-700 p-10 flex flex-col justify-between">
              <div>
                <p className="text-cyan-200 text-sm font-semibold uppercase tracking-widest mb-3">
                  Reach Out to Us
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-snug">
                  We&apos;re Here to Help You
                </h2>
                <p className="text-cyan-100 text-sm leading-relaxed mb-8">
                  Have a question or want to book an appointment? Fill out the form
                  and our team will get back to you as soon as possible.
                </p>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <MapPin size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-white text-sm leading-relaxed">{SITE.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Phone size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Phone</p>
                      <a href="tel:+919919965200" className="text-white text-sm hover:text-cyan-200 transition-colors">
                        +91 9919965200, 7518588355
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Mail size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Email</p>
                      <a href={`mailto:${SITE.email}`} className="text-white text-sm hover:text-cyan-200 transition-colors break-all">
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Clock size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Working Hours</p>
                      <p className="text-white text-sm">{SITE.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Decorative circles */}
              <div className="mt-10 flex gap-3">
                <div className="w-3 h-3 rounded-full bg-white opacity-30" />
                <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:w-7/12 bg-white p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in touch</h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the details below and we&apos;ll respond within 24 hours.
              </p>

              <form onSubmit={formik.handleSubmit} noValidate className="space-y-5">
                <Field icon={User} label="Name" error={formik.touched.name && formik.errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </Field>

                <Field icon={Stethoscope} label="Select Service" error={formik.touched.service && formik.errors.service}>
                  <select
                    name="service"
                    value={formik.values.service}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all bg-white appearance-none"
                  >
                    <option value="">-- Choose a service --</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <Field icon={Mail} label="Email" error={formik.touched.email && formik.errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </Field>

                <Field icon={Phone} label="Mobile Number" error={formik.touched.mobile && formik.errors.mobile}>
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-transparent transition-all">
                    <span className="pl-9 pr-2 py-3 text-sm text-gray-500 bg-gray-50 border-r border-gray-200 shrink-0 whitespace-nowrap">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="flex-1 px-3 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
                    />
                  </div>
                </Field>

                <Field icon={MessageSquare} label="Message" error={formik.touched.message && formik.errors.message}>
                  <textarea
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  />
                </Field>

                {formik.status?.serverError && (
                  <p className="text-sm text-red-500 text-center">{formik.status.serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-3xl transition-colors duration-200 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  {formik.isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="h-96 w-full">
        <iframe
          title="Optimus Eye Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.053606021087!2d80.9915087!3d26.8064217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdf9b5395a9f%3A0x9d4f422a751c2c03!2sOptimus%20Eye%20Hospital%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1776075110265!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

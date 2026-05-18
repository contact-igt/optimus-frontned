import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_LINKS, SERVICES } from "@/constants";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

// ─── Custom Social Icons (Lucide removed brand icons in newer versions) ───
const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const EYE_LINKS = [
  { label: "Cataract Surgery", href: "/services/eye-care#cataract" },
  { label: "Glaucoma Treatment", href: "/services/eye-care#glaucoma" },
  { label: "Retina & Vitreo Care", href: "/services/eye-care#retina" },
  { label: "Cornea Services", href: "/services/eye-care#cornea" },
  { label: "LASIK & Refractive", href: "/services/eye-care#lasik" },
  { label: "Pediatric Eye Care", href: "/services/eye-care#paediatric" },
];

const DENTAL_LINKS = [
  { label: "Root Canal Treatment", href: "/services/dental-care#root-canal" },
  { label: "Dental Implants", href: "/services/dental-care#implants" },
  { label: "Orthodontics & Braces", href: "/services/dental-care#braces" },
  { label: "Smile Makeover", href: "/services/dental-care#smile" },
  { label: "Pediatric Dentistry", href: "/services/dental-care#kids" },
  { label: "Preventive Dentistry", href: "/services/dental-care#preventive" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Brand & Intro col */}
        <div className="lg:col-span-3">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Optimus Eye Hospital & Dental Clinic"
              width={220}
              height={120}
              className="object-contain h-24 w-auto mb-6 rounded-xl"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
            Optimus Eye Hospital & Dental Clinic is a NABH-accredited facility in Arjunganj, Lucknow,
            dedicated to providing world-class healthcare with state-of-the-art technology and a patient-first approach.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61570996593229" },
              { Icon: InstagramIcon, href: "https://www.instagram.com/optimuseyehospital/" },
              { Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCv23uaer9Sl3YUL3KRQ8KUg" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-8 h-8 p-1.5 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Eye Care */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Eye Care</h3>
          <ul className="space-y-3">
            {EYE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dental Care */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Dental Care</h3>
          <ul className="space-y-3">
            {DENTAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company / Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-500 shrink-0 mt-0.5" />
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors leading-relaxed"
              >
                {SITE.address}
                <ExternalLink size={12} className="inline ml-1" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-500 shrink-0" />
              <a href={`tel:${SITE.phone}`} className="hover:text-cyan-400 transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-500 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-cyan-400 transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-cyan-500 shrink-0 mt-0.5" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <span className="hidden md:block text-gray-700">|</span>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <img src="/assets/NABH_logo.png" alt="NABH" className="w-5 h-5 object-contain" />
              <span className="text-xs font-bold text-gray-300">NABH Accredited Facility</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

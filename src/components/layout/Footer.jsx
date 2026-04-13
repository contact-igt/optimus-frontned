import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_LINKS, SERVICES } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Optimus Eye Hospital & Dental Clinic"
              width={140}
              height={90}
              className="rounded"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Providing world-class eye and dental care in Lucknow with
            experienced specialists and advanced technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Our Services
          </h3>
          <ul className="space-y-2">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-cyan-400 mt-0.5">📍</span>
              <span className="leading-relaxed">{SITE.address}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">📞</span>
              <a href={`tel:${SITE.phone}`} className="hover:text-cyan-400">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">✉️</span>
              <a href={`mailto:${SITE.email}`} className="hover:text-cyan-400 break-all">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">🕐</span>
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center text-xs text-gray-500 gap-2">
          <p>
            © {new Date().getFullYear()} {SITE.name} {SITE.tagline}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

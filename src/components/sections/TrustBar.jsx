"use client";

import { Shield, Activity, Search, Heart, MapPin } from "lucide-react";

const TRUST_ITEMS = [
  {
    id: 1,
    Icon: Shield,
    label: "NABH Accredited",
    sub: "Certified Quality Care",
  },
  {
    id: 2,
    Icon: Activity,
    label: "Expert Specialists",
    sub: "Eye & Dental Surgeons",
  },
  {
    id: 3,
    Icon: Search,
    label: "Advanced Technology",
    sub: "Surgical & Diagnostic",
  },
  {
    id: 4,
    Icon: Heart,
    label: "Patient-Centred",
    sub: "Compassionate Approach",
  },
  {
    id: 5,
    Icon: MapPin,
    label: "Arjunganj, Lucknow",
    sub: "Conveniently Located",
  },
];

export default function TrustBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-cyan-600 to-teal-600">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-10 left-1/4 w-60 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-60 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`group relative flex flex-col items-center justify-center gap-3 px-4 py-6 lg:py-7 text-center cursor-default
                transition-all duration-300 hover:bg-white/10
                ${i < TRUST_ITEMS.length - 1 ? "sm:border-r border-white/15" : ""}
              `}
            >
              {/* Icon circle */}
              <div
                className={`
                  relative flex items-center justify-center
                  w-14 h-14 rounded-2xl
                  bg-white/15 backdrop-blur-sm
                  ring-1 ring-white/25
                  text-white
                  group-hover:bg-white/25 group-hover:ring-white/40
                  group-hover:scale-110
                  transition-all duration-300 shadow-lg
                `}
              >
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                {item.id === 1 ? (
                  <img 
                    src="/assets/NABH_logo.png" 
                    alt="NABH" 
                    className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                  />
                ) : (
                  <item.Icon size={24} strokeWidth={1.8} />
                )}
              </div>

              {/* Label */}
              <div>
                <p className="text-sm font-bold text-white leading-tight tracking-wide">
                  {item.label}
                </p>
                <p className="text-[11px] text-cyan-200 font-medium leading-tight mt-1">
                  {item.sub}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-white/60 rounded-full group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

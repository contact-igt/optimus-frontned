"use client";

import { useState } from "react";
import { FAQS } from "@/constants";
import { ChevronDown } from "lucide-react";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen
          ? "border-cyan-300 shadow-sm"
          : "border-gray-200 hover:border-cyan-200"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? "text-cyan-700" : "text-gray-800"
            }`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-500"
            }`}
        >
          <ChevronDown
            size={16}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"
          }`}
      >
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const left = FAQS.slice(0, Math.ceil(FAQS.length / 2));
  const right = FAQS.slice(Math.ceil(FAQS.length / 2));

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">FAQ</h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        {/* Two-column accordion grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {left.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {right.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const CURATED = [
  {
    id: 1,
    name: "Abhay Trivedi",
    location: "Lucknow",
    rating: 5,
    category: "Eye Care",
    title: "Truly one of the Best Healthcare Experiences",
    review:
      "I recently visited Optimus Eye Hospital for my mother's eye treatment and I must say it was truly one of the best experiences I have ever had. The Hospital is very clean, peaceful, and equipped with modern technologies. But what really makes this place special is the compassion and dedication of the entire team. A Special thanks to Dr. Arvind Verma Sir who helped my mother to improve her vision, and I am very grateful for his dedication and professionalism.",
  },
  {
    id: 2,
    name: "Jitendra Verma",
    location: "Lucknow",
    rating: 5,
    category: "Eye Care",
    title: "Excellent Surgeon & Humble Explanation",
    review:
      "Dr. Arvind Verma is an excellent surgeon in Lucknow. He is very humble and explained everything about the treatment in very easy language. We are very satisfied with his treatment. He is definitely the most recommended cataract surgeon in Lucknow.",
  },
  {
    id: 3,
    name: "Ashish Ranjan",
    location: "Lucknow",
    rating: 5,
    category: "Eye Care",
    title: "Best Hospital with Highly Qualified Doctors",
    review:
      "One of the best hospitals in Lucknow. Dr. Arvind Verma is very good and co-operative with patients and is very highly qualified. The overall atmosphere and care provided here are top-notch.",
  },
  {
    id: 4,
    name: "Arjeet Rastogi",
    location: "Lucknow",
    rating: 5,
    category: "Dental Care",
    title: "Excellent Doctor & Clear Explanations",
    review:
      "Dr. Arvind Verma is a very good doctor and explains things to the patients very well. Dr. Arvind Verma is excellent. I am highly satisfied with the professionalism and care provided at the hospital.",
  },
];

const CATEGORY_COLORS = {
  "Eye Care": "bg-cyan-100 text-cyan-700",
  "Dental Care": "bg-teal-100 text-teal-700",
  "Pediatric Care": "bg-emerald-100 text-emerald-700",
};

const AVATAR_COLORS = {
  "Eye Care": "bg-cyan-600",
  "Dental Care": "bg-teal-600",
  "Pediatric Care": "bg-emerald-600",
};

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} strokeWidth={0} fill={i < rating ? "#facc15" : "#e5e7eb"} />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="px-3 pb-2 h-full">
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 h-full shadow-md hover:shadow-xl transition-all duration-300">

        {/* Category badge */}
        <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[item.category]}`}>
          {item.category}
        </span>

        {/* Quote icon + title */}
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center mt-0.5">
            <Quote size={14} className="text-white" fill="white" strokeWidth={0} />
          </div>
          <h4 className="text-gray-800 font-semibold text-sm leading-snug">{item.title}</h4>
        </div>

        {/* Review */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-4">
          {item.review}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Author row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${AVATAR_COLORS[item.category]}`}>
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="text-gray-800 font-semibold text-sm leading-tight">{item.name}</p>
              <p className="text-gray-400 text-xs">{item.location}</p>
            </div>
          </div>
          <Stars rating={item.rating} />
        </div>

      </div>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous"
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white text-cyan-700 border border-white flex items-center justify-center shadow hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-200"
    >
      <ChevronLeft size={18} strokeWidth={2.5} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next"
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white text-cyan-700 border border-white flex items-center justify-center shadow hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-200"
    >
      <ChevronRight size={18} strokeWidth={2.5} />
    </button>
  );
}

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: () => <button className="t-dot" aria-label="Go to slide" />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-linear-to-br from-cyan-700 via-cyan-700 to-cyan-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-8">

        {/* Google rating strip */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white border border-white/20 rounded-full px-5 py-2.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-gray-800 font-bold text-sm">4.9</span>
            <Stars rating={5} />
            <span className="text-gray-500 text-xs">· 500+ Google Reviews</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3">
            Patient Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-cyan-200 text-base max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands across Lucknow — here&apos;s what patients say about their experience at Optimus.
          </p>
        </div>

        {/* Slider */}
        <div className="relative pb-12">
          <Slider {...settings}>
            {CURATED.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-2">
          <a
            href="https://www.google.com/maps/search/Optimus+Eye+Hospital+Lucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cyan-700 font-bold text-sm px-7 py-4 rounded-3xl hover:bg-cyan-50 transition-colors duration-200 shadow-lg"
          >
            Read More Reviews on Google
            <ExternalLink size={14} strokeWidth={2.5} />
          </a>
        </div>

      </div>

      {/* Dot styles scoped to this section */}
      <style>{`
        .t-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.25s, width 0.25s;
        }
        .slick-dots {
          bottom: 0;
        }
        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 4px;
        }
        .slick-dots li button {
          width: auto;
          height: auto;
          padding: 0;
        }
        .slick-dots li button::before {
          display: none;
        }
        .slick-dots li.slick-active .t-dot {
          background: #ffffff;
          width: 28px;
        }
      `}</style>
    </section>
  );
}

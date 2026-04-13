"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS } from "@/constants";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="px-3 pb-2">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-300">
        {/* Author row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
            {item.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-800 text-sm leading-tight truncate">{item.name}</p>
            <p className="text-gray-400 text-xs truncate">{item.location}</p>
          </div>
          <StarRating rating={item.rating} />
        </div>

        {/* Quote + title */}
        <div className="mb-2 flex items-start gap-2">
          <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.995zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
          </svg>
          <h4 className="text-gray-800 font-semibold text-sm leading-snug">{item.title}</h4>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">{item.review}</p>
      </div>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 hover:text-white text-gray-500 transition-all duration-200"
      aria-label="Previous"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 hover:text-white text-gray-500 transition-all duration-200"
      aria-label="Next"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
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
    // Use customPaging only — no appendDots so slick keeps its slick-dots class
    customPaging: () => <button className="testimonial-dot" aria-label="Go to slide" />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Patient Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-cyan-600 rounded" />
        </div>

        {/* Carousel — pb-12 gives space for the dots below */}
        <div className="relative pb-12">
          <Slider {...settings}>
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>

      {/* Dot styles — scoped here so they don't bleed globally */}
      <style>{`
        .testimonial-dot {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #cbd5e1;
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
        .slick-dots li.slick-active .testimonial-dot {
          background: #0891b2;
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}

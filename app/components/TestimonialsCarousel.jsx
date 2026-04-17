"use client";

import { useState } from "react";
import { Star, ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = HOTEL_DATA.testimonials;

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
      setAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
      setAnimating(false);
    }, 300);
  };

  return (
    <section
      className="py-32 bg-[#F9F6F0] overflow-hidden border-t border-[#E6DCCF]"
      aria-label="Guest testimonials"
    >
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-serif text-[#2C1810] italic leading-snug mb-10">
              The perfect blend of luxury and raw nature. Waking up to
              these mountains is an experience you will never forget.
            </h3>

            {/* Platform Ratings */}
            <div className="flex justify-center items-center mb-12">
              <div className="flex flex-col items-center group">
                <div className="flex items-center gap-1.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#2C1810] text-[#2C1810]"
                    />
                  ))}
                </div>
                <span className="block text-[11px] uppercase tracking-[0.25em] text-[#8D6E63] font-medium">
                  Rated {HOTEL_DATA.ratings.google} Stars on Google Reviews
                </span>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative min-h-[200px] flex items-center justify-center mt-8">
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[#D7C9B8] hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-all z-10 text-[#5D4037]"
                aria-label="Previous testimonial"
                type="button"
              >
                <ArrowLeft size={20} />
              </button>

              <div
                className={`max-w-2xl mx-auto transition-all duration-300 transform ${animating
                  ? "opacity-0 translate-y-4 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
                  }`}
              >
                <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm text-center relative hover:shadow-xl transition-shadow duration-500 group">
                  <Quote
                    size={40}
                    className="absolute top-4 left-4 text-[#F2EBE3] group-hover:text-[#E6DCCF] transition-colors"
                  />
                  <p className="text-[#5D4037] font-light text-lg mb-6 relative z-10">
                    &quot;{items[index].text}&quot;
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-xs uppercase tracking-widest text-[#2C1810]">
                      {items[index].author}
                    </span>
                    <span className="text-[#D7CCC8]">•</span>
                    <span className="text-xs uppercase tracking-widest text-[#8D6E63]">
                      {items[index].location}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[#D7C9B8] hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810] transition-all z-10 text-[#5D4037]"
                aria-label="Next testimonial"
                type="button"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-12">
              <a
                href={HOTEL_DATA.external_links.google_reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-[#8D6E63] border-b border-[#D7C9B8] pb-1 hover:text-[#2C1810] hover:border-[#2C1810] transition-colors"
              >
                Read more reviews online
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

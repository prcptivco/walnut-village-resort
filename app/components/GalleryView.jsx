"use client";

import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

export default function GalleryView() {
  return (
    <section
      className="pt-32 pb-24 bg-[#F9F6F0] min-h-screen"
      aria-label="Photo gallery"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <SectionTitle subtitle="Gallery" title="Visual Journey" center />
          <p className="text-[#8D6E63] max-w-2xl mx-auto font-light">
            A glimpse into the {HOTEL_DATA.hotel.name}.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {HOTEL_DATA.gallery.map((src, i) => (
            <FadeIn key={i} delay={(i % 3) * 100}>
              <div className="break-inside-avoid relative group overflow-hidden shadow-lg rounded-sm cursor-pointer">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/20 transition-colors duration-500"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

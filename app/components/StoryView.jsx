"use client";

import { Mountain, Shield } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import LocationSection from "./LocationSection";

export default function StoryView() {
  return (
    <>
      <section
        className="py-32 md:py-48 px-6 bg-white min-h-screen"
        aria-label="About us details"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src="/images/hero/hero-1.jpeg"
                alt="Hotel Exterior"
                className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[16px] border-[#F9F6F0]/50 pointer-events-none"></div>
            </div>
          </FadeIn>
          <div className="md:pl-10">
            <FadeIn delay={200}>
              <SectionTitle subtitle="About Us" title="Walnut Village Resort" />
              <h3 className="text-2xl font-serif text-[#2C1810] mb-8 leading-relaxed">
                {HOTEL_DATA.about.headline}
              </h3>
              <div className="text-[#5D4037] text-lg leading-relaxed mb-12 font-light space-y-6">
                {HOTEL_DATA.about.body.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-8 text-[#8D6E63] text-sm mb-12">
                <div className="flex flex-col gap-2">
                  <Mountain size={24} className="text-[#2C1810]" />
                  <span className="font-bold text-[#2C1810] uppercase tracking-widest text-xs">
                    The View
                  </span>
                  <span>
                    Panoramic vistas of the surrounding valley and peaks.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <Shield size={24} className="text-[#2C1810]" />
                  <span className="font-bold text-[#2C1810] uppercase tracking-widest text-xs">
                    The Comfort
                  </span>
                  <span>
                    Modern amenities wrapped in traditional aesthetics.
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <LocationSection />
    </>
  );
}

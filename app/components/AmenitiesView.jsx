"use client";

import {
  Wifi,
  Car,
  Clock,
  Coffee,
  Phone,
  Shield,
  Thermometer,
} from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

const ICON_MAP = { Wifi, Car, Clock, Coffee, Phone, Shield, Thermometer };

export default function AmenitiesView() {
  return (
    <section
      className="pt-32 pb-24 bg-[#F9F6F0] min-h-screen"
      aria-label="Amenities"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <SectionTitle
            subtitle="Facilities"
            title="Curated Comforts"
            center
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOTEL_DATA.amenities.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-white p-10 hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col items-center text-center rounded-sm">
                  <div className="w-16 h-16 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#2C1810] mb-6 group-hover:bg-[#2C1810] group-hover:text-white transition-all duration-300">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-[#2C1810]">
                    {item.name}
                  </h4>
                  <p className="text-[#8D6E63] text-sm font-light leading-relaxed">
                    Experience premium service with our{" "}
                    {item.name.toLowerCase()}.
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

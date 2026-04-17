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
import Button from "./Button";

const ICON_MAP = { Wifi, Car, Clock, Coffee, Phone, Shield, Thermometer };

const AmenitiesHighlights = () => (
  <section
    className="py-24 bg-white border-b border-[#F2EBE3]"
    aria-label="Amenities highlights"
  >
    <div className="max-w-7xl mx-auto px-6 text-center">
      <FadeIn>
        <span className="text-[#A1887F] text-xs font-bold tracking-widest uppercase mb-4 block">
          Our Services
        </span>
        <h2 className="text-3xl font-serif text-[#2C1810] mb-16">
          Designed for Comfort
        </h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-12">
          {HOTEL_DATA.amenities.slice(0, 4).map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-4 group cursor-default"
              >
                <div className="p-4 rounded-full bg-[#F9F6F0] text-[#8D6E63] group-hover:bg-[#2C1810] group-hover:text-white transition-all duration-500">
                  {Icon && <Icon size={20} />}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#5D4037]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
        <Button to="/amenities">Explore All Amenities</Button>
      </FadeIn>
    </div>
  </section>
);

export default AmenitiesHighlights;

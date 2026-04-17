"use client";

import { MapPin } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const LocationSection = () => (
  <section
    className="min-h-[600px] relative flex flex-col md:flex-row"
    aria-label="Location and map"
  >
    <div className="w-full md:w-1/2 bg-[#F9F6F0] flex flex-col justify-center p-12 md:p-24 relative z-10">
      <div className="max-w-md w-full">
        <SectionTitle subtitle="Location" title="In the Heart of Nature" />
        <div className="space-y-6 text-[#5D4037] font-light">
          <p>{HOTEL_DATA.location.address}</p>
          <div className="pt-8">
            <Button to="/contact">Get Directions</Button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-white flex flex-col">
      {/* Map Embed Container */}
      <div className="relative h-[400px] w-full bg-[#E6DCCF]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.6188045942417!2d75.2821814068152!3d33.92862670455801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e215c5cc3b6283%3A0x59b66210fa86758c!2sWalnut%20Village%20Resort!5e0!3m2!1sen!2sin!4v1776341862991!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 contrast-[1.1] opacity-90 hover:opacity-100 transition-all duration-700"
          title="Walnut Village Resort Location"
        ></iframe>
      </div>

      {/* Attractions List Below Map */}
      <div className="flex-1 bg-[#2C1810] text-[#D7C9B8] p-10 md:p-12 flex flex-col justify-center">
        <h4 className="font-serif text-2xl text-white mb-8">
          Nearby Attractions
        </h4>
        <ul className="space-y-6">
          {HOTEL_DATA.location.attractions.map((spot, i) => (
            <li
              key={i}
              className="flex justify-between border-b border-[#A1887F]/30 pb-3 text-sm group hover:pl-2 transition-all cursor-default"
            >
              <span className="text-[#D7C9B8] group-hover:text-white transition-colors">
                {spot.name}
              </span>
              <span className="font-bold text-white font-serif italic">
                {spot.dist}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default LocationSection;

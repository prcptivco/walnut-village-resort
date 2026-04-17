"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import tariffData from "../../tarrif.json";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const RoomsTeaser = () => (
  <section
    className="py-24 bg-[#F9F6F0]"
    id="rooms-teaser"
    aria-label="Featured rooms"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <SectionTitle subtitle="Accommodation" title="Rooms & Suites" center />
        <p className="text-[#8D6E63] max-w-2xl mx-auto text-sm leading-relaxed -mt-8 md:-mt-16">
          Sanctuaries designed for silence and serenity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tariffData.rooms.map((room, idx) => (
          <FadeIn key={room.id} delay={idx * 200}>
            <div
              className="group cursor-pointer block"
              aria-label={`View details for ${room.name}`}
            >
              <div className="overflow-hidden mb-6 relative h-[350px] rounded-sm">
                <img
                  src={room.images[0].src}
                  alt={room.images[0].alt}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Fallback Placeholder */}
                <div className="hidden w-full h-full flex flex-col items-center justify-center bg-[#1A0F0A] text-white p-12 text-center absolute inset-0">
                  <div className="w-12 h-px bg-white/20 mb-4" />
                  <h4 className="font-serif text-lg mb-1">{room.name}</h4>
                  <p className="text-[10px] opacity-60 uppercase tracking-widest">{room.images[0].caption}</p>
                </div>
              </div>
              <h3 className="text-xl font-serif text-[#2C1810] mb-2">
                {room.name}
              </h3>
              <p className="text-[#5D4037] text-sm mb-6 line-clamp-2 font-light">
                {room.short_description}
              </p>
              <Button to={`/rooms/${room.slug}`} className="w-full">
                View Room
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/rooms"
          className="group text-[#2C1810] uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 mx-auto hover:text-[#5D4037] transition-colors"
        >
          Explore our Accommodation{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default RoomsTeaser;

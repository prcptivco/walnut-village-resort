"use client";

import tariffData from "../../tarrif.json";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function RoomsView() {
  return (
    <section
      className="pt-32 pb-24 bg-[#F9F6F0] min-h-screen"
      aria-label="Rooms and suites"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24">
            <SectionTitle
              subtitle="Accommodation"
              title="Rooms & Suites"
              center
            />
            <p className="text-[#8D6E63] max-w-2xl mx-auto font-light">
              Experience the finest in mountain living. Every room is a vantage
              point for nature&apos;s grandeur, designed with warmth and
              elegance.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {tariffData.rooms.map((room, idx) => (
            <FadeIn key={room.id} delay={idx * 100}>
              <div
                className={`flex flex-col ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 md:gap-24 items-center group`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative overflow-hidden shadow-2xl rounded-sm">
                  <img
                    src={room.images[0].src}
                    alt={room.images[0].alt}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                  />
                  {/* Fallback Placeholder */}
                  <div className="hidden w-full h-[400px] md:h-[500px] flex-col items-center justify-center bg-[#1A0F0A] text-white p-12 text-center">
                    <div className="w-20 h-px bg-white/20 mb-6" />
                    <h4 className="font-serif text-2xl mb-2">{room.name}</h4>
                    <p className="text-sm opacity-60 uppercase tracking-widest">{room.images[0].caption}</p>
                    <div className="w-20 h-px bg-white/20 mt-6" />
                  </div>
                  <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/5 transition-colors duration-500"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-4xl font-serif text-[#2C1810] group-hover:text-[#5D4037] transition-colors">
                      {room.name}
                    </h3>
                  </div>

                  <div className="h-px w-12 bg-[#2C1810] mb-6 opacity-20"></div>

                  <p className="text-[#5D4037] font-light leading-relaxed mb-8 text-lg">
                    {room.short_description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                    {room.features.slice(0, 6).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8D6E63]"
                      >
                        <div className="w-1 h-1 bg-[#2C1810] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div>
                    <Button primary to={`/rooms/${room.slug}`}>
                      View Room
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

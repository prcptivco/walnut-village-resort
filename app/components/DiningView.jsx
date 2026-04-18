"use client";

import { HOTEL_DATA } from "../data/hotel";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import menuData from "../../menu.json";

export default function DiningView() {
  const cafe = HOTEL_DATA.about.cafe;

  // High-quality aesthetic unsplash images for cafe
  const images = [
    "/images/brookside/b4.jpeg",
    "/images/brookside/b3.jpeg",
    "/images/brookside/b2.jpeg",
    "/images/brookside/b1.jpeg"
  ];

  const menuCategories = menuData.menu;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionTitle subtitle={cafe.type} title={cafe.name} />
            <p className="text-lg text-[#5D4037] font-light max-w-2xl mx-auto italic">
              &quot;{cafe.tagline}&quot;
            </p>
          </div>
        </FadeIn>

        {/* 4 Picture Aesthetic Grid */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-24 h-auto md:h-[600px]">
            <div className="md:col-span-6 lg:col-span-5 h-[300px] md:h-full">
              <img src={images[0]} alt="Cafe atmosphere" className="w-full h-full object-cover rounded-sm shadow-md" />
            </div>
            <div className="md:col-span-6 lg:col-span-7 grid grid-rows-2 gap-4 h-[600px] md:h-full">
              <div className="h-full">
                <img src={images[1]} alt="Coffee and treats" className="w-full h-full object-cover rounded-sm shadow-md" />
              </div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <img src={images[2]} alt="Dining setup" className="w-full h-full object-cover rounded-sm shadow-md" />
                <img src={images[3]} alt="Scenic view" className="w-full h-full object-cover rounded-sm shadow-md" />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Menu Section */}
        <FadeIn delay={400}>
          <div className="bg-white p-8 md:p-16 rounded-sm shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-[#2C1810] mb-4">Our Menu</h2>
              <div className="w-16 h-px bg-[#D7C9B8] mx-auto"></div>
            </div>

            <div className="space-y-16">
              {menuCategories.map((category, idx) => (
                <div key={idx}>
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-serif text-[#2C1810] uppercase tracking-widest mb-2">
                      {category.section}
                    </h3>
                    {category.tagline && (
                      <p className="text-sm text-[#8D6E63] italic">{category.tagline}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col border-b border-[#F2EBE3] pb-4 h-full justify-end">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h4 className="font-bold text-[#2C1810] text-lg">{item.name}</h4>
                          {item.tag && (
                            <span className="text-[9px] uppercase tracking-widest bg-[#2C1810] text-white px-2 py-0.5 rounded-sm font-bold">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#8D6E63] font-light">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

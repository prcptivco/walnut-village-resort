"use client";

import { User } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

const MDMessage = () => (
  <section
    className="py-24 bg-white"
    aria-label="Message from Managing Director"
  >
    <div className="max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="bg-[#F9F6F0] p-10 md:p-16 border-l-4 border-[#2C1810] relative">
          <SectionTitle subtitle="Leadership" title={HOTEL_DATA.md_message.section_label} />
          <div className="prose prose-lg text-[#5D4037] font-light mb-10 leading-relaxed">
            {HOTEL_DATA.md_message.body.split('\n\n').map((p, i) => (
              <p key={i} className="mb-6">{p}</p>
            ))}
            <p className="mt-8 italic">{HOTEL_DATA.md_message.sign_off}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E6DCCF] rounded-full flex items-center justify-center text-[#5D4037]">
              <User size={20} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#2C1810]">
                {HOTEL_DATA.md_message.name}
              </h4>
              <span className="text-xs uppercase tracking-widest text-[#8D6E63]">
                {HOTEL_DATA.md_message.designation}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default MDMessage;

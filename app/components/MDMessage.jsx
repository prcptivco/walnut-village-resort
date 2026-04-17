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
          <SectionTitle subtitle="Leadership" title="Message from the M.D." />
          <div className="prose prose-lg text-[#5D4037] font-light mb-10 leading-relaxed">
            <p className="mb-6">
              &quot;Dear Guests, May we extend our most cordial welcome and
              sincere wishes for a pleasant stay while you are with us. We will
              try our best to keep comfort, convenience and class in every
              sector of service at {HOTEL_DATA.hotel.name}. We always are looking forward
              to the changing international trends and building
              relationships.&quot;
            </p>
            <p>
              &quot;Our guests may have some needs beyond our expectation and we
              request our guests to bring it to our notice without any
              hesitation, our team makes sure that a stay here remains a
              pleasant memory for the patrons long after they have left the
              hotel.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E6DCCF] rounded-full flex items-center justify-center text-[#5D4037]">
              <User size={20} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#2C1810]">
                Founder &amp; CEO
              </h4>
              <span className="text-xs uppercase tracking-widest text-[#8D6E63]">
                Hotel Management
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default MDMessage;

"use client";

import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const StoryTeaser = () => (
  <section
    className="py-24 bg-[#F9F6F0] border-t border-[#E6DCCF]"
    aria-label="Our story teaser"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeIn>
        <SectionTitle
          subtitle="Our Story"
          title="A Sanctuary in the Mountains"
          center
        />
        <p className="text-[#8D6E63] font-light leading-relaxed mb-8 text-lg">
          {HOTEL_DATA.hotel.name} was conceived not just as a hotel, but as a sanctuary
          where the silence of nature meets the warmth of genuine hospitality.
          Located in one of the world&apos;s most pristine landscapes, we offer
          an escape from the ordinary.
        </p>
        <Button to="/story">Read Our Full Story</Button>
      </FadeIn>
    </div>
  </section>
);

export default StoryTeaser;

import Hero from "./components/Hero";
import dynamic from "next/dynamic";

const RoomsTeaser = dynamic(() => import("./components/RoomsTeaser"));
const AmenitiesHighlights = dynamic(() => import("./components/AmenitiesHighlights"));
const TestimonialsCarousel = dynamic(() => import("./components/TestimonialsCarousel"));
const MDMessage = dynamic(() => import("./components/MDMessage"));
const StoryTeaser = dynamic(() => import("./components/StoryTeaser"));

export default function Home() {
  return (
    <>
      <Hero />
      <AmenitiesHighlights />
      <RoomsTeaser />
      <TestimonialsCarousel />
      <MDMessage />
      <StoryTeaser />
    </>
  );
}

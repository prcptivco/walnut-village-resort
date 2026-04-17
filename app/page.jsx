import Hero from "./components/Hero";
import RoomsTeaser from "./components/RoomsTeaser";
import AmenitiesHighlights from "./components/AmenitiesHighlights";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import MDMessage from "./components/MDMessage";
import StoryTeaser from "./components/StoryTeaser";

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

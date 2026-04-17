"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import Button from "./Button";

import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const words = HOTEL_DATA.hotel.name.split(" ");
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
  };

  const slides = [
    "/images/hero/hero-1.jpeg",
    "/images/hero/hero-5.jpeg",
    "/images/hero/hero-2.jpeg",
    "/images/hero/hero-3.jpeg",
    "/images/hero/hero-4.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#2C1810]"
      aria-label="Hero section"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${slide})` }}
          role="img"
          aria-label="Hotel views slideshow"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#2C1810]/60 z-10" />

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <FadeIn delay={200}>
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md mb-6">
            Luxury • Comfort • Nature
          </span>
        </FadeIn>
        <FadeIn delay={400}>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 leading-none tracking-tight flex justify-center gap-4 flex-wrap"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </FadeIn>
        <FadeIn delay={600}>
          <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto font-light tracking-wide mb-10">
            {HOTEL_DATA.hotel.tagline}
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
          <Button glass to="/booking">
            Check Availability
          </Button>
          <Button glass to="/rooms">
            Explore our Suites
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const element = document.getElementById("rooms-teaser");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down to rooms"
          type="button"
        >
          <ArrowRight className="rotate-90" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

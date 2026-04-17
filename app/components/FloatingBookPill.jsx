"use client";

import { Calendar } from "lucide-react";

const FloatingBookPill = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#2C1810] text-white py-4 px-2 rounded-l-md shadow-2xl hover:bg-[#4A2C20] transition-all duration-300 group flex flex-col items-center gap-2"
    style={{ writingMode: "vertical-rl" }}
    aria-label="Open booking options"
    type="button"
  >
    <span className="text-xs font-bold uppercase tracking-widest rotate-180">
      Book Now
    </span>
    <Calendar
      size={16}
      className="rotate-90 group-hover:scale-110 transition-transform mb-2"
    />
  </button>
);

export default FloatingBookPill;

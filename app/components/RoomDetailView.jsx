"use client";

import { useState } from "react";
import { Check, Users, Bed, Info, ArrowLeft } from "lucide-react";
import Link from "next/link";
import tariffData from "../../tarrif.json";
import FadeIn from "./FadeIn";
import Button from "./Button";
import { useModals } from "../context/ModalContext";

const RoomDetailView = ({ room }) => {
  const [selectedMealPlan, setSelectedMealPlan] = useState("CPAI");
  const [imageError, setImageError] = useState({});
  const { openBooking } = useModals();

  if (!room) return null;

  const mealPlans = tariffData.tariff_meta.meal_plans;
  const currentPlan = mealPlans[selectedMealPlan];
  const nightlyRate = room.rates[selectedMealPlan];

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  const formatCurrency = (amount) => {
    if (amount === "FOC") return "Free of Charge";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="bg-[#F9F6F0] min-h-screen pt-32 pb-24" aria-label={`Details for ${room.name}`}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A1887F] hover:text-[#2C1810] transition-colors mb-12 font-bold"
          >
            <ArrowLeft size={16} /> Back to Accommodation
          </Link>
        </FadeIn>

        <div className="bg-white rounded-sm shadow-xl flex flex-col lg:flex-row relative items-start">
          {/* Left: Image Stack */}
          <div className="w-full lg:w-1/2 flex flex-col shrink-0">
            {room.images.map((img, idx) => (
              <div key={idx} className="relative w-full">
                {!imageError[idx] ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={() => handleImageError(idx)}
                    className="w-full h-auto object-cover block"
                  />
                ) : (
                  <div className="w-full aspect-video flex flex-col items-center justify-center bg-[#1A0F0A] text-white p-12 text-center border-b border-white/10">
                    <div className="w-20 h-px bg-white/20 mb-6" />
                    <h4 className="font-serif text-2xl mb-2">{room.name}</h4>
                    <p className="text-sm opacity-60 uppercase tracking-widest">
                      {img.caption}
                    </p>
                    <div className="w-20 h-px bg-white/20 mt-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Details & Selector */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col bg-white">
            <FadeIn delay={200}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A1887F] font-bold block mb-4">
                Accommodation
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-[#2C1810] mb-8">
                {room.name}
              </h1>
              <p className="text-[#5D4037] font-light leading-relaxed text-base mb-10 italic border-l-2 border-[#D7C9B8] pl-6">
                {room.long_description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 text-[#8D6E63] p-4 bg-[#F9F6F0]/50 rounded-sm">
                  <Users size={20} className="text-[#2C1810]" />
                  <span className="text-xs uppercase tracking-widest leading-tight">
                    Max<br/><span className="text-[#2C1810] font-bold">{room.max_guests} Guests</span>
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[#8D6E63] p-4 bg-[#F9F6F0]/50 rounded-sm">
                  <Bed size={20} className="text-[#2C1810]" />
                  <span className="text-xs uppercase tracking-widest leading-tight">
                    Bed Type<br/><span className="text-[#2C1810] font-bold">{room.beds}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#2C1810] mb-6">
                  Room Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#5D4037]">
                      <Check size={16} className="text-[#A1887F] shrink-0" />
                      <span className="tracking-wide font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meal Plan Selector */}
              <div className="border-t border-[#F2EBE3] pt-10 mb-10">
                <div className="flex justify-between items-end mb-8">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#2C1810]">
                    Select Meal Plan
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {Object.keys(mealPlans).map((planKey) => (
                    <button
                      key={planKey}
                      onClick={() => setSelectedMealPlan(planKey)}
                      className={`px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border transition-all ${
                        selectedMealPlan === planKey
                          ? "bg-[#2C1810] text-white border-[#2C1810]"
                          : "bg-white text-[#8D6E63] border-[#D7C9B8] hover:border-[#2C1810] hover:text-[#2C1810]"
                      }`}
                    >
                      {planKey}
                    </button>
                  ))}
                </div>
                
                <div className="bg-[#2C1810] text-white p-8 rounded-sm mb-10 shadow-lg relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 mb-4 relative z-10">
                    <div>
                     <h5 className="text-lg font-serif mb-1">{currentPlan.full_name}</h5>
                     <p className="text-xs text-white/70 font-light tracking-wide">{currentPlan.description}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-3xl font-serif">
                        {formatCurrency(nightlyRate)}
                        <span className="text-xs font-sans text-white/70 ml-2 uppercase tracking-widest relative -top-1">/ night</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] uppercase tracking-widest text-[#D7C9B8] italic mt-4 pt-4 border-t border-white/10 relative z-10">
                    * {tariffData.tariff_meta.gst_note}
                  </div>
                </div>
              </div>

              {/* Extras Section */}
              <div className="mb-12">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#2C1810] mb-6 flex items-center gap-3">
                  <Info size={16} className="text-[#A1887F]" /> Add-ons & Extras
                </h4>
                <div className="space-y-4">
                  {tariffData.extras.map((extra) => {
                    const extraRate = extra.rates[selectedMealPlan];
                    return (
                      <div key={extra.id} className="flex justify-between items-center bg-white p-5 border border-[#F2EBE3] rounded-sm hover:border-[#D7C9B8] transition-colors">
                        <div>
                          <span className="block text-sm font-bold text-[#2C1810] mb-1">{extra.label}</span>
                          <span className="text-[11px] text-[#8D6E63] font-light tracking-wide">{extra.description}</span>
                        </div>
                        <div className={`text-sm tracking-wide ${extraRate === "FOC" ? "text-green-600 italic font-serif" : "text-[#2C1810] font-bold"}`}>
                          {formatCurrency(extraRate)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                 <Button primary className="w-full justify-center py-5 text-sm" onClick={openBooking}>
                    Book This Room Now
                 </Button>
                 <p className="text-center text-[10px] text-[#A1887F] uppercase tracking-widest mt-4">
                    Best rates guaranteed when booking direct
                 </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailView;

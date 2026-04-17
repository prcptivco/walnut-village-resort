"use client";

import { useRouter } from "next/navigation";
import { X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { HOTEL_DATA } from "../data/hotel";

export default function BookingModal({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  const whatsappMessage = `Hi, I am interested in booking a stay at ${HOTEL_DATA.hotel.name}. Please share availability and rates.`;
  const whatsappUrl = `https://wa.me/${HOTEL_DATA.contact.phones[1]
    .replace(/\s/g, "")
    .replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

  const partners = [
    { name: "Booking.com", href: HOTEL_DATA.external_links.booking_com },
    { name: "Vio.com", href: HOTEL_DATA.external_links.vio_com },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#2C1810]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="bg-white w-full max-w-md relative z-10 shadow-2xl animate-fade-in-up rounded-sm overflow-hidden">
        <div className="bg-[#2C1810] p-6 text-white flex justify-between items-center">
          <h3 id="booking-modal-title" className="font-serif text-xl">
            Quick Reservation
          </h3>
          <button
            onClick={onClose}
            className="hover:text-[#D7C9B8] transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <p className="text-[#5D4037] text-sm mb-6 font-light text-center">
            For the fastest service and best rates, chat with us directly.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 mb-8 rounded-sm transition-colors shadow-md group"
          >
            <MessageCircle className="group-hover:scale-110 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">
              Chat on WhatsApp
            </span>
          </motion.a>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E6DCCF]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest text-[#A1887F]">
              <span className="bg-white px-2">Partners</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {partners.map((partner) => (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border border-[#E6DCCF] p-3 hover:border-[#2C1810] hover:bg-[#F9F6F0] transition-all text-xs font-bold text-[#2C1810]"
              >
                {partner.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onClose();
              router.push("/booking");
            }}
            className="w-full text-center text-xs uppercase tracking-widest text-[#A1887F] hover:text-[#2C1810] underline decoration-1 underline-offset-4 transition-colors"
            type="button"
          >
            View More Options
          </motion.button>
        </div>
      </div>
    </div>
  );
}

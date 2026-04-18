"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { Calendar } from "lucide-react";
import { ModalProvider, useModals } from "../context/ModalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBookPill from "./FloatingBookPill";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("./BookingModal"), { ssr: false });
const LegalModal = dynamic(() => import("./LegalModal"), { ssr: false });

function LayoutInner({ children }) {
  const pathname = usePathname();
  const {
    isBookingOpen,
    closeBooking,
    openBooking,
    legalModal,
    closeLegal,
  } = useModals();

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="font-sans text-[#2C1810] bg-white selection:bg-[#E6DCCF] selection:text-[#2C1810]"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModal.open}
        title={legalModal.title}
        content={legalModal.content}
        onClose={closeLegal}
      />

      {/* Booking Options Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* Floating Book Now Pill (Desktop) */}
      <div className="hidden md:block">
        <FloatingBookPill onClick={openBooking} />
      </div>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-30 md:hidden">
        <button
          onClick={openBooking}
          className="flex items-center justify-center w-14 h-14 bg-[#2C1810] text-white rounded-full shadow-xl hover:bg-[#4A2C20] transition-colors"
          aria-label="Book now"
          type="button"
        >
          <Calendar size={24} />
        </button>
      </div>
    </div>
  );
}

export default function ClientLayout({ children }) {
  return (
    <ModalProvider>
      <LayoutInner>{children}</LayoutInner>
    </ModalProvider>
  );
}

"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({
    open: false,
    type: "",
    title: "",
    content: "",
  });

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  const openLegal = (type) => {
    const contentMap = {
      privacy: { title: "Privacy Policy", body: "We value your privacy..." },
      terms: { title: "Terms of Service", body: "By using this site..." },
      refund: {
        title: "Refund Policy",
        body: "Cancellations 7 days prior...",
      },
    };
    if (contentMap[type]) {
      setLegalModal({
        open: true,
        type,
        title: contentMap[type].title,
        content: contentMap[type].body,
      });
    }
  };

  const closeLegal = () => setLegalModal({ ...legalModal, open: false });

  return (
    <ModalContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        legalModal,
        openLegal,
        closeLegal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModals must be used within ModalProvider");
  return context;
}

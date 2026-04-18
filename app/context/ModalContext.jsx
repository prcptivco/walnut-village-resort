"use client";

import { createContext, useContext, useState } from "react";
import { HOTEL_DATA } from "../data/hotel";

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
      privacy: {
        title: "Privacy Policy",
        body: (
          <div className="space-y-6 text-sm text-[#5D4037] font-light">
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or make a reservation at {HOTEL_DATA.hotel.name}.
            </p>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">1. Information We Collect</h4>
              <p>We may collect personal information such as your name, email address, phone number, and payment details when you make a booking, subscribe to our newsletter, or contact us. We also automatically collect standard technical information (e.g., IP address, browser type) through cookies.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">2. How We Use Your Information</h4>
              <p>Your information is used to process reservations, communicate with you regarding your stay, and improve our services. We do not sell your personal data to third parties.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">3. Cookies and Tracking</h4>
              <p>We use cookies to analyze website traffic and optimize your user experience. By accepting our use of cookies, your data will be aggregated with all other user data. You can manage your cookie preferences through your browser settings.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">4. Data Security</h4>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">5. Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, please contact us at {HOTEL_DATA.contact.email}.</p>
            </div>
          </div>
        ),
      },
      terms: {
        title: "Terms of Service",
        body: (
          <div className="space-y-6 text-sm text-[#5D4037] font-light">
            <p>
              Welcome to {HOTEL_DATA.hotel.name}. By accessing our website and utilizing our services, you agree to comply with and be bound by the following Terms of Service.
            </p>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">1. Use of Website</h4>
              <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">2. Reservations and Policies</h4>
              <p>All reservations are subject to availability and our standard Reservation, Cancellation, and Refund Policy. We reserve the right to refuse service or cancel bookings at our discretion if these terms are violated.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">3. Intellectual Property</h4>
              <p>The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by {HOTEL_DATA.hotel.name}. You may not reproduce, download, or transmit any part of this site without prior written permission.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">4. Limitation of Liability</h4>
              <p>{HOTEL_DATA.hotel.name} will not be liable for any indirect, special, or consequential damages arising out of or in connection with the use of this website.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#2C1810] mb-2">5. Modifications</h4>
              <p>We reserve the right to revise these Terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms.</p>
            </div>
          </div>
        ),
      },
      refund: {
        title: "Reservation, Cancellation & Refund Policy",
        body: (
          <div className="space-y-10">
            <p>{HOTEL_DATA.policies.reservation_cancellation_refund.intro}</p>
            
            <div>
              <h3 className="text-lg font-serif text-[#2C1810] mb-4 border-b border-[#F2EBE3] pb-2">Rate Plans</h3>
              <div className="space-y-4">
                {HOTEL_DATA.policies.reservation_cancellation_refund.rates.map((rate) => (
                  <div key={rate.id} className="bg-[#F9F6F0] p-6 rounded-sm border border-[#E6DCCF]">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="font-bold text-[#2C1810]">{rate.name}</h4>
                      {rate.tag && (
                        <span className="text-[10px] uppercase tracking-widest bg-[#2C1810] text-white px-2 py-1 rounded-sm font-bold">
                          {rate.tag}
                        </span>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {rate.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif text-[#2C1810] mb-4 border-b border-[#F2EBE3] pb-2">Additional Policies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {HOTEL_DATA.policies.reservation_cancellation_refund.additional_policies.map((policy) => (
                  <div key={policy.id} className="bg-white p-5 border border-[#F2EBE3] rounded-sm shadow-sm">
                    <h4 className="font-bold text-[#2C1810] mb-2 text-sm">{policy.title}</h4>
                    <p className="text-sm">{policy.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F2EBE3] whitespace-pre-wrap italic text-[#8D6E63]">
              {HOTEL_DATA.policies.reservation_cancellation_refund.sign_off}
            </div>
          </div>
        ),
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

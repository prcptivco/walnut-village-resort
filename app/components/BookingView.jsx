"use client";

import { MessageCircle, Check, ExternalLink } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

export default function BookingView() {
  const whatsappMessage = `Hi, I am interested in booking a stay at ${HOTEL_DATA.hotel.name}. Please share availability and rates.`;
  const whatsappUrl = `https://wa.me/${HOTEL_DATA.contact.phones[1]
    .replace(/\s/g, "")
    .replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

  const partners = [
    { name: "Booking.com", href: HOTEL_DATA.external_links.booking_com },
    { name: "Vio.com", href: HOTEL_DATA.external_links.vio_com },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F9F6F0] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle
            subtitle="Reservations"
            title="Reserve Your Sanctuary"
            center
          />
          <p className="text-[#8D6E63] max-w-xl mx-auto text-lg font-light">
            Choose your preferred way to book. For personalized requests and the
            best rates, we recommend booking directly with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Direct Booking Card */}
          <FadeIn>
            <div className="bg-[#2C1810] text-white p-10 md:p-14 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 bg-white/5">
                  Recommended
                </span>
                <h3 className="text-3xl font-serif mb-6">Direct Booking</h3>
                <p className="text-[#D7C9B8] font-light leading-relaxed mb-8">
                  Connect directly with our reservation desk via WhatsApp. Enjoy
                  personalized service, custom itinerary planning, and exclusive
                  direct-booking offers.
                </p>

                <ul className="space-y-4 mb-10 text-sm text-[#D7C9B8]">
                  <li className="flex items-center gap-3">
                    <Check size={16} /> Best Rate Guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> Instant Confirmation
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> Personalized Requests
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-5 rounded-sm transition-all shadow-lg transform group-hover:translate-y-[-2px]"
              >
                <MessageCircle size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </FadeIn>

          {/* Online Partners Card */}
          <FadeIn delay={200}>
            <div className="bg-white border border-[#E6DCCF] p-10 md:p-14 h-full flex flex-col shadow-lg">
              <h3 className="text-3xl font-serif text-[#2C1810] mb-6">
                Online Partners
              </h3>
              <p className="text-[#8D6E63] font-light leading-relaxed mb-8">
                Prefer to book through your favorite travel platform? We are
                listed on all major OTAs for your convenience.
              </p>

              <div className="space-y-4 mb-10">
                {partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full border border-[#E6DCCF] p-5 hover:border-[#2C1810] hover:bg-[#F9F6F0] transition-all group"
                  >
                    <span className="font-sans text-[#2C1810] text-lg">
                      {partner.name}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-[#A1887F] group-hover:text-[#2C1810]"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-[#F2EBE3]">
                <p className="text-xs uppercase tracking-widest text-[#A1887F] mb-2">
                  Need Assistance?
                </p>
                <a
                  href={`tel:${HOTEL_DATA.contact.phones[1].replace(
                    /\s/g,
                    ""
                  )}`}
                  className="text-[#2C1810] font-serif text-lg hover:text-[#5D4037] transition-colors"
                >
                  {HOTEL_DATA.contact.phones[1]}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

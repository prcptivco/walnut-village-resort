"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import { useModals } from "../context/ModalContext";

export default function Footer() {
  const { openLegal } = useModals();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/story" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="bg-[#1A0F0A] text-[#A1887F] pt-24 pb-12 px-6 border-t border-white/5"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-6">
          <Link href="/" className="block">
            <img 
              src="/logo.png" 
              alt={HOTEL_DATA.hotel.name} 
              className="h-24 w-auto brightness-0 invert" 
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Elevating the standard of luxury. Experience the unseen, the
            untouched, and the unforgettable.
          </p>
          <div className="flex gap-6 pt-4">
            <a
              href={`https://${HOTEL_DATA.hotel.social_media?.instagram || "#"}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white cursor-pointer transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">
            Contact
          </h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex gap-4">
              <MapPin size={16} className="shrink-0 mt-1" />
              <span>{HOTEL_DATA.location.address}</span>
            </li>
            <li className="flex gap-4">
              <Phone size={16} className="shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <span>{HOTEL_DATA.contact.phones[0]} (General)</span>
                <span>{HOTEL_DATA.contact.phones[1]} (Reservations)</span>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail size={16} className="shrink-0 mt-1" />
              <a
                href={`mailto:${HOTEL_DATA.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {HOTEL_DATA.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">
            Links
          </h4>
          <ul className="space-y-4 text-sm font-light">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors text-left"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">
            Legal
          </h4>
          <ul className="space-y-4 text-sm font-light">
            <li>
              <button
                onClick={() => openLegal("privacy")}
                className="hover:text-white transition-colors text-left"
                type="button"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => openLegal("terms")}
                className="hover:text-white transition-colors text-left"
                type="button"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => openLegal("refund")}
                className="hover:text-white transition-colors text-left"
                type="button"
              >
                Refund Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-xs tracking-wide">
        <span>
          &copy; {new Date().getFullYear()} {HOTEL_DATA.hotel.name}. All rights reserved.
        </span>
        <div className="opacity-50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Designed & Developed by{" "}
          <a
            href="https://prcptiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Perceptive Co.
          </a>
        </div>
      </div>
    </footer>
  );
}

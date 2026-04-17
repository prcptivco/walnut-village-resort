"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isNavTransparent = !(scrolled || !isHome);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Contact", href: "/contact" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#F9F6F0]/95 backdrop-blur-md py-4 shadow-sm text-[#2C1810]"
            : "bg-transparent py-8 text-white"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="z-50 relative flex items-center"
          >
            <img src="/logo.png" alt={HOTEL_DATA.hotel.name} className="h-12 w-auto" />
          </Link>

          <div
            className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest ${
              scrolled || !isHome ? "text-[#5D4037]" : "text-white/80"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#A1887F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              glass={isNavTransparent}
              primary={!isNavTransparent}
              to="/booking"
            >
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            type="button"
          >
            {mobileMenuOpen ? (
              <X
                size={24}
                className={
                  scrolled || !isHome ? "text-[#2C1810]" : "text-white"
                }
              />
            ) : (
              <Menu
                size={24}
                className={
                  scrolled || !isHome ? "text-[#2C1810]" : "text-white"
                }
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#1A0F0A] z-40 flex flex-col items-center justify-center transition-transform duration-500 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-center text-white font-serif text-2xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="text-sm font-sans uppercase tracking-widest border border-white/30 px-8 py-3 mt-4 text-white"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </>
  );
}

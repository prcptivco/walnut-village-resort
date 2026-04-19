"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { HOTEL_DATA } from "../data/hotel";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import { motion } from "framer-motion";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    
    const whatsappMessage = `*New Query from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email || "Not provided"}%0A*Phone:* ${formData.phone || "Not provided"}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${HOTEL_DATA.contact.queries_phone.replace(/\s/g, "").replace("+", "")}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const inputAnimationProps = {
    whileFocus: { scale: 1.02, backgroundColor: "rgba(249, 246, 240, 0.5)" },
    transition: { duration: 0.2 },
  };

  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-md">
            <SectionTitle subtitle="Get in Touch" title="Contact Us" />
            <p className="text-[#5D4037] mb-10 font-light">
              Have a question or special request? Send us a message and our
              concierge team will respond shortly.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <motion.input
                  {...inputAnimationProps}
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full border-b border-[#D7C9B8] py-3 focus:border-[#2C1810] focus:outline-none font-serif bg-transparent text-[#2C1810]"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <motion.input
                  {...inputAnimationProps}
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full border-b border-[#D7C9B8] py-3 focus:border-[#2C1810] focus:outline-none font-serif bg-transparent text-[#2C1810]"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <motion.input
                  {...inputAnimationProps}
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full border-b border-[#D7C9B8] py-3 focus:border-[#2C1810] focus:outline-none font-serif bg-transparent text-[#2C1810]"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <motion.textarea
                  {...inputAnimationProps}
                  id="message"
                  placeholder="Your Message *"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-[#D7C9B8] py-3 focus:border-[#2C1810] focus:outline-none font-serif bg-transparent resize-none text-[#2C1810]"
                ></motion.textarea>
              </div>
              <Button primary type="submit" className="w-full">
                Send Message via WhatsApp
              </Button>
            </form>
            <div className="mt-12 space-y-4 text-sm text-[#8D6E63]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Phone size={16} />{" "}
                  <span>{HOTEL_DATA.contact.queries_phone} ({HOTEL_DATA.contact.queries_label})</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={16} className="opacity-0" />{" "}
                  <span>{HOTEL_DATA.contact.phones[0]} (Reservations)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={16} /> <span>{HOTEL_DATA.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#F2EBE3] order-1 lg:order-2 h-[50vh] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.6188045942417!2d75.2821814068152!3d33.92862670455801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e215c5cc3b6283%3A0x59b66210fa86758c!2sWalnut%20Village%20Resort!5e0!3m2!1sen!2sin!4v1776342812284!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 contrast-[1.1] opacity-90 transition-all duration-700  hover:opacity-100"
            title="Walnut Village Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

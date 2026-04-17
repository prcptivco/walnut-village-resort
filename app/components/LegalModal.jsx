"use client";

import { X } from "lucide-react";

const LegalModal = ({ title, isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#1A0F0A]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up rounded-sm">
        <div className="sticky top-0 bg-white border-b border-[#F2EBE3] p-6 flex justify-between items-center z-20">
          <h2
            id="legal-modal-title"
            className="text-xl font-serif text-[#2C1810]"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F9F6F0] rounded-full transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8 md:p-12">
          <div className="prose prose-stone prose-sm max-w-none font-light text-[#5D4037] whitespace-pre-wrap">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

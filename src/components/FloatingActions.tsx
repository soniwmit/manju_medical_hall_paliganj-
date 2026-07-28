import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export default function FloatingActions({ onOpenOrderModal }: FloatingActionsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl border border-slate-700 transition transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button (Mobile visible) */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        title={`Call ${BUSINESS_INFO.shortName}`}
        className="pointer-events-auto sm:hidden p-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl transition transform hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Floating WhatsApp Order Button */}
      <button
        onClick={onOpenOrderModal}
        title="WhatsApp Medicine Order"
        className="pointer-events-auto relative group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Pulsing ring background */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>
        
        <div className="relative w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
          <MessageSquare className="w-4 h-4 fill-current" />
        </div>

        <div className="text-left hidden sm:block pr-1">
          <span className="block text-xs font-black uppercase tracking-wider leading-none">
            WhatsApp Order
          </span>
          <span className="text-[10px] text-emerald-100 font-medium leading-tight">
            100% Genuine Medicines
          </span>
        </div>
      </button>

    </div>
  );
}

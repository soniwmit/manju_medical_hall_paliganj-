import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Pill, 
  Search, 
  Sparkles,
  ChevronRight,
  Clock,
  MapPin
} from 'lucide-react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenOrderModal: () => void;
  onOpenSearchModal: () => void;
  onOpenAIAssistantModal: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  onOpenOrderModal,
  onOpenSearchModal,
  onOpenAIAssistantModal
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView; anchor?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 font-semibold bg-emerald-950/80 text-emerald-400 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider border border-emerald-800/60">
              <Clock className="w-3 h-3 text-emerald-400" /> Open Today: 8:00 AM – 10:00 PM
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0A8F6A]" /> Indra Nagar More, Paliganj (Bihar 801110)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-emerald-400 transition flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenAIAssistantModal}
              className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs transition shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
              <span>AI Medicine Helper</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Title */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-sm group-hover:bg-[#087a5a] transition-colors">
              M
            </div>

            <div>
              <h1 className="text-lg font-bold text-blue-900 dark:text-white leading-tight group-hover:text-[#0A8F6A] transition-colors">
                Manju Medical Hall
              </h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                Paliganj • Indra Nagar
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-colors py-1 ${
                    active 
                      ? 'text-[#0A8F6A] font-bold border-b-2 border-[#0A8F6A]' 
                      : 'hover:text-[#0A8F6A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              title="Search Medicines"
              className="p-2 sm:px-3 sm:py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Search className="w-4 h-4 text-[#0A8F6A]" />
              <span className="hidden sm:inline">Search Medicines</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100 hover:bg-blue-100 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#0A8F6A] text-white text-xs font-bold rounded-full shadow-md shadow-emerald-100 hover:bg-[#087a5a] transition"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WHATSAPP ORDER</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center justify-between p-3 rounded-xl text-left font-semibold text-sm transition ${
                  currentPage === item.page
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

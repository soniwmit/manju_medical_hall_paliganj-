import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Pill, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { useTracker } from '../hooks/useTracker';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
  onOpenOrderModal: () => void;
  onOpenSearchModal: () => void;
  currentPage?: PageView;
}

export default function Footer({ setCurrentPage, onOpenOrderModal, onOpenSearchModal, currentPage }: FooterProps) {
  useTracker(currentPage);

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Pill className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                  {BUSINESS_INFO.shortName}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">Paliganj Indra Nagar More</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Providing 100% genuine medicines, surgical items, baby care, and healthcare devices at affordable prices.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs px-3 py-1 rounded-full font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed Chemist Store
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home Page', page: 'home' as PageView },
                { label: 'About Us & Store Story', page: 'about' as PageView },
                { label: 'Pharmacy Services', page: 'services' as PageView },
                { label: 'Store Gallery', page: 'gallery' as PageView },
                { label: 'Contact & Store Map', page: 'contact' as PageView },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-emerald-400 text-slate-400 transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenSearchModal}
                  className="hover:text-emerald-400 text-slate-400 transition flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Search Genuine Medicines</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-2.5">
              Working Hours
            </h4>
            
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Mon – Sat:</p>
                  <p className="text-xs">{BUSINESS_INFO.workingHours.weekdays}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Sunday:</p>
                  <p className="text-xs">{BUSINESS_INFO.workingHours.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Emergency Contact:</p>
                  <p className="text-xs text-slate-300">{BUSINESS_INFO.workingHours.emergency}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-2.5">
              Contact & Location
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.location}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium flex items-center gap-1"
                >
                  <span>WhatsApp: +91 {BUSINESS_INFO.phone}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition text-xs">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Prescription Order</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs text-slate-500">
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-800 text-slate-400 text-xs leading-relaxed">
            <span className="font-bold text-amber-400">Medical Disclaimer: </span>
            Information provided on this website is for general educational and informational purposes regarding pharmacy services at Manju Medical Hall Paliganj. Schedule H & H1 prescription drugs strictly require a valid prescription from a registered medical practitioner. Never self-medicate without qualified clinical consultation.
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 border-t border-slate-800">
            <p className="text-slate-400">
              © {new Date().getFullYear()} <span className="text-white font-semibold">{BUSINESS_INFO.name}</span>. All rights reserved. • Indra Nagar More, Paliganj | <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">Developed by WMIT</a>
            </p>

            <div className="flex items-center gap-6 text-xs flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-300 font-medium">Store is currently Open</span>
              </div>
              <span className="text-white font-medium italic">"Your Trusted Partner in Health"</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

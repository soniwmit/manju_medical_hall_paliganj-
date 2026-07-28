import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  UserCheck, 
  Tag, 
  Zap, 
  FileText, 
  HeartPulse, 
  Building2, 
  Pill, 
  Wine, 
  Syringe, 
  Activity, 
  Dumbbell, 
  Sparkles, 
  Baby, 
  Shield, 
  Stethoscope, 
  Heart, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Clock, 
  Search,
  Store,
  FileUp,
  CreditCard,
  ExternalLink,
  Award
} from 'lucide-react';
import { PageView } from '../types';
import { 
  BUSINESS_INFO, 
  WHY_CHOOSE_US, 
  FEATURED_CATEGORIES, 
  SERVICES_LIST, 
  WORKING_PROCESS_STEPS, 
  TESTIMONIALS, 
  FAQS 
} from '../data/pharmacyData';

import heroBannerImg from '../assets/images/pharmacy_hero_banner_1785222467271.jpg';
import storeFrontImg from '../assets/images/pharmacy_store_front_1785222479850.jpg';

interface HomePageProps {
  setCurrentPage: (page: PageView) => void;
  onOpenOrderModal: (medName?: string) => void;
  onOpenSearchModal: () => void;
}

export default function HomePage({ setCurrentPage, onOpenOrderModal, onOpenSearchModal }: HomePageProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'Tag': return <Tag className="w-6 h-6 text-emerald-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'Wine': return <Wine className="w-6 h-6 text-emerald-600" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600" />;
      case 'Store': return <Store className="w-6 h-6 text-emerald-600" />;
      case 'FileUp': return <FileUp className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-emerald-600" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION (Professional Polish Theme) */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Section: Hero & Value Props */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block border border-blue-200 dark:border-blue-800">
                  Trusted Local Pharmacy • Paliganj
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 dark:text-white leading-[1.15] mb-4 tracking-tight">
                  Your Gateway to <span className="text-[#0A8F6A]">Quality Healthcare</span> in Paliganj
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Providing 100% genuine medicines, healthcare products, baby care, and surgical essentials at affordable rates with direct store fulfillment.
                </p>
              </div>

              {/* Value Proposition Badges */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] font-bold text-sm">✓</div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">100% Genuine Pharma</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] font-bold text-sm">✓</div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Fast Counter Service</span>
                </div>
              </div>

              {/* Store Contact Banner & Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-md">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Store Contact</p>
                    <p className="text-lg font-bold text-blue-900 dark:text-blue-300">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex gap-3 flex-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 px-4 py-3.5 bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-xl border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL STORE</span>
                  </a>

                  <button
                    onClick={() => onOpenOrderModal()}
                    className="flex-1 px-4 py-3.5 bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-100 dark:shadow-none transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WHATSAPP ORDER</span>
                  </button>
                </div>
              </div>

              {/* Quick Search trigger box */}
              <div className="pt-1">
                <button
                  onClick={onOpenSearchModal}
                  className="w-full bg-white dark:bg-slate-900 hover:bg-slate-50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 p-3.5 rounded-2xl text-xs sm:text-sm flex items-center justify-between gap-3 text-left transition shadow-sm"
                >
                  <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                    <Search className="w-4 h-4 text-[#0A8F6A]" />
                    <span>Search Paracetamol, Pan D, Glycomet, BP Monitor, Cerelac...</span>
                  </div>
                  <span className="bg-[#0A8F6A] text-white px-3 py-1 rounded-lg text-xs font-bold shrink-0">
                    Catalog
                  </span>
                </button>
              </div>

            </div>

            {/* Right Section: WhatsApp Quick Order Form */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">WhatsApp Quick Order</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Upload prescription or list medicines for fast packing.</p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Store is currently Open" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Medicine Name / Requirement</label>
                    <textarea 
                      rows={3} 
                      placeholder="e.g. Paracetamol 650mg (1 strip), Sugar Test Strips..."
                      onClick={() => onOpenOrderModal()}
                      readOnly
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 cursor-pointer focus:outline-none focus:border-[#0A8F6A]"
                    />
                  </div>

                  <div 
                    onClick={() => onOpenOrderModal()}
                    className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center cursor-pointer hover:border-emerald-500 bg-slate-50 dark:bg-slate-800/50 transition space-y-1"
                  >
                    <FileUp className="w-6 h-6 text-[#0A8F6A] mx-auto" />
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Click to upload Prescription Photo on WhatsApp</p>
                  </div>

                  <button 
                    onClick={() => onOpenOrderModal()}
                    className="w-full py-3.5 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-100 dark:shadow-none flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Order via WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Operating Hours</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Daily: 8:00 AM — 10:00 PM</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Location</p>
                  <p className="font-semibold text-blue-900 dark:text-blue-300 underline underline-offset-2">Paliganj, Bihar</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            Our Key Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Manju Medical Hall?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We prioritize genuine medicine quality, honest pricing, and compassionate patient care above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500/80 shadow-sm hover:shadow-md transition duration-300 space-y-3 relative group"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  {item.badge}
                </span>
              )}

              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                Healthcare Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Pharmacy Services
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                Comprehensive pharmaceutical care, medical devices, and health products for every family in Paliganj.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View All Dedicated Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    {getIcon(srv.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-xs text-slate-500 dark:text-slate-400">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-800 dark:text-slate-200 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Product Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Medicine & Product Categories
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Browse our wide inventory of authentic pharmaceuticals, surgical items, and wellness products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={onOpenSearchModal}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 cursor-pointer shadow-sm hover:shadow-md transition space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(cat.iconName)}
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  {cat.count}+ Items
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <span>Browse Products</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CUSTOMERS TRUST US */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
              Trust & Community
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Why Customers Trust Manju Medical Hall
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              We have built deep relationships with thousands of families across Paliganj by providing authentic medicines with care, accuracy, and reasonable rates.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-2xl font-black text-emerald-400">100%</span>
                <span className="text-xs text-slate-300">Genuine Medicines</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-2xl font-black text-emerald-400">10k+</span>
                <span className="text-xs text-slate-300">Happy Local Families</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Experienced Pharmacy", desc: "Qualified staff checking dosage and expiry before counter handoff.", icon: UserCheck },
              { title: "Quality Medicines", desc: "Stored under cold-chain refrigeration and temperature control.", icon: ShieldCheck },
              { title: "Quick Service", desc: "Instant counter dispatch and rapid WhatsApp prescription order.", icon: Zap },
              { title: "Friendly Staff", desc: "Patiently explaining prescription schedules to elderly customers.", icon: Heart },
              { title: "Reasonable Pricing", desc: "Transparent MRP discounts and genuine value on chronic refills.", icon: Tag },
              { title: "Convenient Location", desc: "Easily reachable at Indra Nagar More, Main Road Paliganj.", icon: MapPin },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <item.icon className="w-6 h-6 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Easy 4-Step Process
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Getting your medicines from Manju Medical Hall is simple, fast, and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKING_PROCESS_STEPS.map((proc, idx) => (
            <div
              key={proc.step}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {proc.step}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
                  {getIcon(proc.iconName)}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {proc.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {proc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Local Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Paliganj Residents Say
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Read real reviews from our valued local customers and healthcare patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full">
                      {t.medicineCategory}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {t.location} • {t.date}
                    </p>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Local
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Find answers to common questions about our pharmacy services, prescriptions, and WhatsApp ordering.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Store Location
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Visit Manju Medical Hall in Paliganj
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {BUSINESS_INFO.address}, {BUSINESS_INFO.location}
            </p>
          </div>

          <a
            href={BUSINESS_INFO.googleMapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 self-start sm:self-auto transition shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Google Maps App</span>
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-80 sm:h-96 w-full bg-slate-200 dark:bg-slate-800 relative">
          <iframe
            src={BUSINESS_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manju Medical Hall Google Map Location"
            className="w-full h-full filter saturate-105"
          />
        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black">Need Urgent Medicines?</h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Call us directly or order via WhatsApp. We will pack your verified genuine medicines instantly for counter pickup or local delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenOrderModal()}
              className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-current" />
              <span>WhatsApp Order</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

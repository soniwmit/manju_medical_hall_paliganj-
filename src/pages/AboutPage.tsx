import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Clock, 
  Award, 
  CheckCircle2, 
  UserCheck, 
  Building2, 
  Phone, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';

import storeFrontImg from '../assets/images/pharmacy_store_front_1785222479850.jpg';
import heroBannerImg from '../assets/images/pharmacy_hero_banner_1785222467271.jpg';

interface AboutPageProps {
  onOpenOrderModal: () => void;
}

export default function AboutPage({ onOpenOrderModal }: AboutPageProps) {
  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          About Our Pharmacy
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          About Manju Medical Hall Paliganj
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Serving Paliganj, Bihar with authentic medicines, compassionate customer service, and dedicated community health care.
        </p>
      </section>

      {/* Business Story & Store Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Journey & Business Story
            </h2>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Established with a core commitment to healthcare integrity, <strong>Manju Medical Hall</strong> located at <strong>Indra Nagar More, Paliganj (Bihar 801110)</strong> has grown into the region's most trusted neighborhood chemist store.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We understand that access to 100% genuine, unadulterated pharmaceutical products can be a matter of life and health for our local families. Every batch of tablet, insulin vial, baby food, and surgical supply in our inventory is procured directly through authorized company supply chains.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">100% Genuine</h4>
                <p className="text-xs text-slate-500">Certified stockists only</p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 space-y-1">
                <Clock className="w-6 h-6 text-sky-600" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Daily Service</h4>
                <p className="text-xs text-slate-500">8:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src={storeFrontImg}
                alt="Manju Medical Hall Store Front"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex items-end">
                <div className="text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Paliganj, Bihar</span>
                  <h3 className="text-lg font-bold">Counter & Consultation Desk</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision & Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To ensure every resident in Paliganj and surrounding villages has immediate access to affordable, authentic medicines and reliable medical supplies with personalized warmth.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the undisputed first-choice pharmacy in South Bihar known for 100% pharmaceutical authenticity, rapid prescription fulfillment, and innovative digital convenience like WhatsApp ordering.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Integrity, patient safety, transparent pricing, cold-chain excellence, and polite personal attention to every customer who walks through our doors.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Our Journey
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Pharmacy Milestones
          </h2>
        </div>

        <div className="space-y-6 relative border-l-2 border-emerald-500/40 pl-6 ml-4 sm:ml-8">
          {[
            { title: "Store Foundation", desc: "Started our medical hall at Indra Nagar More, Paliganj to supply genuine medicines." },
            { title: "Cold-Chain Expansion", desc: "Added dedicated medical refrigeration for insulin and vaccine temperature maintenance." },
            { title: "Surgical & Device Wing", desc: "Introduced digital BP monitors, glucometers, nebulizers and clinical surgical items." },
            { title: "Digital Prescription Orders", desc: "Launched 1-click WhatsApp order facility for easy prescription submission." }
          ].map((item, idx) => (
            <div key={idx} className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white dark:border-slate-900" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Message */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl">
              M
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pharmacist & Owner Message</h3>
              <p className="text-xs text-emerald-400">Manju Medical Hall Paliganj</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "At Manju Medical Hall, we consider health as the greatest blessing of life. When a family member is unwell, getting genuine medicines without doubt or delay is paramount. We promise to serve every customer in Paliganj with authentic products, correct dosage guidance, and genuine empathy."
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <span className="text-xs text-slate-400">Paliganj Indra Nagar More</span>
            <button
              onClick={onOpenOrderModal}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Owner on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

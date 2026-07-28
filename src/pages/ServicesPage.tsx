import React, { useState } from 'react';
import { 
  FileCheck, 
  Pill, 
  Dumbbell, 
  Baby, 
  Sparkles, 
  Activity, 
  Scissors, 
  Cross, 
  HeartPulse, 
  Shield, 
  CheckCircle2, 
  MessageSquare,
  Search,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/pharmacyData';

interface ServicesPageProps {
  onOpenOrderModal: (serviceTitle?: string) => void;
}

export default function ServicesPage({ onOpenOrderModal }: ServicesPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Medicines', 'Wellness', 'Mother & Baby', 'Personal Care', 'Devices', 'Surgical', 'First Aid', 'Specialized', 'Home Care'];

  const filteredServices = SERVICES_LIST.filter(s => {
    if (selectedFilter === 'All') return true;
    return s.category === selectedFilter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-emerald-600" />;
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-emerald-600" />;
      case 'Cross': return <Cross className="w-6 h-6 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-600" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-12 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Complete Pharmacy Services
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore dedicated healthcare products, prescription fulfillment, surgical items, and medical monitoring equipment available at Manju Medical Hall Paliganj.
        </p>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedFilter === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wider">
                    Key Features & Products:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order / Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

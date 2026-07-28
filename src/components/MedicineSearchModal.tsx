import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Pill, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ShieldCheck, 
  Tag, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { MEDICINE_CATALOG } from '../data/pharmacyData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOrderMedicine: (medName: string) => void;
}

export default function MedicineSearchModal({ isOpen, onClose, onSelectOrderMedicine }: MedicineSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Diabetic Care', 'Vitamins', 'Medical Equipment', 'Baby Products', 'Protein Supplements'];

  const filteredMedicines = MEDICINE_CATALOG.filter((med) => {
    const matchesQuery = 
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.uses.some(use => use.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory || med.dosageForm === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-6 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Search Genuine Medicine Inventory</h3>
              <p className="text-xs text-slate-400">Manju Medical Hall Paliganj • 100% Authentic Stock</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-emerald-600" />
            <input
              type="text"
              autoFocus
              placeholder="Search by medicine name, salt/composition (e.g. Paracetamol, Glycomet, Pan D, Omron)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-inner"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-base font-bold text-slate-800 dark:text-slate-200">
                No matching catalog item found
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Don't worry! We stock thousands of additional prescription & OTC medicines in our Paliganj store. Send us your requirement on WhatsApp.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onSelectOrderMedicine(searchQuery);
                }}
                className="mt-2 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order "{searchQuery}" via WhatsApp</span>
              </button>
            </div>
          ) : (
            filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition shadow-sm space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {med.name}
                      </h4>
                      {med.prescriptionRequired ? (
                        <span className="text-[10px] font-bold uppercase bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                          Prescription Rx
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                          OTC Genuine
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Brand: <span className="text-slate-800 dark:text-slate-200 font-semibold">{med.brand}</span> • Salt: <span className="italic">{med.composition}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                      {med.priceEstimate}
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center sm:justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" /> In Stock at Store
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                  {med.description}
                </p>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Primary Uses:</span>
                    {med.uses.map((use, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                        {use}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectOrderMedicine(med.name);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition shadow-sm ml-auto"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

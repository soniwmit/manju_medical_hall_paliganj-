import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  User, 
  Pill, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { WhatsAppFormData } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppOrderModal({ isOpen, onClose, prefilledMedicine }: WhatsAppOrderModalProps) {
  const [formData, setFormData] = useState<WhatsAppFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Paliganj, Bihar',
    medicineName: prefilledMedicine || '',
    prescriptionUploaded: false,
    prescriptionFileName: '',
    prescriptionNotes: '',
    message: '',
    preferredDeliveryTime: 'Immediate (Within 1-2 Hours)',
  });

  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        prescriptionUploaded: true,
        prescriptionFileName: file.name
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({
      ...prev,
      prescriptionUploaded: false,
      prescriptionFileName: ''
    }));
    setUploadPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp prefilled message matching prompt spec
    const hasPrescription = formData.prescriptionUploaded ? 'Yes (Photo Attached)' : 'No';

    const formattedMessage = `Manju Medical Hall Paliganj Indra Nagar More
Hello,
Manju Medical

Customer Name: ${formData.customerName || 'Customer'}
Phone: ${formData.mobileNumber}
Medicine Required: ${formData.medicineName || 'As per prescription attached'}
Address: ${formData.address}
Prescription: ${hasPrescription}
Preferred Delivery Time: ${formData.preferredDeliveryTime}
Message: ${formData.message || 'Please confirm availability and total price.'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

    setSubmittedSuccess(true);

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-100 font-medium">Manju Medical Hall Paliganj Indra Nagar More</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-5">
          
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Opening WhatsApp...</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your order request has been generated. If WhatsApp does not open automatically, click below to send your prefilled message directly to our pharmacist.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store: {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-emerald-50 dark:bg-emerald-950/50 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5">
                <Clock className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                <span>
                  <strong>Fast Local Fulfillment:</strong> Upload your prescription photo or list your required medicines. Our pharmacist will verify stock and reply with pricing on WhatsApp instantly.
                </span>
              </div>

              {/* Grid 1: Customer Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Customer Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.customerName}
                      onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobileNumber}
                      onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Delivery Address / Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Near High School, Paliganj / Village Name"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Medicine Name Required */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Medicine Name(s) / Products Required
                </label>
                <div className="relative">
                  <Pill className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <textarea
                    rows={2}
                    placeholder="e.g. Paracetamol 650 (1 strip), Glycomet GP2 (2 strips), Dettol 250ml"
                    value={formData.medicineName}
                    onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>
              </div>

              {/* Upload Prescription */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Upload Doctor Prescription (Optional)
                </label>
                
                {formData.prescriptionUploaded ? (
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                    <div className="flex items-center gap-3 overflow-hidden">
                      {uploadPreview ? (
                        <img src={uploadPreview} alt="Prescription Preview" className="w-12 h-12 rounded-lg object-cover border" />
                      ) : (
                        <FileText className="w-8 h-8 text-emerald-600" />
                      )}
                      <div className="truncate">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {formData.prescriptionFileName}
                        </p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                          Prescription Photo Ready
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg text-xs font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition bg-slate-50 dark:bg-slate-800/50">
                    <Upload className="w-7 h-7 text-emerald-600 mb-1" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Click to choose image / snap prescription photo
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      Supports JPG, PNG, PDF (Max 10MB)
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Preferred Delivery Time */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Preferred Time / Urgency
                </label>
                <select
                  value={formData.preferredDeliveryTime}
                  onChange={e => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="Immediate (Within 1-2 Hours)">Immediate (Urgent - Within 1-2 Hours)</option>
                  <option value="Today Evening">Today Evening</option>
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                  <option value="Store Pickup">Self Pickup from Indra Nagar More Store</option>
                </select>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Special Note / Instructions
                </label>
                <input
                  type="text"
                  placeholder="e.g. Please check if generic brand is available."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-2xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition transform active:scale-95 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

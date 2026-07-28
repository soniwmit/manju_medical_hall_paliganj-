import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  User,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    queryType: 'General Medicine Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Contact Manju Medical Hall
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We are located at Indra Nagar More, Paliganj. Call us, send a message on WhatsApp, or visit our store counter directly.
        </p>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6 border border-slate-800">
              <h3 className="text-xl font-extrabold text-white">Store Information</h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Address</h4>
                    <p className="text-xs text-slate-300">{BUSINESS_INFO.address}, {BUSINESS_INFO.location}</p>
                    <p className="text-[11px] text-emerald-400 font-medium mt-0.5">{BUSINESS_INFO.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Phone Number</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-bold text-emerald-300 hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">WhatsApp Support</h4>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>+91 {BUSINESS_INFO.phone}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Working Hours</h4>
                    <p className="text-xs text-slate-300">Mon – Sat: {BUSINESS_INFO.workingHours.weekdays}</p>
                    <p className="text-xs text-slate-300">Sunday: {BUSINESS_INFO.workingHours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Email</h4>
                    <p className="text-xs text-slate-300">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 transition shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store Directly Now</span>
                </a>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>24x7 Emergency Contact</span>
              </div>
              <p className="text-xs leading-relaxed">
                Need urgent life-saving medications or insulin refills outside regular working hours? Call our emergency line at <a href={`tel:${BUSINESS_INFO.phone}`} className="underline font-bold">{BUSINESS_INFO.phone}</a>.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have a question about medicine availability, price estimation, or surgical supplies? Fill in your details below.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Received!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.name}! Our pharmacist will review your message and reach back to you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.queryType}
                      onChange={e => setFormData({ ...formData, queryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                      <option value="Prescription Refill Request">Prescription Refill Request</option>
                      <option value="Surgical / Device Supply">Surgical / Device Supply</option>
                      <option value="Baby Care & Supplements">Baby Care & Supplements</option>
                      <option value="Other Business Query">Other Business Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Message / Requirement Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please write details of your requirement..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Embedded Store Google Map Location
        </h3>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-80 sm:h-96 w-full">
          <iframe
            src={BUSINESS_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manju Medical Hall Location Map"
          />
        </div>
      </section>

    </div>
  );
}

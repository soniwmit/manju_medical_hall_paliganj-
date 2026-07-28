import React, { useState } from 'react';
import { ZoomIn, MapPin, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryImage } from '../types';

interface GalleryPageProps {
  onSelectImage: (img: GalleryImage) => void;
}

export default function GalleryPage({ onSelectImage }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Products', 'Medical Equipment', 'Customers'];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category === activeCategory;
  });

  return (
    <div className="space-y-12 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          Store Photos & Inventory
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Manju Medical Hall Store Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Take a visual tour of our clean store premises, organized pharmaceutical racks, medical equipment counters, and cold-storage units.
        </p>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onSelectImage(img)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer shadow-md border border-slate-200 dark:border-slate-800 transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end opacity-95 group-hover:opacity-100 transition-opacity">
                <div className="space-y-1 text-white">
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-600 text-white px-2.5 py-0.5 rounded-full">
                    {img.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {img.description}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" /> Click to Zoom
                  </span>
                  <Camera className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

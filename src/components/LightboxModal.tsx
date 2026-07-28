import React from 'react';
import { X, ZoomIn, MapPin } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export default function LightboxModal({ image, onClose }: LightboxModalProps) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-0">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition backdrop-blur-md border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] flex items-center justify-center bg-black/60 overflow-hidden group">
          <img
            src={image.url}
            alt={image.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 right-3 bg-slate-900/80 text-emerald-400 text-xs px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1">
            <ZoomIn className="w-3.5 h-3.5" /> High Res Preview
          </div>
        </div>

        <div className="p-6 bg-slate-900 text-white space-y-2 border-t border-slate-800">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white">{image.title}</h3>
            <span className="text-xs uppercase tracking-wider font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-0.5 rounded-full">
              {image.category}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {image.description}
          </p>
        </div>

      </div>
    </div>
  );
}

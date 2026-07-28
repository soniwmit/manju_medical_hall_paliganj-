import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SEOHelmet from './components/SEOHelmet';

import WhatsAppOrderModal from './components/WhatsAppOrderModal';
import MedicineSearchModal from './components/MedicineSearchModal';
import AIAssistantModal from './components/AIAssistantModal';
import LightboxModal from './components/LightboxModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import { PageView, GalleryImage } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Modals
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [aiAssistantModalOpen, setAiAssistantModalOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Apply dark mode class to html document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenOrderModal = (medName?: string) => {
    setPrefilledMedicine(medName || '');
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between">
      
      {/* SEO & JSON-LD Injection */}
      <SEOHelmet currentPage={currentPage} />

      {/* Sticky Header Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenSearchModal={() => setSearchModalOpen(true)}
        onOpenAIAssistantModal={() => setAiAssistantModalOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setSearchModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenOrderModal={() => handleOpenOrderModal()} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onOpenOrderModal={handleOpenOrderModal} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onSelectImage={(img) => setLightboxImage(img)} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Floating Action Buttons (WhatsApp, Call, Back to top) */}
      <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Search Modal */}
      <MedicineSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectOrderMedicine={(medName) => handleOpenOrderModal(medName)}
      />

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={aiAssistantModalOpen}
        onClose={() => setAiAssistantModalOpen(false)}
        onOpenWhatsAppOrder={() => handleOpenOrderModal()}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </div>
  );
}

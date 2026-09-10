import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Preloader } from './components/common/Preloader';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/interactive/WhatsAppButton';
import { Chatbot } from './components/interactive/Chatbot';
import { ProjectModal } from './components/interactive/ProjectModal';
import { ProjectItem } from './types';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyCapsulePage } from './pages/WhyCapsulePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact#consultation';
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-black relative selection:bg-brand-copper selection:text-white">
        {/* Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* 1. Architectural Preloader Reveal */}
        <Preloader />

        {/* 2. Tactile Film Grain Texture Overlay */}
        <NoiseOverlay />

        {/* 3. Sticky Glassmorphism Header with 9 Nav Links */}
        <Header onOpenConsultation={scrollToConsultation} />

        {/* Main Content Area Routing */}
        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenConsultation={scrollToConsultation}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={scrollToConsultation} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={scrollToConsultation} />}
            />
            <Route
              path="/process"
              element={<ProcessPage onOpenConsultation={scrollToConsultation} />}
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onSelectProject={(p) => setSelectedProject(p)}
                  onOpenConsultation={scrollToConsultation}
                />
              }
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenConsultation={scrollToConsultation} />}
            />
            <Route
              path="/why-capsule"
              element={<WhyCapsulePage onOpenConsultation={scrollToConsultation} />}
            />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/contact"
              element={<ContactPage onOpenConsultation={scrollToConsultation} />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer with Routing Links */}
        <Footer onOpenConsultation={scrollToConsultation} />

        {/* Floating Interactive Utilities */}
        <WhatsAppButton />
        <Chatbot onOpenConsultationModal={scrollToConsultation} />

        {/* Project Lightbox Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsultation={() => {
            setSelectedProject(null);
            scrollToConsultation();
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;

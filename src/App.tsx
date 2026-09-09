import React, { useState } from 'react';
import { Preloader } from './components/common/Preloader';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { QuickServicesStrip } from './components/sections/QuickServicesStrip';
import { AboutUs } from './components/sections/AboutUs';
import { ServicesBento } from './components/sections/ServicesBento';
import { ModularKitchenFeature } from './components/sections/ModularKitchenFeature';
import { CarpentryFeature } from './components/sections/CarpentryFeature';
import { ExteriorFeature } from './components/sections/ExteriorFeature';
import { ProjectsPortfolio } from './components/sections/ProjectsPortfolio';
import { WhyCapsule } from './components/sections/WhyCapsule';
import { OurPromise } from './components/sections/OurPromise';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { ConsultationForm } from './components/sections/ConsultationForm';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { WhatsAppButton } from './components/interactive/WhatsAppButton';
import { Chatbot } from './components/interactive/Chatbot';
import { ProjectModal } from './components/interactive/ProjectModal';
import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuickService = (serviceId: string) => {
    let targetId = 'services';
    if (serviceId === 'construction') targetId = 'services';
    else if (serviceId === 'interiors') targetId = 'kitchen';
    else if (serviceId === 'exteriors') targetId = 'exteriors';

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-black relative selection:bg-brand-copper selection:text-white">
      {/* 1. Architectural Preloader Curtain Reveal */}
      <Preloader />

      {/* 2. Tactile Film Grain Texture Overlay */}
      <NoiseOverlay />

      {/* 3. Sticky Glassmorphism Header with Official Logo */}
      <Header onOpenConsultation={scrollToConsultation} />

      {/* Main Content Sections (14+ Vertical Sections) */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero with Kinetic Marquee & Craftsmanship Mask */}
        <Hero
          onOpenConsultation={scrollToConsultation}
          onExploreServices={scrollToServices}
        />

        {/* Section 2: Quick Services Navigation Strip */}
        <QuickServicesStrip onSelectService={handleSelectQuickService} />

        {/* Section 3: Who We Are / Built on Experience */}
        <AboutUs onOpenConsultation={scrollToConsultation} />

        {/* Section 4: What We Do / Comprehensive Bento Grid */}
        <ServicesBento onOpenConsultation={scrollToConsultation} />

        {/* Section 5: Customized Modular Kitchen Feature */}
        <ModularKitchenFeature onOpenConsultation={scrollToConsultation} />

        {/* Section 6: Expert Carpentry & Custom Wardrobes */}
        <CarpentryFeature onOpenConsultation={scrollToConsultation} />

        {/* Section 7: Exterior & Facade Engineering */}
        <ExteriorFeature onOpenConsultation={scrollToConsultation} />

        {/* Section 8: Projects Portfolio Gallery & Lightbox */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={scrollToConsultation}
        />

        {/* Section 9: Why Capsule / 4 Pillars with 3D Tilt */}
        <WhyCapsule />

        {/* Section 10: Our Promise / Your Space. Our Responsibility */}
        <OurPromise onOpenConsultation={scrollToConsultation} />

        {/* Section 11: Process Timeline / Smart Planning to Handover */}
        <ProcessTimeline onOpenConsultation={scrollToConsultation} />

        {/* Section 12: Lead Generation Consultation & Free Site Visit Form */}
        <ConsultationForm />

        {/* Section 13: FAQ Accordion */}
        <FAQSection />

        {/* Section 14: Contact & Bengaluru Map Locator */}
        <ContactSection onOpenConsultation={scrollToConsultation} />
      </main>

      {/* Footer with Original Logo & Socials */}
      <Footer onOpenConsultation={scrollToConsultation} />

      {/* Floating Utilities */}
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
  );
};

export default App;

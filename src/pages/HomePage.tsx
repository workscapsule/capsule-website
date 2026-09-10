import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { QuickServicesStrip } from '../components/sections/QuickServicesStrip';
import { EightCategoriesGrid } from '../components/sections/EightCategoriesGrid';
import { AboutUs } from '../components/sections/AboutUs';
import { ModularKitchenFeature } from '../components/sections/ModularKitchenFeature';
import { CarpentryFeature } from '../components/sections/CarpentryFeature';
import { ExteriorFeature } from '../components/sections/ExteriorFeature';
import { ProjectsPortfolio } from '../components/sections/ProjectsPortfolio';
import { WhyCapsule } from '../components/sections/WhyCapsule';
import { OurPromise } from '../components/sections/OurPromise';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ProjectItem } from '../types';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectProject,
}) => {
  const navigate = useNavigate();

  const handleSelectQuickService = (serviceId: string) => {
    navigate('/services');
  };

  return (
    <div className="w-full">
      {/* 1. Hero Multi-Banner Slider for 8 Service Categories */}
      <Hero
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. Quick Services Strip */}
      <QuickServicesStrip onSelectService={handleSelectQuickService} />

      {/* 3. Clearly Showcase All 8 Service Categories */}
      <EightCategoriesGrid onOpenConsultation={onOpenConsultation} />

      {/* 4. About Us Teaser Section */}
      <AboutUs onOpenConsultation={onOpenConsultation} />

      {/* 5. Modular Kitchen Spotlight */}
      <ModularKitchenFeature onOpenConsultation={onOpenConsultation} />

      {/* 6. Expert Carpentry Feature */}
      <CarpentryFeature onOpenConsultation={onOpenConsultation} />

      {/* 7. Exterior Elevations Feature */}
      <ExteriorFeature onOpenConsultation={onOpenConsultation} />

      {/* 8. Projects Portfolio Gallery */}
      <ProjectsPortfolio
        onSelectProject={onSelectProject}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 9. Why Capsule Pillars */}
      <WhyCapsule />

      {/* 10. Our Promise / Space Maker */}
      <OurPromise onOpenConsultation={onOpenConsultation} />

      {/* 11. 5-Stage Execution Process */}
      <ProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 12. Consultation Booking Form */}
      <ConsultationForm />

      {/* 13. FAQ Accordion */}
      <FAQSection />

      {/* 14. Contact & Map Location */}
      <ContactSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

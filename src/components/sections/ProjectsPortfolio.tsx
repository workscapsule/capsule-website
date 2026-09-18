import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { projectsData } from '../../data/projectsData';
import { ProjectCategory, ProjectItem } from '../../types';
import { MapPin, ArrowRight, Eye, Layers } from 'lucide-react';
import { withAssetVersion } from '../../utils/assets';

interface ProjectsPortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = ['ALL', 'CONSTRUCTION', 'INTERIORS', 'EXTERIORS'];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleProjectAction = (project: ProjectItem) => {
    if (project.ctaText === 'VIEW DESIGN' || project.ctaText === 'VIEW CONCEPT') {
      const galleryEl = document.getElementById('gallery');
      if (galleryEl) {
        galleryEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/gallery');
      }
      return;
    }
    onSelectProject(project);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <SectionHeader
            label="OUR WORK"
            title="IDEAS INTO"
            highlight="SPACES."
            subtitle="Explore the types of construction, interior and exterior work we undertake for homes, offices and commercial spaces."
            className="mb-0 max-w-2xl"
          />

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-brand-ivory border border-brand-border shrink-0 self-start lg:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-black text-white shadow-xs'
                    : 'text-brand-muted hover:text-brand-black hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectAction(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-ivory border border-brand-border hover:border-brand-copper transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-brand-black">
                <img
                  src={withAssetVersion(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-brand-black/80 text-white backdrop-blur-xs border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectAction(project);
                  }}
                  className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <span className="px-4 py-2 rounded-full bg-white text-brand-black text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-brand-copper" />
                    <span>
                      {project.ctaText
                        ? project.ctaText === 'VIEW CONCEPT'
                          ? 'View Concept'
                          : 'View Design'
                        : 'View Project'}
                    </span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {project.location ? (
                    <div className="flex items-center gap-1.5 text-xs text-brand-copper font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                  ) : null}

                  <h3 className="text-base font-bold uppercase tracking-wide text-brand-black group-hover:text-brand-copper transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-brand-muted mt-2 line-clamp-3 leading-relaxed">
                    {project.cardDescription || project.description}
                  </p>
                </div>

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectAction(project);
                  }}
                  className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold tracking-widest text-brand-black group-hover:text-brand-copper uppercase cursor-pointer"
                >
                  <span>{project.ctaText || 'VIEW PROJECT'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Section Bottom CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-ivory border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold font-display uppercase tracking-wide text-brand-black">
              Have an upcoming construction or interior work?
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              This is honest and still sounds professional.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-brand-copper hover:bg-brand-copperDark text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all shrink-0"
          >
            REQUEST FREE CONSULTATION
          </button>
        </div>

      </div>
    </section>
  );
};

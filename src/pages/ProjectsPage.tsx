import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Clock, Maximize2, Sparkles, Building2, LayoutGrid, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectItem, ProjectCategory } from '../types';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('ALL');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'ALL PROJECTS', value: 'ALL' },
    { label: 'CONSTRUCTION & CIVIL', value: 'CONSTRUCTION' },
    { label: 'TURNKEY INTERIORS', value: 'INTERIORS' },
    { label: 'EXTERIOR ELEVATIONS', value: 'EXTERIORS' },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>PROJECTS</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            PROVEN WORK IN <span className="text-brand-copper">BENGALURU</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Explore our completed residential villas, luxury turnkey apartments, bespoke modular kitchens, and contemporary commercial facades across Bengaluru.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-2xl p-3 shadow-lg border border-brand-border">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedFilter(cat.value)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${selectedFilter === cat.value
                    ? 'bg-brand-black text-white shadow-sm'
                    : 'text-brand-black/80 hover:text-brand-copper hover:bg-brand-cream'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <Link
            to="/gallery"
            className="px-4 py-2 rounded-xl border border-brand-copper/40 text-brand-copper hover:bg-brand-copper hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5"
          >
            <span>VIEW WORK GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border hover:border-brand-copper/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/11 w-full overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-black/85 text-white backdrop-blur-xs border border-white/20">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                    <span className="font-semibold">{project.location}</span>
                  </div>
                  {project.area && (
                    <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs text-[11px] font-mono">
                      {project.area}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black group-hover:text-brand-copper transition-colors uppercase leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-brand-border/60 mb-4">
                    {project.scope.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-brand-black/85 font-medium">
                        <CheckCircle className="w-3 h-3 text-brand-copper shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-copper group-hover:underline">
                    Click to View Full Project Specs
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-ivory border border-brand-border flex items-center justify-center text-brand-black group-hover:bg-brand-copper group-hover:text-white group-hover:border-brand-copper transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Site Visit Form */}
      <div className="mt-16">
        <ConsultationForm />
      </div>
    </div>
  );
};

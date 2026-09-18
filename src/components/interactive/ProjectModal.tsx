import React from 'react';
import { X, MapPin, Calendar, Maximize, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { withAssetVersion } from '../../utils/assets';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onConsultation }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-brand-ivory rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-brand-border z-10 my-auto animate-reveal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-brand-black/80 text-white flex items-center justify-center hover:bg-brand-copper transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-brand-black">
          <img
            src={withAssetVersion(project.image)}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 bg-brand-copper rounded inline-block mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white">
              {project.title}
            </h3>
            {project.location ? (
              <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-1">
                <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                <span>{project.location}</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          {(project.area || project.duration || project.clientType) ? (
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-brand-cream border border-brand-border text-center">
              {project.area && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block">Scope Area</span>
                  <span className="text-sm font-bold text-brand-black">{project.area}</span>
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block">Timeline</span>
                  <span className="text-sm font-bold text-brand-black">{project.duration}</span>
                </div>
              )}
              {project.clientType && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block">Space Type</span>
                  <span className="text-sm font-bold text-brand-black">{project.clientType}</span>
                </div>
              )}
            </div>
          ) : null}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-2">
              {project.conceptLabel || 'Project Overview'}
            </h4>
            <p className="text-sm text-brand-black/85 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Scope of Work */}
          {project.scope && project.scope.length > 0 ? (
            <div>
              <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
                {project.scopeLabel || 'Services & Execution Scope'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-brand-black/90">
                    <CheckCircle2 className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-brand-muted">
              {project.ctaPrompt || 'Want a similar space designed and executed in Bengaluru?'}
            </span>
            <button
              onClick={() => {
                onClose();
                onConsultation();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

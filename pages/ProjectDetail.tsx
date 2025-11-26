
import React, { useEffect } from 'react';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Button from '../components/Button';
import { Check } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const ProjectDetail: React.FC = () => {
  const { t } = useTranslations();
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const heroStyle = {
    background: `linear-gradient(45deg, ${project.color} 0%, #1F3B5C 100%)`
  };
  
  return (
    <div className="bg-white min-h-screen">
      {/* Project Hero */}
      <div className="relative py-24 md:py-32 text-white" style={heroStyle}>
        <div className="absolute inset-0 bg-grid-brand opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">{t(project.sector)}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4 font-display">{t(project.name)}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t(project.tagline)}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">{t('projectDetail.overview')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{t(project.overview)}</p>
            </div>

            {/* Arkliv's Role */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">{t('projectDetail.arklivsRole')}</h2>
              <ul className="space-y-4">
                {project.arklivsRole.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-white rounded-full p-0.5" style={{ backgroundColor: project.color }} />
                    </div>
                    <span className="text-slate-600">{t(role)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-200 sticky top-32">
              <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">{t('projectDetail.marketValue')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t(project.marketValue)}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center border-t border-gray-200 pt-12">
           <Button to="/portfolio" variant="outline">{t('cta.backToPortfolio')}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
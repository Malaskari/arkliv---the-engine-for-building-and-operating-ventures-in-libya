
import React from 'react';
import { PROJECTS } from '../constants';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Portfolio: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-brand-gray min-h-screen">
      <div className="bg-white py-24 md:py-32 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-6 font-display">{t('portfolio.header.title')}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('portfolio.header.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Link 
                to={`/portfolio/${project.id}`} 
                key={project.id} 
                className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 overflow-hidden hover:scale-105"
              >
                {/* Project color bar */}
                <div className="h-2 w-full" style={{ backgroundColor: project.color }}></div>
                
                <div className="p-8 flex-grow flex flex-col text-start">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-brand-navy font-display">{t(project.name)}</h3>
                    <span className="inline-block flex-shrink-0 mt-1 px-3 py-1 bg-brand-gray text-brand-blue text-xs font-bold rounded-full">
                      {t(project.sector)}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 flex-grow mb-8">{t(project.tagline)}</p>
                  
                  <div className="mt-auto">
                    <span 
                      className="font-bold text-sm flex items-center transition-all duration-300"
                      style={{ color: project.color }}
                    >
                      {t('portfolio.exploreVenture')} <ArrowRight className="ms-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform rtl:-scale-x-100 group-hover:rtl:-translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { IMPACT_METRICS } from '../constants';
import { Target } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Impact: React.FC = () => {
  const { t } = useTranslations();
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-gray py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-6 font-display">{t('impact.header.title')}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('impact.header.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold text-brand-blue mb-3 font-display">{metric.value}</div>
              <div className="text-lg font-bold text-brand-navy mb-1">{t(metric.label)}</div>
              <div className="text-sm text-slate-500">{t(metric.description as string)}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-blue rounded-xl p-12 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-brand opacity-10"></div>
          <div className="relative z-10">
            <Target className="h-12 w-12 text-brand-blue bg-white p-2 rounded-lg mx-auto mb-6"/>
            <h3 className="text-3xl font-bold text-white mb-4 font-display">{t('impact.commitment.title')}</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
             {t('impact.commitment.p1')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
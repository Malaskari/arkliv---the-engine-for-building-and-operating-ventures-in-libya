
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { METHODOLOGY_STEPS } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const HowWeWork: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-gray py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="methodology.header.title" 
            subtitle="methodology.header.subtitle"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 rtl:left-auto rtl:right-6 top-6 bottom-6 w-0.5 bg-gray-200 hidden md:block"></div>

          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.id} className="relative flex items-start gap-6 md:gap-12">
              
              {/* Icon Marker */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white z-10 flex items-center justify-center font-bold font-display text-lg shadow-md">
                  {step.id}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100 mt-2">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 font-display">{t(step.title)}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(step.description)}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-gray py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle title="methodology.whyItWorks.title" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {(t('methodology.whyItWorks.reasons') as unknown as string[]).map((reason: string) => (
                <div key={reason} className="bg-white p-6 rounded-lg text-center border border-gray-200">
                  <h4 className="font-semibold text-brand-navy">{reason.trim()}</h4>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
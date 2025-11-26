
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Services: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-gray py-24 md:py-32 border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionTitle 
            title="services.header.title"
            subtitle="services.header.subtitle"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-brand-gray p-8 rounded-lg border border-gray-200">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-4 bg-white rounded-lg text-brand-blue border border-gray-200 shadow-sm">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy font-display">{t(service.title)}</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t(service.description)}
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-brand-navy uppercase tracking-wider mb-4">{t('services.keyFeatures')}</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 relative overflow-hidden rounded-xl border border-gray-200 bg-brand-navy">
          <div className="absolute inset-0 bg-grid-brand opacity-10"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-display">{t('services.cta.title')}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('services.cta.p1')}
            </p>
            <Button to="/contact" variant="primary" className="bg-white text-brand-navy hover:bg-gray-100">
              {t('cta.startProject')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
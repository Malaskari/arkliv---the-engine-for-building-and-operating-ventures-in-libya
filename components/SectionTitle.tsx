
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'start';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center', light = false }) => {
  const { t } = useTranslations();
  
  const alignmentClass = align === 'center' ? 'text-center' : 'text-start';

  return (
    <div className={`mb-16 ${alignmentClass}`}>
      <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 font-display ${light ? 'text-white' : 'text-brand-blue'}`}>
        {t(title)}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${light ? 'text-gray-300' : 'text-slate-600'}`}>
          {t(subtitle)}
        </p>
      )}
      <div className={`mt-6 h-1 w-24 bg-brand-gold rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
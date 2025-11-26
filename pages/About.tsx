
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TEAM_MEMBERS } from '../constants';
import { Eye, Target, Layers, Building, Cpu, DollarSign, Settings } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const About: React.FC = () => {
  const { t } = useTranslations();
  const avatarColors = ['bg-brand-blue', 'bg-teal-600', 'bg-slate-700', 'bg-amber-600'];

  const roleIcons: { [key: string]: React.ElementType } = {
    CEO: Building,
    CTO: Cpu,
    CFO: DollarSign,
    COO: Settings,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100 bg-brand-gray text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-6 font-display">{t('about.header.title')}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.header.subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">{t('about.problem.title')}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.problem.p1')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg text-brand-blue shadow-sm mt-1"><Target className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">{t('about.mission.title')}</h3>
                  <p className="text-slate-600">{t('about.mission.p1')}</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-200">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg text-brand-blue shadow-sm mt-1"><Eye className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">{t('about.vision.title')}</h3>
                  <p className="text-slate-600">{t('about.vision.p1')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Team */}
        <div className="mb-24">
          <SectionTitle 
            title="about.team.title"
            subtitle="about.team.subtitle"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => {
              const Icon = roleIcons[member.roleKey];
              return (
                <div key={member.id} className="group text-center bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="py-10 bg-brand-gray/60 transition-colors duration-300 group-hover:bg-brand-gray">
                    <div className={`w-24 h-24 mx-auto ${avatarColors[index % avatarColors.length]} text-white rounded-full flex items-center justify-center ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                      {Icon && <Icon className="h-12 w-12" />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy font-display">{t(member.name)}</h3>
                    <p className="text-brand-gold font-semibold text-sm mb-3">{t(member.role)}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(member.bio)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arkan Ecosystem */}
        <div className="bg-brand-navy rounded-xl p-12 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-brand opacity-10"></div>
          <div className="relative z-10">
            <Layers className="h-12 w-12 text-brand-blue bg-white p-2 rounded-lg mx-auto mb-6"/>
            <h3 className="text-3xl font-bold text-white mb-4 font-display">{t('about.ecosystem.title')}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.ecosystem.p1')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
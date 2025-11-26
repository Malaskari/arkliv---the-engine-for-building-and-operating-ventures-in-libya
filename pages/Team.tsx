
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TEAM_MEMBERS } from '../constants';
import { Building, Cpu, DollarSign, Settings } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Team: React.FC = () => {
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
      <div className="bg-brand-gray py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="team.header.title" 
            subtitle="team.header.subtitle"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const Icon = roleIcons[member.roleKey];
            return (
              <div key={member.id} className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center overflow-hidden">
                <div className="py-10 bg-brand-gray/60 transition-colors duration-300 group-hover:bg-brand-gray">
                  <div className={`w-24 h-24 mx-auto ${avatarColors[index % avatarColors.length]} text-white rounded-full flex items-center justify-center ring-4 ring-white shadow-md`}>
                    {Icon && <Icon className="h-12 w-12" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy font-display mb-1">{t(member.name)}</h3>
                  <p className="text-brand-gold font-medium text-sm mb-4">{t(member.role)}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(member.bio)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
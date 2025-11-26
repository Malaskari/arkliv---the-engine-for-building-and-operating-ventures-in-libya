
import React from 'react';
import { ArrowRight, CheckCircle, Briefcase, Users } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { HOME_SERVICES, PROJECTS } from '../constants';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const Home: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-grid-brand opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-display text-brand-blue">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <p className="mt-6 text-md text-slate-500 max-w-2xl mx-auto">
            {t('home.hero.paragraph')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="primary">
              {t('cta.startProjectNow')}
            </Button>
            <Button to="/portfolio" variant="outline">
              {t('cta.explorePortfolio')}
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-brand-gray border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="text-center md:text-start">
               <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display">{t('home.whoWeAre.title')}</h2>
               <p className="text-lg text-slate-600 mb-6">
                {t('home.whoWeAre.p1')}
               </p>
               <Link to="/about" className="text-brand-blue font-semibold hover:text-brand-navy inline-flex items-center text-md transition-colors group rtl:flex-row-reverse">
                  {t('home.whoWeAre.link')} <ArrowRight className="ms-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform rtl:-scale-x-100 group-hover:rtl:-translate-x-1" />
                </Link>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <Users className="h-8 w-8 mx-auto text-brand-blue mb-2" />
                  <h4 className="font-semibold text-brand-navy">{t('home.whoWeAre.card1')}</h4>
                </div>
                 <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <Briefcase className="h-8 w-8 mx-auto text-brand-blue mb-2" />
                  <h4 className="font-semibold text-brand-navy">{t('home.whoWeAre.card2')}</h4>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* What We Do (Services) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="home.whatWeDo.title" subtitle="home.whatWeDo.subtitle" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICES.slice(0,3).map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-100">
                <div className="p-3 bg-brand-gray rounded-lg w-fit text-brand-blue mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">{t(service.title)}</h3>
                <ul className="space-y-3">
                  {service.points.slice(0,3).map(point => (
                     <li key={point} className="flex items-start gap-3 text-slate-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{t(point)}</span>
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button to="/services" variant="secondary">{t('cta.exploreServices')}</Button>
          </div>
        </div>
      </section>

      {/* Why Arkliv */}
       <section className="py-20 bg-brand-gray border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="home.whyArkliv.title" align="center" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {(t('home.whyArkliv.reasons') as unknown as string[]).map((reason: string, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-navy">{reason.trim()}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="home.portfolio.title" subtitle="home.portfolio.subtitle" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Link
                to={`/portfolio/${project.id}`}
                key={project.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 overflow-hidden transform hover:-translate-y-2 flex flex-col"
              >
                {/* Header Part */}
                <div className={`p-8 bg-gradient-to-br ${project.logo} text-white text-start`}>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3">
                        {t(project.sector)}
                    </span>
                    <h3 className="text-3xl font-bold font-display">{t(project.name)}</h3>
                </div>

                {/* Content Part */}
                <div className="p-8 flex-grow flex flex-col text-start">
                    <p className="text-slate-600 flex-grow mb-6">{t(project.tagline)}</p>
                    <span
                        className="font-bold text-sm flex items-center transition-all duration-300"
                        style={{ color: project.color }}
                    >
                        {t('home.portfolio.viewProject')} <ArrowRight className="ms-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform rtl:-scale-x-100 group-hover:rtl:-translate-x-1" />
                    </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
             <Button to="/portfolio" variant="primary">{t('cta.viewFullPortfolio')}</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-blue">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">{t('home.finalCta.title')}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t('home.finalCta.subtitle')}
          </p>
          <Button to="/contact" variant="white">{t('cta.startProjectNow')}</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
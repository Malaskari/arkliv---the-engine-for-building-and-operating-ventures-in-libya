
import React, { useState, useEffect } from 'react';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Globe, Linkedin, Twitter, Mail, MapPin, Phone, Layers } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { useTranslations } from '../hooks/useTranslations';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage, t } = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleLanguage = () => {
    setLanguage(lang => lang === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-navy bg-white selection:bg-brand-blue/20 selection:text-brand-navy">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm' 
            : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded bg-brand-blue text-white shadow-sm`}>
                <Layers className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-blue font-display">
                ARKLIV
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      isActive 
                        ? 'text-brand-blue border-b-2 border-brand-blue pb-1' 
                        : 'text-gray-500 hover:text-brand-blue'
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
               <Button to="/contact" variant="primary" className="px-5 py-2.5 text-sm">
                {t('cta.startProject')}
               </Button>
               <button onClick={toggleLanguage} className="p-2 rounded-md text-gray-500 hover:bg-brand-gray hover:text-brand-blue transition-colors">
                  <Globe className="h-5 w-5" />
               </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={toggleLanguage} className="p-2 rounded-md text-gray-500 hover:bg-brand-gray hover:text-brand-blue transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-brand-blue hover:bg-brand-gray"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive ? 'bg-brand-gray text-brand-blue' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button to="/contact" variant="primary" className="w-full">{t('cta.startProject')}</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[84px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy pt-16 pb-8 border-t-4 border-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-white text-brand-navy rounded shadow-sm">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-white">ARKLIV</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('footer.tagline')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-display">{t('footer.company')}</h3>
              <ul className="space-y-3">
                <li><NavLink to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">{t('nav.about')}</NavLink></li>
                <li><NavLink to="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">{t('nav.portfolio')}</NavLink></li>
                <li><NavLink to="/methodology" className="text-gray-400 hover:text-white text-sm transition-colors">{t('nav.howWeWork')}</NavLink></li>
                <li><NavLink to="/impact" className="text-gray-400 hover:text-white text-sm transition-colors">{t('nav.impact')}</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-display">{t('footer.services')}</h3>
              <ul className="space-y-3">
                <li><NavLink to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{t('services.ventureBuilding.title')}</NavLink></li>
                <li><NavLink to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{t('services.operationsPartner.title')}</NavLink></li>
                <li><NavLink to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{t('services.techDevelopment.title')}</NavLink></li>
                <li><NavLink to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{t('services.growth.title')}</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-display">{t('footer.contact')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-gray-500" />
                  <span>{t('contact.info.addressValue')}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  <span>{t('contact.info.emailValue')}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  <span dir="ltr">{t('contact.info.phoneValue')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Arkliv. {t('footer.rights')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Contact: React.FC = () => {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'contact.form.options.newVenture',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will be in touch shortly.');
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'contact.form.options.newVenture',
      message: ''
    });
  };

  const projectTypes = [
    'contact.form.options.newVenture',
    'contact.form.options.existingBusiness',
    'contact.form.options.techDevelopment',
    'contact.form.options.growth',
    'contact.form.options.investment',
  ];

  return (
    <div className="bg-white min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="contact.header.title" subtitle="contact.header.subtitle" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 font-display">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-navy">{t('contact.info.location')}</h4>
                    <p className="text-slate-600">{t('contact.info.addressValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-navy">{t('contact.info.email')}</h4>
                    <p className="text-slate-600">{t('contact.info.emailValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-navy">{t('contact.info.phone')}</h4>
                    <p className="text-slate-600" dir="ltr">{t('contact.info.phoneValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 font-display">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.name')}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder={t('contact.form.placeholders.name')} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.company')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder={t('contact.form.placeholders.company')} value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.email')}</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder={t('contact.form.placeholders.email')} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.phone')}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder={t('contact.form.placeholders.phone')} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.projectType')}</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})}>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{t(type)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.labels.message')}</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-brand-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder={t('contact.form.placeholders.message')} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full !py-4">
                {t('cta.startProjectNow')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
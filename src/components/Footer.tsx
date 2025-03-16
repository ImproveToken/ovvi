
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white pt-16 pb-8">
      <div className="ovvi-container">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-10 w-10 relative rounded-md bg-ovvi overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-2xl">O</div>
            </div>
            <span className="text-2xl font-display font-semibold tracking-tight">OVVI</span>
          </div>
          
          <p className="text-gray-600 mb-6 text-center">
            {t('footer.description')}
          </p>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex justify-center">
          <div className="text-gray-500">
            © {currentYear} OVVI. {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

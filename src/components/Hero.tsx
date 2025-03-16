
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-36 pb-24 md:pt-44 md:pb-32 section-padding bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-ovvi-100 blur-3xl opacity-30 -z-10"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-ovvi-50 blur-3xl opacity-20 -z-10"></div>

      <div className="ovvi-container">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-ovvi-700 bg-ovvi-50 rounded-full">
            {t('hero.tagline')}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-8">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-ovvi rounded-md hover:bg-ovvi-600 transition-colors shadow-sm shadow-ovvi/20"
            >
              {t('hero.cta')}
              <ChevronRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { CheckCircle, Truck, UserCheck, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  // Features data
  const features = [
    {
      icon: <CheckCircle size={48} className="text-ovvi mb-4" />,
      title: t('features.quality.title'),
      description: t('features.quality.description')
    },
    {
      icon: <Truck size={48} className="text-ovvi mb-4" />,
      title: t('features.logistics.title'),
      description: t('features.logistics.description')
    },
    {
      icon: <UserCheck size={48} className="text-ovvi mb-4" />,
      title: t('features.support.title'),
      description: t('features.support.description')
    },
    {
      icon: <DollarSign size={48} className="text-ovvi mb-4" />,
      title: t('features.price.title'),
      description: t('features.price.description')
    }
  ];

  return (
    <section id="services" className="section-padding py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-ovvi-50 blur-3xl opacity-30 -z-10"></div>
      
      <div className="ovvi-container">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium text-ovvi-700 bg-ovvi-50 rounded-full">
            {t('features.section')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            {t('features.title')}
          </h2>
          <p className="text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl text-center slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

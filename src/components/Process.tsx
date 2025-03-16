
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Process = () => {
  const { t } = useLanguage();

  const processes = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.description')
    },
    {
      number: "02",
      title: t('process.step2.title'),
      description: t('process.step2.description')
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.description')
    },
    {
      number: "04",
      title: t('process.step4.title'),
      description: t('process.step4.description')
    }
  ];

  return (
    <section 
      id="process" 
      className="section-padding bg-gray-50 py-24 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-ovvi-100 blur-3xl opacity-30 -z-10"></div>
      
      <div className="ovvi-container">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium text-ovvi-700 bg-ovvi-50 rounded-full">
            {t('process.section')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            {t('process.title')}
          </h2>
          <p className="text-gray-600">
            {t('process.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="slide-up overflow-hidden border-none shadow-md" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex">
                <div className="bg-ovvi w-24 flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-white">{process.number}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-medium mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

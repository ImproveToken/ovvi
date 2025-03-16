
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-1 text-sm font-medium text-gray-700">
        <span>{t('nav.language')}: </span>
        <div className="flex space-x-2 ml-2">
          <button 
            className={`text-sm px-2 py-1 rounded ${language === 'ru' ? 'bg-ovvi-50 text-ovvi' : 'hover:bg-gray-100'}`}
            onClick={() => setLanguage('ru')}
          >
            RU
          </button>
          <button 
            className={`text-sm px-2 py-1 rounded ${language === 'kk' ? 'bg-ovvi-50 text-ovvi' : 'hover:bg-gray-100'}`}
            onClick={() => setLanguage('kk')}
          >
            KK
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

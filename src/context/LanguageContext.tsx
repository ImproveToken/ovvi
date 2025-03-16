
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'kk';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  ru: {
    // Navbar
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.contact': 'Контакты',
    'nav.language': 'Язык',
    
    // Hero
    'hero.tagline': 'Прямые закупки из Китая',
    'hero.title': 'Профессиональный сервис импорта из Китая',
    'hero.description': 'OVVI упрощает процесс прямых закупок из Китая, предоставляя полный комплекс услуг от поиска поставщиков до доставки товаров.',
    'hero.cta': 'Начать сотрудничество',
    
    // Features
    'features.section': 'Наши преимущества',
    'features.title': 'Почему выбирают нас',
    'features.subtitle': 'Мы предлагаем полный комплекс услуг для успешного импорта товаров из Китая, обеспечивая высокое качество и надежность на каждом этапе.',
    'features.quality.title': 'Гарантия качества',
    'features.quality.description': 'Мы проводим строгий контроль качества всех товаров перед отправкой.',
    'features.logistics.title': 'Эффективная логистика',
    'features.logistics.description': 'Быстрая и надежная доставка товаров из Китая в любую точку мира.',
    'features.support.title': 'Персональный менеджер',
    'features.support.description': 'Выделенный специалист будет сопровождать ваш проект на всех этапах.',
    'features.price.title': 'Конкурентные цены',
    'features.price.description': 'Прямые контакты с производителями позволяют нам предлагать лучшие цены.',
    
    // Process
    'process.section': 'Как это работает',
    'process.title': 'Наш процесс работы',
    'process.description': 'Мы разработали эффективный процесс сотрудничества, который обеспечивает высокое качество результата',
    'process.step1.title': 'Консультация',
    'process.step1.description': 'Мы изучаем ваши потребности, бюджет и сроки для создания индивидуального плана закупок.',
    'process.step2.title': 'Поиск поставщиков',
    'process.step2.description': 'Наша команда находит лучших производителей в Китае для ваших конкретных требований.',
    'process.step3.title': 'Контроль качества',
    'process.step3.description': 'Тщательные процессы проверки гарантируют, что продукция соответствует вашим точным спецификациям.',
    'process.step4.title': 'Логистика',
    'process.step4.description': 'Мы занимаемся доставкой, таможенным оформлением и доставкой в указанное вами место.',
    
    // Footer
    'footer.description': 'OVVI соединяет бизнес с китайскими производителями, предлагая полный сервис прямых закупок, который упрощает глобальный сорсинг.',
    'footer.copyright': 'Все права защищены.',
    'footer.terms': 'Условия использования',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.support': 'Поддержка',
  },
  kk: {
    // Navbar
    'nav.about': 'Біз туралы',
    'nav.services': 'Қызметтер',
    'nav.process': 'Процесс',
    'nav.contact': 'Байланыс',
    'nav.language': 'Тіл',
    
    // Hero
    'hero.tagline': 'Қытайдан тікелей сатып алу',
    'hero.title': 'Қытайдан импорттаудың кәсіби қызметі',
    'hero.description': 'OVVI Қытайдан тікелей сатып алу процесін жеңілдетеді, жеткізушілерді іздеуден бастап тауарларды жеткізуге дейінгі қызметтердің толық кешенін ұсынады.',
    'hero.cta': 'Ынтымақтастықты бастау',
    
    // Features
    'features.section': 'Біздің артықшылықтарымыз',
    'features.title': 'Неліктен бізді таңдайды',
    'features.subtitle': 'Біз Қытайдан тауарларды сәтті импорттау үшін қызметтердің толық кешенін ұсынамыз, әр кезеңде жоғары сапа мен сенімділікті қамтамасыз етеміз.',
    'features.quality.title': 'Сапа кепілдігі',
    'features.quality.description': 'Біз жіберу алдында барлық тауарлардың сапасын қатаң бақылаймыз.',
    'features.logistics.title': 'Тиімді логистика',
    'features.logistics.description': 'Қытайдан әлемнің кез келген нүктесіне тауарларды жылдам және сенімді жеткізу.',
    'features.support.title': 'Жеке менеджер',
    'features.support.description': 'Арнайы маман сіздің жобаңызды барлық кезеңдерде сүйемелдейді.',
    'features.price.title': 'Бәсекеге қабілетті бағалар',
    'features.price.description': 'Өндірушілермен тікелей байланыс бізге ең жақсы бағаларды ұсынуға мүмкіндік береді.',
    
    // Process
    'process.section': 'Бұл қалай жұмыс істейді',
    'process.title': 'Біздің жұмыс процесіміз',
    'process.description': 'Біз нәтиженің жоғары сапасын қамтамасыз ететін тиімді ынтымақтастық процесін әзірледік',
    'process.step1.title': 'Кеңес беру',
    'process.step1.description': 'Біз жеке сатып алу жоспарын жасау үшін сіздің қажеттіліктеріңізді, бюджетіңізді және мерзімдеріңізді зерттейміз.',
    'process.step2.title': 'Жеткізушілерді іздеу',
    'process.step2.description': 'Біздің команда сіздің нақты талаптарыңыз үшін Қытайдағы ең жақсы өндірушілерді табады.',
    'process.step3.title': 'Сапаны бақылау',
    'process.step3.description': 'Мұқият тексеру процестері өнімнің сіздің нақты сипаттамаларыңызға сәйкес келетініне кепілдік береді.',
    'process.step4.title': 'Логистика',
    'process.step4.description': 'Біз жеткізумен, кедендік рәсімдеумен және сіз көрсеткен жерге жеткізумен айналысамыз.',
    
    // Footer
    'footer.description': 'OVVI бизнесті қытайлық өндірушілермен байланыстырады, жаһандық сорсингті жеңілдететін тікелей сатып алудың толық қызметін ұсынады.',
    'footer.copyright': 'Барлық құқықтар қорғалған.',
    'footer.terms': 'Қолдану шарттары',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.support': 'Қолдау',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

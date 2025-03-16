
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const translations = {
    ru: {
      error: "404",
      message: "Страница, которую вы ищете, не существует",
      button: "Вернуться на главную"
    },
    kk: {
      error: "404",
      message: "Сіз іздеген бет жоқ",
      button: "Басты бетке оралу"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-7xl font-display font-medium text-ovvi mb-4">{t.error}</h1>
        <p className="text-xl text-gray-600 mb-8">{t.message}</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-ovvi rounded-md hover:bg-ovvi-600 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          {t.button}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

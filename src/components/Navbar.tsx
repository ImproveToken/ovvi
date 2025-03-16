
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="ovvi-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="h-10 w-10 relative rounded-md bg-ovvi overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-2xl">O</div>
            </div>
            <span className="text-xl font-display font-semibold tracking-tight">OVVI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors">
              {t('nav.about')}
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors">
              {t('nav.services')}
            </a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors">
              {t('nav.process')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#process"
                className="text-sm font-medium text-gray-700 hover:text-ovvi transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.process')}
              </a>
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

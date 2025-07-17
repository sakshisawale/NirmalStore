import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' }
  ];

  const languages = [
    { code: 'en' as Language, name: 'English', native: 'English' },
    { code: 'mr' as Language, name: 'Marathi', native: 'मराठी' },
    { code: 'hi' as Language, name: 'Hindi', native: 'हिंदी' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };
  return (
    <header className="bg-gradient-to-r from-emerald-50 via-white to-lime-50 shadow-lg sticky top-0 z-50 border-b-2 border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-emerald-400 to-green-500 p-2.5 rounded-xl group-hover:from-emerald-500 group-hover:to-green-600 transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-105">
              <Sprout className="h-7 w-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">निर्मल कृषी सेवा केंद्र</h1>
              <p className="text-xs text-emerald-600 font-medium">Nirmal Krushi Seva Kendra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                  isActivePath(item.path)
                    ? 'text-emerald-700 bg-emerald-100 shadow-sm'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {t(item.key)}
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-emerald-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(lang => lang.code === language)?.native}</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-emerald-100 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-emerald-50 text-emerald-700 font-semibold'
                          : 'text-gray-700 hover:bg-lime-50 hover:text-emerald-600'
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-emerald-200 bg-gradient-to-r from-emerald-50 to-lime-50">
            <div className="px-2 pt-3 pb-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-emerald-700 bg-emerald-100 shadow-sm'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-100'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Language Options */}
              <div className="pt-2 border-t border-emerald-200">
                <p className="px-4 py-2 text-sm font-medium text-emerald-700">Language / भाषा</p>
                <div className="grid grid-cols-3 gap-2 px-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        language === lang.code
                          ? 'bg-emerald-500 text-white shadow-md'
                          : 'bg-white text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
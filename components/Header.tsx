
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { SunIcon, MoonIcon, GlobeIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary dark:text-blue-400'
        : 'hover:text-primary dark:hover:text-blue-400'
    }`;

  const navLinks = (
    <>
      <NavLink to="/books" className={navLinkClass}>{t('books')}</NavLink>
      <NavLink to="/about" className={navLinkClass}>{t('aboutAuthor')}</NavLink>
      <NavLink to="/contact" className={navLinkClass}>{t('contact')}</NavLink>
    </>
  );

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold font-serif text-gray-800 dark:text-white">
              Celso Jung
            </NavLink>
            <div className="hidden md:block ml-10">{navLinks}</div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <GlobeIcon className="w-5 h-5" />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                  <button onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>EN</button>
                  <button onClick={() => { setLanguage('pt'); setIsLangMenuOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${language === 'pt' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>PT</button>
                </div>
              )}
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{t('login')}</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors">{t('register')}</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 flex items-center justify-between">
            <div>
                 <button onClick={() => {setLanguage('en'); setIsMenuOpen(false);}} className={`px-3 py-2 rounded-md text-sm font-medium ${language === 'en' ? 'text-primary' : ''}`}>EN</button>
                 <span className="text-gray-400">|</span>
                 <button onClick={() => {setLanguage('pt'); setIsMenuOpen(false);}} className={`px-3 py-2 rounded-md text-sm font-medium ${language === 'pt' ? 'text-primary' : ''}`}>PT</button>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

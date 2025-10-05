
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/books" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('books')}</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('aboutAuthor')}</Link></li>
              <li><Link to="/user/dashboard" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('readerDashboard')}</Link></li>
              <li><Link to="/admin/dashboard" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{t('adminDashboard')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('resources')}</h3>
             <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('getInTouch')}</h3>
             <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">contact@celsojung.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-serif text-gray-800 dark:text-white">Celso Jung</h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">Inspiring works on spirituality, innovation, and personal transformation.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Celso Jung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

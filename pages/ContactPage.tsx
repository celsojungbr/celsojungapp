
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    alert('Thank you for your message!');
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">{t('getInTouch')}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t('contactIntro')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('name')}</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('email')}</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('subject')}</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('message')}</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {t('sendMessage')}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">{t('contactInformation')}</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-primary dark:text-blue-400 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3">contact@celsojung.com</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

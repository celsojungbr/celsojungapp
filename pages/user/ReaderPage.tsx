
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockBooks } from '../../services/mockData';
import { useTheme } from '../../contexts/ThemeContext';
import { SunIcon, MoonIcon, XIcon } from '../../components/icons';
import { useLanguage } from '../../contexts/LanguageContext';

const ReaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);

  const book = mockBooks.find((b) => b.id === Number(id));
  const pages = book ? book.content.split('\n\n') : [];

  useEffect(() => {
    // Hide scrollbar on reader page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!book) {
    return <div>Book not found</div>;
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isPreview = currentPage < 10;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="w-1/3">
          <button onClick={() => navigate(`/books/${id}`)} className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400">
            <XIcon className="w-5 h-5"/>
            <span className="hidden md:inline">{t('exitReader')}</span>
          </button>
        </div>
        <div className="w-1/3 text-center">
            <h1 className="font-semibold truncate">{book.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Page {currentPage + 1} of {pages.length}</p>
        </div>
        <div className="w-1/3 flex items-center justify-end gap-4">
            <div className="items-center hidden md:flex">
                <button onClick={() => setZoom(z => Math.max(z - 10, 50))} className="px-2">-</button>
                <span className="text-sm w-12 text-center">{zoom}%</span>
                <button onClick={() => setZoom(z => Math.min(z + 10, 200))} className="px-2">+</button>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="max-w-3xl w-full h-full flex flex-col justify-center relative">
          {!isPreview && (
              <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20">
                  <h2 className="text-2xl font-bold font-serif mb-4">Preview Ended</h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">To continue reading, please purchase the book or subscribe.</p>
                  <div className="flex gap-4">
                       <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Purchase Book</button>
                       <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md" onClick={() => setCurrentPage(9)}>Go to Last Page</button>
                  </div>
              </div>
          )}
          <div 
            className="font-serif leading-loose text-gray-800 dark:text-gray-200 transition-all duration-300"
            style={{ fontSize: `${zoom / 100 * 1.25}rem` }}
           >
            {pages[currentPage]}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <footer className="flex-shrink-0 flex items-center justify-between p-4 z-10">
        <button onClick={prevPage} disabled={currentPage === 0} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50">Previous</button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1 || !isPreview} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50">Next</button>
      </footer>
    </div>
  );
};

export default ReaderPage;

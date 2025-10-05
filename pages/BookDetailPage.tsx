
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../services/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const book = mockBooks.find((b) => b.id === Number(id));

  if (!book) {
    return <div className="text-center py-20">Book not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sticky top-24">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold font-serif text-gray-900 dark:text-white">{book.title}</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-2">by {book.author}</p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              {t('buyPrintBook')}
            </a>
            <Link
              to={`/read/${book.id}`}
              className="w-full text-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {t('readDigitalVersion')}
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold font-serif">{t('aboutThisBook')}</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-serif">
              {book.longDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

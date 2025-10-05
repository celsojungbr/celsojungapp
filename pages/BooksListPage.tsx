import React from 'react';
import BookCard from '../components/BookCard';
import { mockBooks } from '../services/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const BooksListPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">{t('books')}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Explore the collection of works by Celso Jung.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
        {mockBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksListPage;

import React from 'react';
import { mockBooks } from '../../services/mockData';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const MyLibraryPage: React.FC = () => {
    const { t } = useLanguage();
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('myLibrary')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockBooks.map(book => (
          <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
            <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover rounded mb-4"/>
            <h2 className="font-semibold text-lg">{book.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">by {book.author}</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-4">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: `${Math.random() * 100}%`}}></div>
            </div>
            <Link to={`/read/${book.id}`} className="mt-4 text-center w-full px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary-dark">
              Read Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibraryPage;

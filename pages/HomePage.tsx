
import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { mockBooks } from '../services/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featuredBook = mockBooks[0];

  return (
    <div className="space-y-24 my-16">
      {/* Hero Section */}
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">Celso Jung</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Inspirational works on spirituality, innovation, and personal transformation.
        </p>
      </div>

      {/* Featured Books Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">{t('featuredBooks')}</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {mockBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">{t('awardsAndRecognition')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
            {featuredBook.awards.map((award, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-lg">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Media Section */}
       <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">{t('inTheMedia')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {featuredBook.mediaMentions.map((mention, index) => (
               <a key={index} href={mention.link} className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                {mention.source}
               </a>
            ))}
          </div>
        </div>
       </section>
    </div>
  );
};

export default HomePage;

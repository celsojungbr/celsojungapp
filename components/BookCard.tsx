
import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden aspect-w-2 aspect-h-3">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 dark:text-gray-200">
              <Link to={`/books/${book.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {book.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white mt-2">{book.shortDescription}</p>
    </div>
  );
};

export default BookCard;

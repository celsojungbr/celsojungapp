import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockBooks } from '../../services/mockData';
import { Link } from 'react-router-dom';

const AdminBooksPage: React.FC = () => {
  const { t } = useLanguage();

  const handleDelete = (bookId: number, bookTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${bookTitle}"? This action cannot be undone.`)) {
      // In a real app, you would make an API call to delete the book.
      // Here, we'll just log it and show an alert.
      console.log(`Deleting book with ID: ${bookId}`);
      alert(`Book "${bookTitle}" has been deleted.`);
      // You would also need to re-fetch the books list or remove it from the local state.
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-serif">{t('manageBooks')}</h1>
        <Link to="/admin/books/new" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          {t('addBook')}
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cover</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {mockBooks.map(book => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap"><img src={book.coverImage} alt={book.title} className="w-10 h-16 object-cover rounded"/></td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link to={`/admin/books/edit/${book.id}`} className="text-primary dark:text-blue-400 hover:underline">Edit</Link>
                  <button onClick={() => handleDelete(book.id, book.title)} className="text-red-600 dark:text-red-400 hover:underline ml-4">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooksPage;

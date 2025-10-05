
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockBooks } from '../../services/mockData';

const AdminBooksPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-serif">{t('manageBooks')}</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Add New Book</button>
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
                  <a href="#" className="text-primary dark:text-blue-400 hover:underline">Edit</a>
                  <a href="#" className="text-red-600 dark:text-red-400 hover:underline ml-4">Delete</a>
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

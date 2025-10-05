
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminDashboardPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('adminDashboard')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Books</h2>
          <p className="text-3xl font-bold mt-1">3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscribers</h2>
          <p className="text-3xl font-bold mt-1">1,204</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Revenue</h2>
          <p className="text-3xl font-bold mt-1">$1,530</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Single Purchases (Month)</h2>
          <p className="text-3xl font-bold mt-1">82</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

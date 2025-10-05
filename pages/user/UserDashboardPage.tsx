
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockBooks } from '../../services/mockData';
import { Link } from 'react-router-dom';

const UserDashboardPage: React.FC = () => {
  const { t } = useLanguage();
  const recentBook = mockBooks[0];

  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">Welcome back, Reader!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Continue Reading</h2>
          <div className="flex gap-4">
            <img src={recentBook.coverImage} alt={recentBook.title} className="w-24 h-36 object-cover rounded"/>
            <div>
              <h3 className="font-semibold">{recentBook.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">by {recentBook.author}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
              </div>
              <p className="text-sm mt-1">45% complete</p>
              <Link to={`/read/${recentBook.id}`} className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary-dark">
                Jump Back In
              </Link>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">{t('subscriptions')}</h2>
          <p>Your current plan: <strong>Annual Subscriber</strong></p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Renews on: Dec 31, {new Date().getFullYear()}</p>
          <Link to="/user/subscriptions" className="inline-block mt-4 text-primary dark:text-blue-400 hover:underline">Manage Subscription</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;

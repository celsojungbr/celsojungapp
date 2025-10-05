
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const UserSettingsPage: React.FC = () => {
    const { t } = useLanguage();
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('settings')}</h1>
      <div className="max-w-2xl space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" defaultValue="John Doe" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
            </div>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Save Changes</button>
          </form>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Change Password</h2>
           <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input type="password"  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input type="password"  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
            </div>
             <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
            </div>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const UserSubscriptionsPage: React.FC = () => {
    const { t } = useLanguage();
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('subscriptions')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-2 border-primary rounded-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold">Annual Plan</h2>
            <p className="text-gray-500 dark:text-gray-400">Current Plan</p>
            <p className="my-4 text-4xl font-bold">$99<span className="text-base font-normal">/year</span></p>
            <ul className="space-y-2 mb-6">
                <li>Unlimited access to all books</li>
                <li>Early access to new releases</li>
                <li>Cancel anytime</li>
            </ul>
            <button className="mt-auto w-full py-2 px-4 bg-primary text-white rounded-md font-semibold">Currently Active</button>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold">Monthly Plan</h2>
            <p className="text-gray-500 dark:text-gray-400">Access everything</p>
            <p className="my-4 text-4xl font-bold">$10<span className="text-base font-normal">/month</span></p>
            <ul className="space-y-2 mb-6">
                <li>Unlimited access to all books</li>
                <li>Early access to new releases</li>
                <li>Cancel anytime</li>
            </ul>
            <button className="mt-auto w-full py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md font-semibold">Switch to Monthly</button>
          </div>
      </div>
    </div>
  );
};

export default UserSubscriptionsPage;

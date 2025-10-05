
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminDashboardLayout: React.FC = () => {
    const { t } = useLanguage();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <NavLink to="/" className="text-xl font-bold font-serif text-gray-800 dark:text-white">Celso Jung</NavLink>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('adminDashboard')}</p>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <NavLink to="/admin/dashboard" className={navLinkClass} end>{t('adminDashboard')}</NavLink>
            <NavLink to="/admin/books" className={navLinkClass}>{t('manageBooks')}</NavLink>
            <NavLink to="/admin/upload" className={navLinkClass}>{t('uploadBook')}</NavLink>
            <NavLink to="/admin/tools" className={navLinkClass}>{t('aiTools')}</NavLink>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;

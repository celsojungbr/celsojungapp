
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminToolsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('aiTools')}</h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Content Transformation Pipeline</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Use these tools to manage translations and generate new authorial versions based on imported books.</p>
        
        <div className="space-y-6">
          {/* Step 1: Translation */}
          <div>
            <h3 className="text-lg font-semibold">1. Translate Manuscript</h3>
            <div className="flex items-center gap-4 mt-2">
              <select className="flex-grow rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <option>The Alchemy of Purpose (Original)</option>
                <option>Innovate Your Soul (Original)</option>
              </select>
              <span className="text-gray-500">to</span>
              <select className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <option>Portuguese</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Generate Translation</button>
            </div>
          </div>
          
          {/* Step 2: Autoral Version */}
          <div>
            <h3 className="text-lg font-semibold">2. Create Authorial Version</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Generate a new, unique version based on an existing manuscript.</p>
            <div className="flex items-center gap-4 mt-2">
              <select className="flex-grow rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <option>The Alchemy of Purpose (Original)</option>
                <option>Innovate Your Soul (Portuguese Translation)</option>
              </select>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Generate New Version</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminToolsPage;

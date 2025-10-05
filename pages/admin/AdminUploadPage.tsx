
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminUploadPage: React.FC = () => {
  const { t } = useLanguage();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">{t('uploadBook')}</h1>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300 mb-6">Upload a book in PDF format. The system will extract the text, prepare it for translation, and set it up for the digital reader.</p>
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
            <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept=".pdf"/>
            <label htmlFor="file-upload" className="cursor-pointer text-primary dark:text-blue-400 font-semibold">
                Choose a file
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">or drag and drop</p>
            {fileName && <p className="mt-4 text-sm font-medium">Selected: {fileName}</p>}
        </div>
        <button className="mt-8 w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark font-semibold">
            Start Upload & Process
        </button>
      </div>
    </div>
  );
};

export default AdminUploadPage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockBooks } from '../../services/mockData';
import type { Book } from '../../types';

const AdminBookFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [book, setBook] = useState<Partial<Book>>({});

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const existingBook = mockBooks.find(b => b.id === Number(id));
      if (existingBook) {
        setBook(existingBook);
      } else {
        navigate('/admin/books');
      }
    } else {
      setBook({
        title: '',
        author: 'Celso Jung',
        coverImage: '',
        shortDescription: '',
        longDescription: '',
        amazonLink: 'https://',
        awards: [],
        mediaMentions: [],
        content: ''
      });
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook(prevBook => ({ ...prevBook, [name]: value }));
  };
  
  const handleComplexChange = (name: 'awards' | 'mediaMentions', value: string) => {
      if (name === 'awards') {
          const awards = value.split(',').map(s => s.trim()).filter(Boolean);
          setBook(prevBook => ({ ...prevBook, awards }));
      } else if (name === 'mediaMentions') {
          const mentions = value.split(';').map(pair => {
              const [source, link] = pair.split(',');
              return { source: source?.trim(), link: link?.trim() };
          }).filter(m => m.source && m.link);
          setBook(prevBook => ({ ...prevBook, mediaMentions: mentions }));
      }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving book:', book);
    alert(isEditing ? 'Book updated successfully!' : 'Book created successfully!');
    navigate('/admin/books');
  };
  
  if (!book.title && !isEditing) {
    return <div>Loading form...</div>;
  }
  
  if(isEditing && !book.title) {
    return <div>Loading book data...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-serif mb-6">
        {isEditing ? `${t('editBook')}: ${book.title}` : t('addBook')}
      </h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium">{t('bookTitle')}</label>
            <input type="text" name="title" id="title" value={book.title || ''} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>
          
          <div>
            <label htmlFor="author" className="block text-sm font-medium">{t('bookAuthor')}</label>
            <input type="text" name="author" id="author" value={book.author || ''} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium">{t('coverImageUrl')}</label>
            <input type="url" name="coverImage" id="coverImage" value={book.coverImage || ''} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>
          
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium">{t('shortDescription')}</label>
            <textarea name="shortDescription" id="shortDescription" value={book.shortDescription || ''} onChange={handleChange} rows={3} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>

          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium">{t('longDescription')}</label>
            <textarea name="longDescription" id="longDescription" value={book.longDescription || ''} onChange={handleChange} rows={6} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium">Book Content</label>
            <textarea name="content" id="content" value={book.content || ''} onChange={handleChange} rows={10} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm" placeholder="Enter the full book content here."/>
          </div>

          <div>
            <label htmlFor="amazonLink" className="block text-sm font-medium">{t('amazonLink')}</label>
            <input type="url" name="amazonLink" id="amazonLink" value={book.amazonLink || ''} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>

          <div>
            <label htmlFor="awards" className="block text-sm font-medium">{t('awards')}</label>
            <input type="text" name="awards" id="awards" value={Array.isArray(book.awards) ? book.awards.join(', ') : ''} onChange={(e) => handleComplexChange('awards', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>
          
          <div>
            <label htmlFor="mediaMentions" className="block text-sm font-medium">{t('mediaMentions')}</label>
            <textarea name="mediaMentions" id="mediaMentions" value={Array.isArray(book.mediaMentions) ? book.mediaMentions.map(m => `${m.source},${m.link}`).join(';') : ''} onChange={(e) => handleComplexChange('mediaMentions', e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm"/>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link to="/admin/books" className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
              {t('cancel')}
            </Link>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm font-medium">
              {t('saveChanges')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBookFormPage;

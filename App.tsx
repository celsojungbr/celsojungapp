import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

import MainLayout from './components/layouts/MainLayout';
import UserDashboardLayout from './components/layouts/UserDashboardLayout';
import AdminDashboardLayout from './components/layouts/AdminDashboardLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BooksListPage from './pages/BooksListPage';
import BookDetailPage from './pages/BookDetailPage';
import ContactPage from './pages/ContactPage';
import ReaderPage from './pages/user/ReaderPage';

// User Dashboard Pages
import UserDashboardPage from './pages/user/UserDashboardPage';
import MyLibraryPage from './pages/user/MyLibraryPage';
import UserSettingsPage from './pages/user/UserSettingsPage';
import UserSubscriptionsPage from './pages/user/UserSubscriptionsPage';

// Admin Dashboard Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminBooksPage from './pages/admin/AdminBooksPage';
import AdminUploadPage from './pages/admin/AdminUploadPage';
import AdminToolsPage from './pages/admin/AdminToolsPage';
import AdminBookFormPage from './pages/admin/AdminBookFormPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <Routes>
            {/* Fix: Refactored main site routes to use a nested structure. 
                This allows MainLayout to use an <Outlet /> for rendering child pages, 
                which is the standard pattern in React Router v6 and fixes the 'children' prop type error. */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="books" element={<BooksListPage />} />
              <Route path="books/:id" element={<BookDetailPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>

            {/* Reader page is standalone */}
            <Route path="/read/:id" element={<ReaderPage />} />

            {/* User Dashboard Routes */}
            <Route path="/user" element={<UserDashboardLayout />}>
              <Route path="dashboard" element={<UserDashboardPage />} />
              <Route path="my-library" element={<MyLibraryPage />} />
              <Route path="settings" element={<UserSettingsPage />} />
              <Route path="subscriptions" element={<UserSubscriptionsPage />} />
            </Route>
            
            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminDashboardLayout />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="books" element={<AdminBooksPage />} />
              <Route path="books/new" element={<AdminBookFormPage />} />
              <Route path="books/edit/:id" element={<AdminBookFormPage />} />
              <Route path="upload" element={<AdminUploadPage />} />
              <Route path="tools" element={<AdminToolsPage />} />
            </Route>

          </Routes>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

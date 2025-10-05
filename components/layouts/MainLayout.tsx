import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

// Fix: Refactored component to use `<Outlet />` for rendering child routes instead of `props.children`. 
// This is the idiomatic approach for layout components in React Router v6 and resolves the type error in App.tsx.
const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default MainLayout;

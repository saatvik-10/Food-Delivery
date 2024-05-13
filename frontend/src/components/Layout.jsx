import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='content container mt-4'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

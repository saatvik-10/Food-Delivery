import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';
import Menu from './pages/Menu.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import PP from './pages/PP.jsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy&policy' element={<PP />} />
      </Routes>
    </Layout>
  );
};

export default App;

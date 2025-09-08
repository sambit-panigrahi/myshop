// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './assets/banner.jpg';
import women_banner from './assets/women_banner.avif';
import kids_banner from './assets/kids_banner.jpg';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens/:id' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens/:id' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids/:id' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

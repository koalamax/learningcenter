import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container">
      <Header />
      <Carousel />
      <MenuBar />
      <Outlet /> {/* 여기만 바뀜 */}
      <Footer />
    </div>
  );
}

export default Layout;


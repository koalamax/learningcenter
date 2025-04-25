import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import HotelList from './components/HotelList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Carousel />
      <MenuBar />
      <SearchBar />
      <HotelList />
      <Footer />
    </div>
  );
}

export default App;

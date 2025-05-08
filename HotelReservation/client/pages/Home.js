import React from 'react';
import SearchBar from '../components/SearchBar';
import HotelList from '../components/HotelList';

function Home() {
  return (
    <div className="container">
      <SearchBar />
      <HotelList />
    </div>
  );
}

export default Home;


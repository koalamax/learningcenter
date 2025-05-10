import React from 'react';
import HotelList from '../components/HotelList';

const HotelListPage = () => {
  return (
    <div className="container my-4">
      <h2>전체 호텔 목록</h2>
      <HotelList />
    </div>
  );
};

export default HotelListPage;

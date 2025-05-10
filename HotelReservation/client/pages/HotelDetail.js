import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/hotels/' + id)
      .then(res => res.json())
      .then(data => setHotel(data));
  }, [id]);

  const handleReserve = async () => {
    const response = await fetch('http://localhost:8080/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hotelId: hotel.id, userId: 1 }) // userId는 예시
    });
    if (response.ok) {
      alert('예약 성공!');
    } else {
      alert('예약 실패');
    }
  };

  if (!hotel) return <div>로딩 중...</div>;

  return (
    <div className="container my-4">
      <h2>{hotel.name}</h2>
      <img src={hotel.imageUrl} className="img-fluid" alt="호텔" />
      <p><b>{hotel.price}원</b></p>
      <button className="btn btn-warning" onClick={handleReserve}>예약하기</button>
    </div>
  );
};

export default HotelDetail;

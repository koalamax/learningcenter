import React from 'react';
//import { useState, useEffect } from 'react';
import { useState } from 'react';

const SearchBar = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

 // const guestText = `객실 ${rooms}, 성인 ${adults}, 아동 ${children}`;


  return (
  <section className="container my-4">
    <div className="row g-2">
      <div className="col-md">
        <input type="text" className="form-control" placeholder="🔍 어느 지역 호텔을 예약할까요?" />
      </div>
      <div className="col-md">
        <input type="date" className="form-control" defaultValue={today}/>
      </div>
      <div className="col-md">
        <input type="date" className="form-control" defaultValue={tomorrow}/>
      </div>

	<div className="col-md">
	  <div className="dropdown w-100">
		<button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
		  객실 {rooms}, 성인 {adults}, 아동 {children}
		</button>
		<ul className="dropdown-menu p-2">
		  <li><label className="dropdown-item">객실 <input type="number" value={rooms} min="1" onChange={e => setRooms(e.target.value)} /></label></li>
		  <li><label className="dropdown-item">성인 <input type="number" value={adults} min="1" onChange={e => setAdults(e.target.value)} /></label></li>
		  <li><label className="dropdown-item">아동 <input type="number" value={children} min="0" onChange={e => setChildren(e.target.value)} /></label></li>
		</ul>
	  </div>
	</div>
	<div className="col-md">
	  <button className="btn btn-primary w-100">검색</button>
	</div>
  </div>
  </section>
	);
};

export default SearchBar;

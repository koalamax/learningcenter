import React from 'react';

const HotelList = () => {

  const hotels = [
    { name: '글래드 마포', price: '175,000 원', image: 'hotelimg/글래드 마포1.jpg', flags: ['i_hit', 'i_new'] },
    { name: '글래드 여의도', price: '150,000 원', original: '200,000 원', discount: '20%', image: 'hotelimg/글래드 여의도1.jpg', flags: ['i_new', 'i_hit', 'i_sale'] },
    { name: '나인트리 바이 파르나스 서울 명동 1', price: '185,000 원', image: 'hotelimg/나인트리 바이 파르나스 서울 명동 1.jpg', flags: ['i_new'] },
    { name: '더 플라자 서울, 오토그래프 컬렉션1', price: '225,000 원', image: 'hotelimg/더 플라자 서울, 오토그래프 컬렉션1.jpg' },
    { name: '서울가든호텔1', price: '199,000 원', image: 'hotelimg/서울가든호텔1.jpg' },
    { name: '소테츠 호텔즈 더 스프라지르 서울 명동1', price: '158,000 원', image: 'hotelimg/소테츠 호텔즈 더 스프라지르 서울 명동1.jpg' },
    { name: '파라스파라 서울1', price: '173,000 원', image: 'hotelimg/파라스파라 서울1.jpg' },
    { name: '워커힐 더글라스 하우스1', price: '214,000 원', image: 'hotelimg/워커힐 더글라스 하우스1.jpg' },
    { name: '포포인츠 바이 쉐라톤 조선 서울역1', price: '200,000 원', image: 'hotelimg/포포인츠 바이 쉐라톤 조선 서울역1.jpg' },
    { name: '프레이저 플레이스 센트럴 서울1', price: '220,000 원', image: 'hotelimg/프레이저 플레이스 센트럴 서울1.jpg' },
    { name: '엠디호텔 독산1', price: '155,000 원', image: 'hotelimg/엠디호텔 독산1.jpg' },
    { name: '엠디호텔 독산2', price: '155,000 원', image: 'hotelimg/엠디호텔 독산2.jpg' }
  ];

	return (

    <div className="mt-5 mb-1">
      <div className="row mb-3">
        <div className="col" align="center">
          <h2>최근 가장 많이 찾는 호텔목록</h2>
        </div>
      </div>
      <div className="row">
        {hotels.map((hotel, index) => (
          <div className="col-sm-3 mb-3" key={index}>
            <div className="card h-100">
              <div className="zoom_image" align="center">
                <a href="/product"><img src={hotel.image} height="360" className="card-img-top img-fluid" alt={hotel.name} /></a>
              </div>
              <div className="card-body bg-light" align="center" style={{ fontSize: '15px' }}>
                <div className="card-title">
                  <a href="/product">{hotel.name}</a><br />
                  {hotel.flags && hotel.flags.map((flag, i) => (
                    <img key={i} src={`images/${flag}.gif`} alt={flag} />
                  ))}
                  {hotel.discount && <><span className="text-danger ms-1">{hotel.discount}</span></>}
                </div>
                <p className="card-text">
                  {hotel.original && <small><strike>{hotel.original}</strike></small>}&nbsp;&nbsp;<b>{hotel.price}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
	);
}

export default HotelList

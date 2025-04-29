import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [images, setImages] = useState([]);

  // Replace this with your logic to fetch the images dynamically
  useEffect(() => {
    // Simulating an API call or fetching data from a directory
    const fetchImages = async () => {
      const imageList = [
        { src: 'images/banner5.jpg', title: '글래드 여의도', subtitle: '당신을 위한 호텔 제안 1' },
        { src: 'images/banner6.jpg', title: '나인트리 바이 파르나스 서울 명동', subtitle: '당신을 위한 호텔 제안 2' },
        { src: 'images/banner7.jpg', title: '서울 가든 호텔', subtitle: '당신을 위한 호텔 제안 3' },
        { src: 'images/banner8.jpg', title: '워커힐 더 글라스 하우스', subtitle: '당신을 위한 호텔 제안 4' },
        { src: 'hotelimg/글래드 마포1.jpg', title: '글래드 마포1', subtitle: '당신을 위한 호텔 제안 5' },
        { src: 'hotelimg/프레이저 플레이스 센트럴 서울1.jpg', title: '프레이저 플레이스 센트럴 서울1', subtitle: '당신을 위한 호텔 제안 5' },
        { src: 'hotelimg/소테츠 호텔즈 더 스프라지르 서울 명동1.jpg', title: '소테츠 호텔즈 더 스프라지르 서울 명동1', subtitle: '당신을 위한 호텔 제안 6' },
        { src: 'hotelimg/엠디호텔 독산1.jpg', title: '엠디호텔 독산1', subtitle: '당신을 위한 호텔 제안 7' },
        { src: 'hotelimg/파라스파라 서울1.jpg', title: '파라스파라 서울1', subtitle: '당신을 위한 호텔 제안 8' },

      ];
      setImages(imageList);
    };

    fetchImages();
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval={3000}>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            aria-label={`Slide ${index + 1}`}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={image.src}
              className="d-block w-100"
              style={{ height: '400px', objectFit: 'cover' }}
              alt={image.title}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>{image.title}</h1>
              <p><h6>{image.subtitle}</h6></p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;


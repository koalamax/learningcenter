-- ✅ 호텔 예약 시스템 전체 테이블 생성 (MySQL 기준)
-- 테이블 생성 순서 고려

-- 1. hotels (호텔 정보)
CREATE TABLE hotels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  brand VARCHAR(50),
  region VARCHAR(50),
  city VARCHAR(50),
  zipcode VARCHAR(5),
  address VARCHAR(255) NOT NULL,
  detailAddress VARCHAR(255),
  latitude DECIMAL(10,8),
  longitude DECIMAL(10,8),
  homepageUrl VARCHAR(255),
  totalRooms INT DEFAULT 0,
  availableRooms INT DEFAULT 0,
  grade ENUM('5성', '4성', '3성', '미분류') DEFAULT '미분류',
  gradeDate DATE,
  thumbnailUrl VARCHAR(255),
  phone VARCHAR(20),
  email VARCHAR(100),
  checkIn TIME DEFAULT '15:00:00',
  checkOut TIME DEFAULT '11:00:00',
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


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

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hotelId INT NOT NULL,
  roomType VARCHAR(100) NOT NULL,
  description TEXT,
  price INT NOT NULL,
  maxOccupancy INT NOT NULL,
  totalRooms INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hotelId) REFERENCES hotels(id)
);

CREATE TABLE room_facilities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomId INT NOT NULL,
  name VARCHAR(100),
  FOREIGN KEY (roomId) REFERENCES rooms(id)
);

CREATE TABLE room_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomId INT NOT NULL,
  imageUrl TEXT,
  FOREIGN KEY (roomId) REFERENCES rooms(id)
);


-- 2. rooms (호텔 객실 정보)
CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hotelId INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  roomType VARCHAR(50),
  price DECIMAL(10,2) NOT NULL,
  capacity INT,
  stock INT DEFAULT 1,
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hotelId) REFERENCES hotels(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. room_facilities (객실별 시설)
CREATE TABLE room_facilities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomId INT NOT NULL,
  facilityName VARCHAR(100),
  FOREIGN KEY (roomId) REFERENCES rooms(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. hotel_facilities (호텔 전체 시설)
CREATE TABLE hotel_facilities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hotelId INT NOT NULL,
  facilityName VARCHAR(100),
  FOREIGN KEY (hotelId) REFERENCES hotels(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. hotel_images (호텔 이미지 목록)
CREATE TABLE hotel_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hotelId INT NOT NULL,
  imageUrl VARCHAR(255),
  isThumbnail BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (hotelId) REFERENCES hotels(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. reservations (예약 정보)
CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  roomId INT NOT NULL,
  checkInDate DATE NOT NULL,
  checkOutDate DATE NOT NULL,
  guests INT,
  totalPrice DECIMAL(10,2),
  status ENUM('예약완료','취소됨','체크인','체크아웃') DEFAULT '예약완료',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (roomId) REFERENCES rooms(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. reviews (후기)
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  hotelId INT NOT NULL,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (hotelId) REFERENCES hotels(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. carts (장바구니)
CREATE TABLE carts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  roomId INT NOT NULL,
  quantity INT DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (roomId) REFERENCES rooms(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 9. inquiries (고객문의 게시판)
CREATE TABLE inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  category VARCHAR(50),
  title VARCHAR(255),
  content TEXT,
  password VARCHAR(255),
  hasReply BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 10. inquiry_replies (관리자 답변)
CREATE TABLE inquiry_replies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  inquiryId INT NOT NULL,
  reply TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (inquiryId) REFERENCES inquiries(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


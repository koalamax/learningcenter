-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 25-04-22 02:11
-- 서버 버전: 10.4.28-MariaDB
-- PHP 버전: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `hoteldb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  `type` enum('customer','staff','withdrawal') NOT NULL,
  `creattime` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `users`
--

INSERT INTO `users` (`id`, `uid`, `pwd`, `name`, `phone`, `zipcode`, `address`, `detail`, `email`, `birthday`, `type`, `creattime`) VALUES
(12, 'choi', '$2a$10$w5L7tsSPjwolYDG98Hs.u.aXIhbuLtwPC/nj42.EK4CN6ONXRvl0S', '최영재', '010-8888-9999', '12345', '서울시 강동구 상암로 123-456', '101동 102호', 'choi@example.com', '2000-03-15', 'customer', '2025-04-17 23:52:00'),
(13, 'admin', '$2a$10$rioK8Kb195Kepox9OCgtgutlJzvrxAg0mqiifI9M6w8jk41HqYuKe', '관리자', '010-9999-9999', '12345', '서울시 송파구 잠실3동 77-883', '101동 102호', 'admin9999@example.com', '1999-09-09', 'staff', '2025-04-17 23:52:52'),
(14, 'min', '$2a$10$b3ekChuwl7UM4xSyK6N/1uCT0yZRZgcBQSM9incimYWaZbeDLMJdC', '민수진', '010-1234-1234', '01023', '서울시 강동구 상암로 78길', '101동 102호', 'min@example.com', '2000-12-31', 'customer', '2025-04-18 02:07:09'),
(15, 'shingu', '$2a$10$uUyuKCPJMzOk4u6GvHeMTeYL49FV5Vh7WvILkBi.o2BK4nmRu5AuK', '신구대', '010-1234-4546', '09345', '서울 경기도 신구대학교 303호', '101동 102호', 'singu@example.com', '2003-07-12', 'customer', '2025-04-18 02:13:05'),
(16, 'hong', '$2a$10$FPPtvm9hd5Pg7gBNIjMDSeeWVAhpLm5cjYjVizzbkzj5RNlIuzbzS', '홍길동', '010-2320-3487', '32423', '서울시 홍길동구 홍길동 124-456', '101동 102호', 'hong@example.com', '1999-08-23', 'customer', '2025-04-18 09:25:14'),
(17, 'song', '$2a$10$b43uYpDcR/H8crRCWICde.tM61cqXA.MYuuxFecLmaRcFDxyYX5pi', '송은영', '010-9378-5398', '46743', '부산광역시 중구 신당동 132-24', '101동 102호', 'song@gmail.com', '2005-06-23', 'customer', '2025-04-18 09:28:28'),
(18, 'choiheena', '$2a$10$7Kj2eJZwj2hi3tlHGIXLbeRNHpUZCe4HmvIatjucmIOokbmHuU5X6', '최희나', '010-3242-5676', '35434', '서울시 마포구 이화여대길 298-32', '101동 102호', 'heena.choi@gmail.com', '2003-12-25', 'customer', '2025-04-18 13:33:42'),
(20, 'user02', '$2a$10$pbXFjUt1/mA7ecMS168xueqEwuwYK3SAWFpevt5UYIEpfmnnSyUD.', '신미래', '010-1234-3423', '12345', '서울 송파구 잠실3동 203-32', '101동 102호', 'user02@example.com', '2004-09-20', 'customer', '2025-04-18 19:30:10'),
(21, 'choi3', '$2a$10$BGpnM9htrpwstu/kGAKLyeLw33ytzXQOVllzudczuaC5AHyqs2.oy', '최영재2', '010-3242-5464', '05281', '서울 강동구 상암로79길 88  704-804', '101동 102호', 'choi2@example.com', '2005-07-31', 'customer', '2025-04-18 19:58:56'),
(22, 'user04', '$2a$10$DPwCX3XvwuJDQC1UFBQxZ.BDmMqo/KfOieCs0FMOQLpUMx/ctcG6y', '오말자', '010-3245-3453', '06267', '서울 강남구 강남대로 238-4', '101동 102호', 'user04@gmail.com', '2000-03-23', 'customer', '2025-04-18 20:15:33'),
(23, 'bang', '$2a$10$SjKTG4SNXaJLDmLmRVOm7uZGWIUlQmlMNCAOXN3LSZ.HGsA/s9e3a', '방덕수', '010-3424-6577', '63625', '제주특별자치도 서귀포시 표선면 가마행남로 27', '101동 102호', 'bang@example.com', '2000-12-21', 'customer', '2025-04-18 20:35:49'),
(24, 'testuser01', '$2a$10$EXjo2X5nUZvgkITdyjnBx.tYNyed5CfKXRURhHoQ/oaXKRZEJlAqa', '테스트유저1', '010-1312-3453', '06267', '서울 강남구 남부순환로 2609', '101동 102호', 'testuser01@example.com', '2000-12-23', 'customer', '2025-04-19 18:03:20'),
(25, 'user03', '$2a$10$xa1.tDKAl/1T8gSj2n8yBeP5xIsj54JA6VHvJ/ak75SNOZ5cHdWyu', '테스트유저2', '010-3423-8294', '01129', '서울 강북구 덕릉로 104 (뉴그린오피스텔)', NULL, 'user03@example.com', '2000-12-15', 'customer', '2025-04-19 21:02:32'),
(26, 'user05', '$2a$10$fls2i6xFtIrWLh4Ky9VUTucCOoSDAmjciAuafJkOgY74t.pc7pPAm', '테스트유저5', '010-2324-6553', '05607', '서울 송파구 잠실로 88 (레이크팰리스)', NULL, 'user05@gmail.com', '2002-04-22', 'customer', '2025-04-19 21:08:10'),
(27, 'user06', '$2a$10$e6LAozsF66uMMHufxYER2.EdfYIj1yTbS17ADfZrsF9EFRy7u9teS', '테스트유저06', '010-4534-2342', '05281', '서울 강동구 상암로79길 88 (고덕 롯데캐슬 베네루체)', '704동 305호', 'user06@gmail.com', '2004-12-24', 'customer', '2025-04-19 21:39:51'),
(28, 'user07', '$2a$10$gdTlTMYIlYWGOdSvyR/aneGwOqyXO3XGtM3D6Ih.XNJvzc1Cghv5W', '테스트유저07', '010-6564-3452', '63534', '제주특별자치도 서귀포시 가가로27번길 4', '203동 202호', 'user07@example.com', '2000-02-24', 'customer', '2025-04-19 21:45:24'),
(29, 'user08', '$2a$10$b7zi5Yzs/kSSzyi2qHkQg.9pWmsgYuvXFEaPVuWBKO3aBHLtqvqVO', '테스트유저8', '010-3242-3546', '03180', '서울 종로구 경교장길 35 (경희궁자이 3단지)', '202동 307호', 'user08@example.com', '1968-04-24', 'customer', '2025-04-20 00:12:35'),
(30, 'user09', '$2a$10$J4gcDoTCp8bP2Wjfnh2.o.v9dx6Cd2W9Ya4wboxzLIEW2rmZLJ4fW', '테스트유저09', '010-4234-6534', '04788', '서울 성동구 광나루로 130 (서울숲IT캐슬)', '203동 202호', 'user09@example.com', '1989-04-24', 'customer', '2025-04-20 18:51:44');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uid` (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

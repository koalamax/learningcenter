
# hsr(hotel reservation system)
# 개발문서readme.txt



┌──────────────────────────────┐
│        사용자 브라우저       │
│      (localhost:3000)        │
└────────────┬─────────────────┘
             │ (1) React UI 렌더링
             ▼
      React 개발 서버 (webpack dev server)
       yarn start → localhost:3000
             │
             │ (2) API 요청 (ex. /api/login)
             ▼
┌──────────────────────────────┐
│  Spring Boot 백엔드 서버     │
│     (localhost:8080)         │
└────────────┬─────────────────┘
             │ (3) DB 조회 및 처리
             ▼
      MariaDB (또는 다른 DB)


step1:
	nodejs 설치한후 npm 작동하는지 볼것
step2:
	npm install
	sudo npm install --global yarn

step3:
yarn create react-app client
cd client

또는 
npx create-react-app my-bootstrap-app
cd my-bootstrap-app

step4:
npm install bootstrap
npm install bootstrap @popperjs/core
npm install axios react-router-dom
npm install react-router-dom
npm install react-router-dom @types/react-router-dom


step5:
yarn start
localhost:3000번 접속



📁 전체 구조

hotel-reservation/
├── client/           ← React 프론트엔드
│   ├── public/
│   ├── src/
│   │   ├── assets/css/my.css
│   │   ├── components/          ← Header, Carousel 등 6개 컴포넌트
│   │   ├── pages/               ← Login, Register, HotelDetail, AdminPage
│   │   ├── App.js, AppRouter.js, index.js
│   ├── package.json
│   └── ...
├── server/           ← Spring Boot 백엔드
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/hotel/
│   │       │   ├── entity/       ← User, Admin, Hotel, Reservation, Review
│   │       │   ├── controller/   ← User, Admin, Hotel, Reservation, Review
│   │       │   ├── service/
│   │       │   ├── repository/
│   │       │   ├── config/       ← WebConfig, SecurityConfig, JWT 관련
│   │       │   └── HotelReservationApplication.java
│   │       └── resources/
│   │           ├── static/       ← 프론트 빌드된 파일 포함 가능
│   │           └── application.properties
│   ├── build.gradle
│   └── ...
└── README.md




📁 React 프론트엔드 구조 (hotel-frontend)

src/
├── components/
│   ├── Header.js
│   ├── Carousel.js
│   ├── SearchBar.js
│   ├── HotelList.js
│   └── Footer.js
├── App.js
└── index.js


기능명	프론트엔드 구성 (React)	백엔드 구성 (Spring Boot)
로그인	LoginPage.js, 로그인 폼	/api/auth/login
회원가입	SignupPage.js, 회원가입 폼	/api/auth/signup
호텔 검색	검색 바 + 필터링 처리	/api/hotels/search?query=...
상세페이지	HotelDetail.js, 호텔 정보 표시	/api/hotels/{id}
예약하기	ReservationForm.js, 예약 입력	/api/reservations


🧰 Spring Boot 백엔드 구조

hotel-backend/
└── src/main/java/com/example/hotel/
    ├── controller/HotelController.java
    ├── model/Hotel.java
    ├── repository/HotelRepository.java
    ├── service/HotelService.java
    └── HotelBackendApplication.java



hotel-reservation/
├── client/         # React 프론트엔드
│   ├── src/
│   ├── public/
│   └── package.json
│       └── proxy 설정 있음 (→ 8080)
├── server/         # Spring Boot 백엔드
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/server
│   │       └── resources/
│   └── build.gradle / pom.xml
💡 3. 실제 코드 흐름 예시 (회원 로그인)










🌐 API 통신 예시 (React)

useEffect(() => {
  fetch('http://localhost:8080/api/hotels')
    .then(res => res.json())
    .then(data => setHotels(data));
}, []);



📦 포함된 기능
기능	프론트엔드	백엔드
✅ 로그인	LoginPage.js	AuthController.java
✅ 회원가입	SignupPage.js	AuthController.java
✅ 호텔 리스트	HotelList.js	HotelController.java
✅ 호텔 검색	검색바 (간단 필터는 추후 확장 가능)	HotelController.java
✅ 상세페이지	HotelDetail.js	HotelController.java
✅ 예약하기	버튼 → POST /api/reservations	ReservationController.java


요청하신 모든 메인 페이지 구성 요소를 포함한 최신 React + Spring Boot 프로젝트를 완성했습니다.
📦 업데이트된 구성 요소

Header.js
Carousel.js
SearchBar.js
HotelList.js
Footer.js

👇 아래 링크에서 전체 프로젝트 ZIP 파일을 다운로드하실 수 있습니다:
👉 hotel_project.zip 다운로드

💡 이제 이 프로젝트를 React (npm start)와 Spring Boot (mvn spring-boot:run)로 실행하시면,
메인 페이지에 전체 UI가 구성된 호텔 예약 시스템을 확인하실 수 있습니다.

UserRepository.java
hotel-reservation-server/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/hotel/
│       │       ├── controller/
│       │       │   └── UserController.java
│       │       ├── dto/
│       │       │   └── UserDto.java
│       │       ├── entity/
│       │       │   └── User.java
│       │       ├── repository/
│       │       │   └── UserRepository.java
│       │       ├── service/
│       │       │   └── UserService.java
│       │       ├── config/
│       │       │   └── WebConfig.java
│       │       └── HotelReservationApplication.java
│       └── resources/
│           ├── application.properties
│           └── static/ (← 프론트 빌드 후 여기에 넣을 수 있음)
└── build.gradle (또는 pom.xml)


com.example.hotel
├── config            ✅ WebConfig.java
├── controller        ✅ UserController.java
├── dto               ✅ UserDto.java
├── entity            ✅ User.java
├── repository        ✅ UserRepository.java
└── service           ✅ UserService.java:wq!

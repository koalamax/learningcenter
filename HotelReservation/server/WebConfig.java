package com.example.hotel.config;  // ← 패키지명은 본인 프로젝트에 맞게 수정

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                //.allowedOrigins("http://localhost:3000")  // React 개발 서버 주소
                .allowedOrigins("*")  // 모든곳에서
                .allowedMethods("*");  // GET, POST, PUT, DELETE 등 전부 허용
    }
}

/*
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // 모든 출처 허용
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메소드
                .allowedHeaders("*")
                .allowCredentials(true); // 쿠키 및 인증 정보 허용
    }
}
*/

package com.example.hotel.controller;

import com.example.hotel.dto.RegisterDto;
import com.example.hotel.dto.UserDto;
import com.example.hotel.entity.User;
import com.example.hotel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // React 프론트 허용
public class UserController {

    @Autowired
    private UserService userService;

    // ✅ 로그인 API
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto dto) {
        User user = userService.login(dto);

        if (user != null) {
            // 필요한 정보만 반환할 수도 있음
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("user", Map.of(
                    "uid", user.getUid(),
                    "name", user.getName(),
                    "email", user.getEmail()
            ));
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid uid or password"));
        }
    }

    // ✅ 회원가입 API
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDto dto) {
        try {
            userService.register(dto);
            return ResponseEntity.ok(Map.of("message", "회원가입이 완료되었습니다."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "회원가입 실패: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "서버 오류가 발생했습니다."));
        }
    }

	@GetMapping("/me")
	public ResponseEntity<?> getMyInfo(@RequestParam String uid) {
		User user = userService.findByUid(uid);
		if (user != null) {
			return ResponseEntity.ok(user);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "사용자를 찾을 수 없습니다."));
		}
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateUser(@RequestBody RegisterDto dto) {
		try {
			userService.updateUser(dto);
			return ResponseEntity.ok(Map.of("message", "회원 정보가 수정되었습니다."));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(Map.of("message", "수정 중 오류가 발생했습니다."));
		}
	}


	@GetMapping("/check-id")
	public ResponseEntity<?> checkDuplicateId(@RequestParam String uid) {
		boolean exists = userService.existsByUid(uid);
		return ResponseEntity.ok(Map.of("available", !exists));
	}

}

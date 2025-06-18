package com.example.hotel.service;

import com.example.hotel.dto.UserDto;
import com.example.hotel.dto.RegisterDto;
import com.example.hotel.entity.User;
import com.example.hotel.util.PasswordUtil;
import com.example.hotel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Date;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

	/* 단순비교 */
/*
    public User login(UserDto dto) {
        return userRepository.findByUid(dto.getUid())
                .filter(user -> user.getPwd().equals(dto.getPwd()))
                .orElse(null);
    }
*/

    // ✅ 로그인 로직 수정 (암호화 비교)
    public User login(UserDto dto) {
        return userRepository.findByUid(dto.getUid())
                .filter(user -> PasswordUtil.verifyPassword(dto.getPwd(), user.getPwd()))
                .orElse(null);
    }

    public User register(RegisterDto dto) {
        if (userRepository.existsByUid(dto.getUid())) {
            throw new IllegalArgumentException("중복된 아이디입니다.");
        }
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("중복된 이메일입니다.");
        }

        User user = new User();
        user.setUid(dto.getUid());
        user.setPwd(PasswordUtil.hashPassword(dto.getPwd()));
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setAddress(dto.getAddress());
        user.setDetail(dto.getDetail());
        user.setZipcode(dto.getZipcode());
        user.setBirthday(dto.getBirthday());
        user.setType(User.UserType.customer);
        user.setCreattime(new Date());

        return userRepository.save(user);
    }

	public boolean existsByUid(String uid) {
		return userRepository.existsByUid(uid);
	}


	public User findByUid(String uid) {
		return userRepository.findByUid(uid).orElse(null);
	}

	public void updateUser(RegisterDto dto) {
		User user = userRepository.findByUid(dto.getUid()).orElseThrow(() -> new IllegalArgumentException("사용자 없음"));

		// ❌ 비밀번호는 여기서 업데이트하지 않음
		// user.setPasswd(dto.getPwd()); ← 이건 하지 마세요!

		user.setName(dto.getName());
		user.setPhone(dto.getPhone());
		user.setEmail(dto.getEmail());
		user.setZipcode(dto.getZipcode());
		user.setAddress(dto.getAddress());
		user.setDetail(dto.getDetail());
		user.setBirthday(dto.getBirthday());

		// ✅ 비밀번호가 수정된 경우에만 업데이트
		if (dto.getPwd() != null && !dto.getPwd().isBlank() && !dto.getPwd().equals("**********")) {
			user.setPwd(PasswordUtil.hashPassword(dto.getPwd()));
		}

		userRepository.save(user);
	}
}

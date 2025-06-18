package com.example.hotel.repository;

import com.example.hotel.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUid(String uid);

	boolean existsByUid(String uid);
	boolean existsByEmail(String email);
}

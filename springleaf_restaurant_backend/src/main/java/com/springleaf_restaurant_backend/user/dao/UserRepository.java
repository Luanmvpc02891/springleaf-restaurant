package com.springleaf_restaurant_backend.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springleaf_restaurant_backend.user.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
}

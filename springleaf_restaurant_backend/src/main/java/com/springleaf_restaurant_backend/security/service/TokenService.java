package com.springleaf_restaurant_backend.security.service;

import com.springleaf_restaurant_backend.security.token.Token;

import java.util.List;
import java.util.Optional;

public interface TokenService {
    List<Token> findAllValidTokensByUserId(Long userId);
    Optional<Token> findByToken(String token);
    void saveToken(Token token);
    void updateToken(Token token);
    void deleteToken(Integer id);
}

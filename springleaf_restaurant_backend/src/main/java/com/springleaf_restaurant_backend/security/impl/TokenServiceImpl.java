package com.springleaf_restaurant_backend.security.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.security.token.Token;
import com.springleaf_restaurant_backend.security.repositories.TokenRepository;
import com.springleaf_restaurant_backend.security.service.TokenService;

import java.util.List;
import java.util.Optional;

@Service
public class TokenServiceImpl implements TokenService {
    private final TokenRepository tokenRepository;

    @Autowired
    public TokenServiceImpl(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    @Override
    public List<Token> findAllValidTokensByUserId(Long userId) {
        return tokenRepository.findAllValidTokensByUserId(userId);
    }

    @Override
    public Optional<Token> findByToken(String token) {
        return tokenRepository.findByToken(token);
    }

    @Override
    public void saveToken(Token token) {
        tokenRepository.save(token);
    }

    @Override
    public void updateToken(Token token) {
        tokenRepository.save(token);
    }

    @Override
    public void deleteToken(Integer id) {
        tokenRepository.deleteById(id);
    }
}

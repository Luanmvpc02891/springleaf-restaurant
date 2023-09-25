package com.springleaf_restaurant_backend.user.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springleaf_restaurant_backend.config.JwtService;
import com.springleaf_restaurant_backend.user.authentication.AuthenticationRequest;
import com.springleaf_restaurant_backend.user.authentication.AuthenticationResponse;
import com.springleaf_restaurant_backend.user.authentication.RegisterRequest;
import com.springleaf_restaurant_backend.user.entities.RoleEnum;
import com.springleaf_restaurant_backend.user.entities.User;
import com.springleaf_restaurant_backend.user.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        // Role role = roleRepository.findById("ADMIN")
        // .orElseThrow(() -> new RuntimeException("Role not found"));

        var user = User.builder()

                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .userName(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .email(request.getEmail())
                .address(request.getAddress())
                .image(request.getImage())
                .managerId(request.getManager_id())
                .restaurant(request.getRestaurant_id())
                .role(RoleEnum.ADMIN)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(),
                        request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}

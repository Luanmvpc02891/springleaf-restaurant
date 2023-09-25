// package com.springleaf_restaurant_backend.user.restcontroller;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import
// com.springleaf_restaurant_backend.user.authentication.AuthenticationRequest;
// import
// com.springleaf_restaurant_backend.user.authentication.AuthenticationResponse;
// import com.springleaf_restaurant_backend.user.authentication.RegisterRequest;
// import com.springleaf_restaurant_backend.user.service.AuthenticationService;

// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("/api/v1/auth")
// @RequiredArgsConstructor
// public class AuthenticationRestController {

// private final AuthenticationService service;

// @PostMapping("/register")
// public ResponseEntity<AuthenticationResponse> register(
// @RequestBody RegisterRequest request) {
// return ResponseEntity.ok(service.register(request));

// }

// @PostMapping("/authenticate")
// public ResponseEntity<AuthenticationResponse> abc(
// @RequestBody AuthenticationRequest request) {
// return ResponseEntity.ok(service.authentication(request));

// }
// }

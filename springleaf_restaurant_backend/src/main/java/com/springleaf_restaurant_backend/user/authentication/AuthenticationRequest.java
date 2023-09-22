package com.springleaf_restaurant_backend.user.authentication;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRequest {
    private String email;
    private String userId;
    private String password;
    private String role;
}

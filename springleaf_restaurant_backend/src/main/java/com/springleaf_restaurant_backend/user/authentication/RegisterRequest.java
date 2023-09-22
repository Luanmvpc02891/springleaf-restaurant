package com.springleaf_restaurant_backend.user.authentication;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String userId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String phone;
    private String email;
    private Integer address;
    private String image;
    private String manager_id;
    private Long restaurant_id;
    private String role;
}

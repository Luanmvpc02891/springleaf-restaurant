package com.springleaf_restaurant_backend.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
  private String firstName;
  private String lastName;
  private String username;
  private String password;
  private String phone;
  private String email;
  private String address;
  private String image;
  private Long managerId;
  private Long restaurantBrachId;
  private Integer roleId;
}

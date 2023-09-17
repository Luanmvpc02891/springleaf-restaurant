package com.springleaf_restaurant_backend.user.dtos;

public record SignUpDto(String firstName, String lastName, String login, char[] password) {
}

package com.springleaf_restaurant_backend.user.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.springleaf_restaurant_backend.user.dtos.SignUpDto;
import com.springleaf_restaurant_backend.user.dtos.UserDto;
import com.springleaf_restaurant_backend.user.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}

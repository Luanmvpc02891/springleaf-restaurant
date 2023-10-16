package com.springleaf_restaurant_backend.security.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springleaf_restaurant_backend.user.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByRoleId(Integer roleId);
    List<Role> findAll();
    String findRoleSaByRoleId(Integer roleId);
}

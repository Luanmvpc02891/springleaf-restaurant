package com.springleaf_restaurant_backend.security.service;


import java.util.List;

import com.springleaf_restaurant_backend.user.entities.Role;

public interface RoleService {
    List<Role> getAllRoles();
    Role getRoleById(Integer id);
    void saveRole(Role role);
    void updateRole(Role role);
    void deleteRole(Integer id);
}

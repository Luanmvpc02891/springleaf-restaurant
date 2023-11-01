package com.springleaf_restaurant_backend.security.service;

import com.springleaf_restaurant_backend.user.entities.RoleFunction;

import java.util.List;

public interface RoleFunctionService {
    List<RoleFunction> getAllRoleFunctions();
    RoleFunction getRoleFunctionById(Integer id);
    void saveRoleFunction(RoleFunction roleFunction);
    void updateRoleFunction(RoleFunction roleFunction);
    void deleteRoleFunction(Integer id);
}

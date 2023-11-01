package com.springleaf_restaurant_backend.security.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.RoleFunction;
import com.springleaf_restaurant_backend.security.repositories.RoleFunctionRepository;
import com.springleaf_restaurant_backend.security.service.RoleFunctionService;

import java.util.List;

@Service
public class RoleFunctionServiceImpl implements RoleFunctionService {
    private final RoleFunctionRepository roleFunctionRepository;

    @Autowired
    public RoleFunctionServiceImpl(RoleFunctionRepository roleFunctionRepository) {
        this.roleFunctionRepository = roleFunctionRepository;
    }

    @Override
    public List<RoleFunction> getAllRoleFunctions() {
        return roleFunctionRepository.findAll();
    }

    @Override
    public RoleFunction getRoleFunctionById(Integer id) {
        return roleFunctionRepository.findById(id).orElse(null);
    }

    @Override
    public void saveRoleFunction(RoleFunction roleFunction) {
        roleFunctionRepository.save(roleFunction);
    }

    @Override
    public void updateRoleFunction(RoleFunction roleFunction) {
        roleFunctionRepository.save(roleFunction);
    }

    @Override
    public void deleteRoleFunction(Integer id) {
        roleFunctionRepository.deleteById(id);
    }
}

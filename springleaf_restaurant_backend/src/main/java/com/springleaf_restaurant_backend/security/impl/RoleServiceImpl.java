package com.springleaf_restaurant_backend.security.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springleaf_restaurant_backend.security.repositories.RoleRepository;
import com.springleaf_restaurant_backend.security.service.RoleService;
import com.springleaf_restaurant_backend.user.entities.Role;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role getRoleById(Integer id) {
        return roleRepository.findById(id).orElse(null);
    }

    @Override
    public void saveRole(Role role) {
        roleRepository.save(role);
    }

    @Override
    public void updateRole(Role role) {
        roleRepository.save(role);
    }

    @Override
    public void deleteRole(Integer id) {
        roleRepository.deleteById(id);
    }
}

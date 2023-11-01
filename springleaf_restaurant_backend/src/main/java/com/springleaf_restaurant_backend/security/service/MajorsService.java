package com.springleaf_restaurant_backend.security.service;

import com.springleaf_restaurant_backend.user.entities.Major;

import java.util.List;
import java.util.Optional;

public interface MajorsService {
    List<Major> getAllMajors();
    Optional<Major> getMajorById(Integer id);
    void saveMajor(Major major);
    void updateMajor(Major major);
    void deleteMajor(Integer id);
}

package com.springleaf_restaurant_backend.security.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.Major;
import com.springleaf_restaurant_backend.security.repositories.MajorsRepository;
import com.springleaf_restaurant_backend.security.service.MajorsService;

import java.util.List;
import java.util.Optional;

@Service
public class MajorsServiceImpl implements MajorsService {
    private final MajorsRepository majorsRepository;

    @Autowired
    public MajorsServiceImpl(MajorsRepository majorsRepository) {
        this.majorsRepository = majorsRepository;
    }

    @Override
    public List<Major> getAllMajors() {
        return majorsRepository.findAll();
    }

    @Override
    public Optional<Major> getMajorById(Integer id) {
        return majorsRepository.findById(id);
    }

    @Override
    public void saveMajor(Major major) {
        majorsRepository.save(major);
    }

    @Override
    public void updateMajor(Major major) {
        majorsRepository.save(major);
    }

    @Override
    public void deleteMajor(Integer id) {
        majorsRepository.deleteById(id);
    }
}

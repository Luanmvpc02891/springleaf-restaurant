package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springleaf_restaurant_backend.user.entities.Combo;
import com.springleaf_restaurant_backend.user.repositories.ComboRepository;
import com.springleaf_restaurant_backend.user.service.ComboService;

import java.util.List;

@Service
public class ComboServiceImpl implements ComboService {
    private final ComboRepository comboRepository;

    @Autowired
    public ComboServiceImpl(ComboRepository comboRepository) {
        this.comboRepository = comboRepository;
    }

    @Override
    public Combo getComboById(Long id) {
        return comboRepository.findById(id).orElse(null);
    }

    @Override
    public List<Combo> getAllCombos() {
        return comboRepository.findAll();
    }

    @Override
    public void saveCombo(Combo combo) {
        comboRepository.save(combo);
    }

    @Override
    public void updateCombo(Combo combo) {
        // Bạn có thể thêm logic kinh doanh cụ thể tại đây trước khi lưu combo.
        comboRepository.save(combo);
    }

    @Override
    public void deleteCombo(Long id) {
        comboRepository.deleteById(id);
    }
}

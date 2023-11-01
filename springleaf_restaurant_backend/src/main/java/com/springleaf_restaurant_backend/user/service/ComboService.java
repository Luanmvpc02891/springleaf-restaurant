package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Combo;

import java.util.List;

public interface ComboService {
    Combo getComboById(Long id);
    List<Combo> getAllCombos();
    void saveCombo(Combo combo);
    void updateCombo(Combo combo);
    void deleteCombo(Long id);
}

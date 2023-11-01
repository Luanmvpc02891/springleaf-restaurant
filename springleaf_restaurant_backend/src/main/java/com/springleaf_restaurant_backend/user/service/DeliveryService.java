package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Delivery;

import java.util.List;

public interface DeliveryService {
    Delivery getDeliveryById(Long id);
    List<Delivery> getAllDeliveries();
    void saveDelivery(Delivery delivery);
    void updateDelivery(Delivery delivery);
    void deleteDelivery(Long id);
}

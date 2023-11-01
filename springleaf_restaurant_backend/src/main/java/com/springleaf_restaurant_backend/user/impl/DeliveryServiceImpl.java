package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.Delivery;
import com.springleaf_restaurant_backend.user.repositories.DeliveryRepository;
import com.springleaf_restaurant_backend.user.service.DeliveryService;

import java.util.List;

@Service
public class DeliveryServiceImpl implements DeliveryService {
    private final DeliveryRepository deliveryRepository;

    @Autowired
    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public Delivery getDeliveryById(Long id) {
        return deliveryRepository.findById(id).orElse(null);
    }

    @Override
    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }

    @Override
    public void saveDelivery(Delivery delivery) {
        deliveryRepository.save(delivery);
    }

    @Override
    public void updateDelivery(Delivery delivery) {
        // Bạn có thể thêm logic kinh doanh cụ thể tại đây trước khi lưu delivery.
        deliveryRepository.save(delivery);
    }

    @Override
    public void deleteDelivery(Long id) {
        deliveryRepository.deleteById(id);
    }
}

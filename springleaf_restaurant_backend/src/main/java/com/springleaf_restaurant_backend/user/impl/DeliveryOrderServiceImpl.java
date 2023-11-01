package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.DeliveryOrder;
import com.springleaf_restaurant_backend.user.repositories.DeliveryOrderRepository;
import com.springleaf_restaurant_backend.user.service.DeliveryOrderService;

import java.util.List;

@Service
public class DeliveryOrderServiceImpl implements DeliveryOrderService {
    private final DeliveryOrderRepository deliveryOrderRepository;

    @Autowired
    public DeliveryOrderServiceImpl(DeliveryOrderRepository deliveryOrderRepository) {
        this.deliveryOrderRepository = deliveryOrderRepository;
    }

    @Override
    public DeliveryOrder getDeliveryOrderById(Long id) {
        return deliveryOrderRepository.findById(id).orElse(null);
    }

    @Override
    public List<DeliveryOrder> getAllDeliveryOrders() {
        return deliveryOrderRepository.findAll();
    }

    @Override
    public void saveDeliveryOrder(DeliveryOrder deliveryOrder) {
        deliveryOrderRepository.save(deliveryOrder);
    }

    @Override
    public void updateDeliveryOrder(DeliveryOrder deliveryOrder) {
        // Bạn có thể thêm logic kinh doanh cụ thể tại đây trước khi lưu delivery order.
        deliveryOrderRepository.save(deliveryOrder);
    }

    @Override
    public void deleteDeliveryOrder(Long id) {
        deliveryOrderRepository.deleteById(id);
    }
}

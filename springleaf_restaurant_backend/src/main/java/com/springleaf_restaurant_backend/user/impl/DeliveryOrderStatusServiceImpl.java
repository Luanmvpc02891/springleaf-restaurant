package com.springleaf_restaurant_backend.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springleaf_restaurant_backend.user.entities.DeliveryOrderStatus;
import com.springleaf_restaurant_backend.user.repositories.DeliveryOrderStatusRepository;
import com.springleaf_restaurant_backend.user.service.DeliveryOrderStatusService;

import java.util.List;

@Service
public class DeliveryOrderStatusServiceImpl implements DeliveryOrderStatusService {
    private final DeliveryOrderStatusRepository deliveryOrderStatusRepository;

    @Autowired
    public DeliveryOrderStatusServiceImpl(DeliveryOrderStatusRepository deliveryOrderStatusRepository) {
        this.deliveryOrderStatusRepository = deliveryOrderStatusRepository;
    }

    @Override
    public DeliveryOrderStatus getDeliveryOrderStatusById(Long id) {
        return deliveryOrderStatusRepository.findById(id).orElse(null);
    }

    @Override
    public List<DeliveryOrderStatus> getAllDeliveryOrderStatuses() {
        return deliveryOrderStatusRepository.findAll();
    }

    @Override
    public void saveDeliveryOrderStatus(DeliveryOrderStatus deliveryOrderStatus) {
        deliveryOrderStatusRepository.save(deliveryOrderStatus);
    }

    @Override
    public void updateDeliveryOrderStatus(DeliveryOrderStatus deliveryOrderStatus) {
        // Bạn có thể thêm logic kinh doanh cụ thể tại đây trước khi lưu trạng thái đơn hàng giao hàng.
        deliveryOrderStatusRepository.save(deliveryOrderStatus);
    }

    @Override
    public void deleteDeliveryOrderStatus(Long id) {
        deliveryOrderStatusRepository.deleteById(id);
    }
}

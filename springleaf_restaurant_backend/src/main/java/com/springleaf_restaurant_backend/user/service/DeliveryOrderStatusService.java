package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.DeliveryOrderStatus;

import java.util.List;

public interface DeliveryOrderStatusService {
    DeliveryOrderStatus getDeliveryOrderStatusById(Long id);
    List<DeliveryOrderStatus> getAllDeliveryOrderStatuses();
    void saveDeliveryOrderStatus(DeliveryOrderStatus deliveryOrderStatus);
    void updateDeliveryOrderStatus(DeliveryOrderStatus deliveryOrderStatus);
    void deleteDeliveryOrderStatus(Long id);
}

package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.DeliveryOrder;

import java.util.List;

public interface DeliveryOrderService {
    DeliveryOrder getDeliveryOrderById(Long id);
    List<DeliveryOrder> getAllDeliveryOrders();
    void saveDeliveryOrder(DeliveryOrder deliveryOrder);
    void updateDeliveryOrder(DeliveryOrder deliveryOrder);
    void deleteDeliveryOrder(Long id);
}

package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.DeliveryDetail;

import java.util.List;

public interface DeliveryDetailService {
    DeliveryDetail getDeliveryDetailById(Long id);
    List<DeliveryDetail> getAllDeliveryDetails();
    void saveDeliveryDetail(DeliveryDetail deliveryDetail);
    void updateDeliveryDetail(DeliveryDetail deliveryDetail);
    void deleteDeliveryDetail(Long id);
}

package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.ReceiptDetails;

import java.util.List;

public interface ReceiptDetailsService {
    List<ReceiptDetails> getAllReceiptDetails();
    ReceiptDetails getReceiptDetailsById(Long id);
    void saveReceiptDetails(ReceiptDetails receiptDetails);
    void updateReceiptDetails(ReceiptDetails receiptDetails);
    void deleteReceiptDetails(Long id);
}

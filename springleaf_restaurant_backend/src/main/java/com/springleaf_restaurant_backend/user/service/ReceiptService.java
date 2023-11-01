package com.springleaf_restaurant_backend.user.service;

import com.springleaf_restaurant_backend.user.entities.Receipt;

import java.util.List;

public interface ReceiptService {
    List<Receipt> getAllReceipts();
    Receipt getReceiptById(Long id);
    void saveReceipt(Receipt receipt);
    void updateReceipt(Receipt receipt);
    void deleteReceipt(Long id);
}

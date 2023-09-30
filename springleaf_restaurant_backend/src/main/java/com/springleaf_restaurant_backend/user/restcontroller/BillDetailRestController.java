package com.springleaf_restaurant_backend.user.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.BillDetail;
import com.springleaf_restaurant_backend.user.repositories.BillDetailRepository;

@RestController
@RequestMapping("/api")
public class BillDetailRestController {
    @Autowired
    private BillDetailRepository billDetailRepository;

    @GetMapping("/billDetails")
    public List<BillDetail> getBilletails() {
        return billDetailRepository.findAll();
    }
}

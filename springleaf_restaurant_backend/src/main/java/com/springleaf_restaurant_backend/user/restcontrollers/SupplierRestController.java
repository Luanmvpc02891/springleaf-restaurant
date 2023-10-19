package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.Supplier;
import com.springleaf_restaurant_backend.user.repositories.SupplierRepository;

@RestController
@RequestMapping("/api")
public class SupplierRestController {
    @Autowired
    private SupplierRepository supplierRepository;

    @GetMapping("/suppliers")
    public List<Supplier> getSupplier() {
        return supplierRepository.findAll();
    }

    @GetMapping("/supplier/{supplierId}")
    public Optional<Supplier> getSupplierById(@PathVariable("supplierId") Long supplierId) {
        return supplierRepository.findById(supplierId);
    }
}

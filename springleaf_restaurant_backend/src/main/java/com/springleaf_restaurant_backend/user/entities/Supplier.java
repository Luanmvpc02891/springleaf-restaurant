package com.springleaf_restaurant_backend.user.entities;

import lombok.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Suppliers")
public class Supplier {
    @Id
    @Column(name = "supplier_id")
    private Long supplierId;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;
    @JsonIgnore
    @OneToMany(mappedBy = "supplier")
    private List<Inventory> inventories;

}

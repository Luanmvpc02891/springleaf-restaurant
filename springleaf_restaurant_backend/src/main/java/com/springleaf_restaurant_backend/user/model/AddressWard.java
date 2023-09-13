package com.springleaf_restaurant_backend.user.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Address_Wards")
public class AddressWard {

    @Id
    @Column(name = "address_ward_id")
    private int addressWardId;

    @Column(name = "address_district_id")
    private int addressDistrictId;

    @Column(name = "name")
    private String name;

    // Thêm quan hệ nối tới bảng Address_Districts
    @ManyToOne
    @JoinColumn(name = "address_district_id", referencedColumnName = "address_district_id", insertable = false, updatable = false)
    private AddressDistrict addressDistrict;

}
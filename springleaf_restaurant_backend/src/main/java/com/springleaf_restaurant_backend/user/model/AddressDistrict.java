package com.springleaf_restaurant_backend.user.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "Address_Districts")
public class AddressDistrict {

    @Id
    @Column(name = "address_district_id")
    private int addressDistrictId;

    @Column(name = "address_city_id")
    private int addressCityId;

    @Column(name = "name")
    private String name;

    // Thêm quan hệ nối tới bảng Address_Cities
    @ManyToOne
    @JoinColumn(name = "address_city_id", referencedColumnName = "address_city_id", insertable = false, updatable = false)
    private AddressCity addressCity;
}
package com.springleaf_restaurant_backend.user.entities;

import lombok.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Role_Function")
@Data
public class RoleFunction {
    @Id
    @Column(name = "role_function_id")
    private String roleFunctionId;

    @Column(name = "role_function_name")
    private String roleFunctionName;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
}

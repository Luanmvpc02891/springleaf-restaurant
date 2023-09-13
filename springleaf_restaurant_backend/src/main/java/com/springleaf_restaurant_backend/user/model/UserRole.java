package com.springleaf_restaurant_backend.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_roles")
public class UserRole {

    @Id
    @Column(name = "user_role_id")
    private int userRoleId;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "role_id")
    private int roleId;

    // Thêm quan hệ nối tới bảng Users
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    private User user;

    // Thêm quan hệ nối tới bảng Roles
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "role_id", insertable = false, updatable = false)
    private Role role;

}

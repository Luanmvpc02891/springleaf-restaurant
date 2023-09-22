package com.springleaf_restaurant_backend.user.entities;

import lombok.*;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import jakarta.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "Users")
public class User implements UserDetails{
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private Integer address;

    @Column(name = "image")
    private String image;

    @Column(name = "manager_id")
    private String managerId;

    //@ManyToOne
    @Column(name = "restaurant_brand_id")
    private Long restaurant;

    // @ManyToOne
    // @JoinColumn(name = "role_id")
    @Column(name = "role_id")
    @Enumerated(EnumType.STRING)
    // private Role role;
    private RoleEnum role;

    // @Override
    // public Collection<? extends GrantedAuthority> getAuthorities() {
    //     return List.of(new SimpleGrantedAuthority(role.getRoleName()));
    // }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}


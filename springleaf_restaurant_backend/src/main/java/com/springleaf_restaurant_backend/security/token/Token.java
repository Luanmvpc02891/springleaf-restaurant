package com.springleaf_restaurant_backend.security.token;



import com.springleaf_restaurant_backend.user.entities.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Token")
public class Token {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "token_id")
  public Integer id;

  @Column(name = "token")
  public String token;

  @Column(name = "token_type")
  @Enumerated(EnumType.STRING)
  public TokenType tokenType = TokenType.BEARER;

  @Column(name = "revoked")
  public boolean revoked;

  @Column(name = "expired")
  public boolean expired;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  public User user;
}

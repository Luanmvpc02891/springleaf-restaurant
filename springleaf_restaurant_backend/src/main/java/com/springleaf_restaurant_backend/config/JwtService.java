package com.springleaf_restaurant_backend.config;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    private static final String SECRET_KEY = "2a31aa47a04e0aa02af396edc4ce75435758b6d350e279ea1ab114b69c627e0f";
    // Danh sách đen để lưu trạng thái của các token đã hết hạn
    private Set<String> loggedInUsers = new HashSet<>();

    // Đánh dấu người dùng đã đăng nhập thành công
    public void userLoggedIn(String username) {
        loggedInUsers.add(username);
    }

    // Đánh dấu người dùng đã đăng xuất
    public void userLoggedOut(String username) {
        loggedInUsers.remove(username);
    }

    public String extractUserName(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    public <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String refreshToken(String oldToken, UserDetails userDetails) {
        final Date now = new Date();
        final Date expirationDate = new Date(now.getTime() + 1000 * 60 * 24); // Thời gian sống mới

        return Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject(userDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Kiểm tra xem token có hợp lệ hay không và xem người dùng có đăng xuất hay
    // không
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUserName(token);

        // Kiểm tra xem người dùng có trong danh sách đăng nhập hay không
        if (!loggedInUsers.contains(username)) {
            return false; // Người dùng đã đăng xuất
        }

        // Kiểm tra xác thực bình thường
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}

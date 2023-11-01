package com.springleaf_restaurant_backend.security.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api")
public class LoginRestController {
    @GetMapping("/oauth/google-login")
    public Map<String,Object> getMethodName(OAuth2AuthenticationToken auth2AuthenticationToken) {
        Object email = auth2AuthenticationToken.getPrincipal().getAttributes().get("email");
        System.out.println(email);
        return auth2AuthenticationToken.getPrincipal().getAttributes();
    }

}

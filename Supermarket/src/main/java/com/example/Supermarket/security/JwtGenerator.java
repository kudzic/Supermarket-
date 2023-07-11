package com.example.Supermarket.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
@Component
public class JwtGenerator extends OncePerRequestFilter {

    private String secret="343271bcd56f31099d0645089396ded109b35331d9e4c8bd3e238a57923ed9b98088c38be1a9815b875ca2478a19955bd490590fa79013122ac83b27e1fd55f2";

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        SecretKey key= Keys.hmacShaKeyFor(secret.getBytes());
        if(auth!=null){
            String token= Jwts.builder()
                    .setIssuer("Store's Admin")
                    .setSubject("JWT Token")
                    .claim("authorities",auth.getAuthorities())
                    .claim("user",auth.getName())
                    .signWith(key)
                    .compact();
            System.out.println("Token: "+token);
            response.addHeader("Authorization",token);
        }
        filterChain.doFilter(request,response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        return !request.getServletPath().equals("/api/v1/product/add");
    }
}

package com.example.Supermarket.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@Service
public class JWTService {
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private final String SECRET_KEY="apkesichbrjneiowsuyayvwaiwwsdhuhceuhshfbhenjsbhcbebhaeu";

    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ TimeUnit.DAYS.toMillis(1)))
                .setIssuer("Shop Security")
                .claim("authorities",userDetails.getAuthorities())
                .claim("name",userDetails.getUsername())
                .setAudience("Shop Stakeholders")
                .setId(String.valueOf(id))
                .signWith(getSignIn())
                .compact();
    }
    public boolean isTokenExpired(String jwtToken){
        return getAllClaims(jwtToken).getExpiration().before(new Date());
    }


    public String extractUsername(String jwtToken){
        return getAllClaims(jwtToken).getSubject();
    }
    public boolean isTokenValid(String jwtToken,UserDetails userDetails){
        final String username=extractUsername(jwtToken);
        return (isTokenExpired(jwtToken) && username.equals(userDetails.getUsername()));
    }

    public Claims getAllClaims(String jwtToken){
        return Jwts.parserBuilder()
                .setSigningKey(getSignIn())
                .build()
                .parseClaimsJws(jwtToken)
                .getBody();
    }
    private Key getSignIn() {
      byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY);
      return Keys.hmacShaKeyFor(keyBytes);
    }

}

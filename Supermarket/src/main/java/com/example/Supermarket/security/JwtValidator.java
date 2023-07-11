package com.example.Supermarket.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

@Component
public class JwtValidator extends OncePerRequestFilter {
    private String secret="343271bcd56f31099d0645089396ded109b35331d9e4c8bd3e238a57923ed9b98088c38be1a9815b875ca2478a19955bd490590fa79013122ac83b27e1fd55f2";

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String header=request.getHeader("Authorization");
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        SecretKey key= Keys.hmacShaKeyFor(secret.getBytes());

        if(auth!=null){
            try{
                Claims claims= Jwts.parserBuilder()
                        .setSigningKey(key)
                        .build()
                        .parseClaimsJws(header)
                        .getBody();
                String username=claims.get("user").toString();
                String authorities=claims.get("authorities").toString();
                Authentication auth2=new UsernamePasswordAuthenticationToken(username,null,List.of(new SimpleGrantedAuthority(authorities)));
                SecurityContextHolder.getContext().setAuthentication(auth2);
                System.out.println("Token: "+ header);
                response.addHeader("Authorization",header);

            }
            catch (Exception e){
                throw new UsernameNotFoundException("Invalid Token");
            }
        }
        filterChain.doFilter(request,response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        return  !request.getServletPath().equals("/login");
    }
}

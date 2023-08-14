package com.example.Supermarket.config;

import com.example.Supermarket.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class ApplicationSecurityConfig {
    @Autowired
    private final JWTSecurityFilter jwtSecurityFilter;
    @Autowired
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{

            http
                    .csrf().disable()
                    .cors().disable()
                    .authorizeHttpRequests()

                    .requestMatchers(HttpMethod.POST,"/api/v1/product/add").hasAnyAuthority("ADMIN","MANAGER")
                    .requestMatchers(HttpMethod.GET,"/api/v1/product/product").permitAll()
                    .requestMatchers(HttpMethod.GET,"/api/v1/product/products").permitAll()
                    .requestMatchers("/api/v1/product/update").hasAnyAuthority("ADMIN","MANAGER")
                    .requestMatchers("/api/v1/product/delete").hasAnyAuthority("ADMIN","MANAGER")
                    .requestMatchers("/api/v1/customer/addCustomer").hasAnyAuthority("ADMIN","MANAGER")
                    .requestMatchers("/api/v1/customer/cart").permitAll()
                    .requestMatchers("/api/v1/customer/add").permitAll()
                    .requestMatchers("/api/v1/customer/delete").permitAll()
                    .requestMatchers("/api/v1/orders/allOrders").hasAnyAuthority("EMPLOYEE","ADMIN","MANAGER")
                    .requestMatchers("/api/v1/orders/customerOrders").hasAnyAuthority("EMPLOYEE","ADMIN","MANAGER")
                    .requestMatchers("/api/v1/orders/customerOrder").hasAnyAuthority("EMPLOYEE","ADMIN","MANAGER")
                    .requestMatchers("/api/v1/orders/addOrder").hasAnyAuthority("EMPLOYEE","ADMIN","ADMIN")
                    .requestMatchers("/api/v1/auth/**").permitAll().anyRequest().authenticated()
                    .and()
                    .httpBasic()
                    .and()
                    .formLogin()
                    .and()
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                    .authenticationProvider(authenticationProvider)
                    .addFilterBefore(jwtSecurityFilter, UsernamePasswordAuthenticationFilter.class)

            ;

            return http.build();
    }
}

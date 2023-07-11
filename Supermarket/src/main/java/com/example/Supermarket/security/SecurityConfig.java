package com.example.Supermarket.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().disable()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST).hasAnyAuthority("ADMIN","MANAGER")
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
                .and()
                .httpBasic()
                .and()
                .formLogin()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(new JwtGenerator(), BasicAuthenticationFilter.class)
                .addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class)
                ;

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(){
      return new UserServiceImpl();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(userDetailsService());
        return daoAuthenticationProvider;
    }
}

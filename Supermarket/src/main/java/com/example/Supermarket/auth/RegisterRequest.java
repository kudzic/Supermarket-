package com.example.Supermarket.auth;

import com.example.Supermarket.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private Role role;

}

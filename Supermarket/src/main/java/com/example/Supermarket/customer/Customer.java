package com.example.Supermarket.customer;

import com.example.Supermarket.cart.ShoppingCart;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    private String name;
    private String email;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_shopping_cart_id")
    private ShoppingCart shoppingCart;
}

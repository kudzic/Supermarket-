package com.example.Supermarket.cart;

import com.example.Supermarket.product.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer customerID;
    private Integer total;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_shoppingCartId")
    private List<ShoppingCartItems> shoppingCartItems;

}

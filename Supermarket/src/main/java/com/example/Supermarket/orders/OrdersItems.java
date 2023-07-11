package com.example.Supermarket.orders;

import com.example.Supermarket.product.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class OrdersItems {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderItemId;
    private Integer orderId;
    private String productID;
    private Integer quantity;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_order")
    private Orders order;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_product")
    private Product product;
}

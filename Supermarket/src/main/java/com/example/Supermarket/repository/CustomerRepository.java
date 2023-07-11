package com.example.Supermarket.repository;

import com.example.Supermarket.cart.ShoppingCart;
import com.example.Supermarket.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findCustomerByCustomerId(Integer id);
    ShoppingCart findByShoppingCart(Integer id);
}

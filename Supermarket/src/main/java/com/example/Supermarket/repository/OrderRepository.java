package com.example.Supermarket.repository;

import com.example.Supermarket.orders.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer> {
    List<Orders> findOrdersByCustomerId (int customerId);
    Orders findOrdersByOrderId(Integer id);


}

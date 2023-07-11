package com.example.Supermarket.repository;

import com.example.Supermarket.orders.OrdersItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemsRepository extends JpaRepository<OrdersItems,Integer> {
   OrdersItems findOrdersItemsByOrderItemId(Integer id);
}

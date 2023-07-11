package com.example.Supermarket.service;

import com.example.Supermarket.orders.Orders;
import com.example.Supermarket.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
  private final OrderRepository orderRepository;

  public List<Orders> getOrderDetails(){
    return orderRepository.findAll();
  }

  public List<Orders> getCustomersOrders(int customerId){
    return orderRepository.findOrdersByCustomerId(customerId);
  }

}
